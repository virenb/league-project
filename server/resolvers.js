const Team = require('./models/Team');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const resolvers = {
	Query: {
		teams: () => Team.find(),
		users: () => User.find(),
		currentUser: async (_, { user }) => {
			if (!user) {
				throw new Error('Not Authenticated');
			}
			return await User.findById(user.id);
		}
	},
	Mutation: {
		createTeam: async (_, { name }) => {
			const team = new Team({ name });
			await team.save();
			return team;
		},
		register: async (_, { email, name, password }, context, info) => {
			const hashedPassword = await bcrypt.hash(password, 10);
			const user = new User({ email, name, password: hashedPassword });
			await user.save();
			return user;
		},
		login: async (_, { email, password }, context, info) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new Error('Invalid Login');
			}

			const passwordMatch = await bcrypt.compare(password, user.password);

			if (!passwordMatch) {
				throw new Error('Invalid Login');
			}
			const token = jwt.sign(
				{
					id: user.id,
					email: user.email
				},
				process.env.JWT_SECRET,
				{
					expiresIn: '30d' // token will expire in 30days
				}
			);
			return {
				token,
				user
			};
		}
	}
};

module.exports = resolvers;
