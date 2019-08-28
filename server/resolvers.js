const Team = require('./models/Team');
const User = require('./models/User');

const resolvers = {
	Query: {
		teams: () => Team.find(),
		users: () => User.find()
	},
	Mutation: {
		createTeam: async (_, { name }) => {
			const team = new Team({ name });
			await team.save();
			return team;
		},
		register: async (_, { email, name, password }) => {
			const user = new User({ email, name, password });
			await user.save();
			return user;
		},
		login: () => {}
	}
};

module.exports = resolvers;
