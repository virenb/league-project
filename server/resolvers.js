const Team = require('./models/Team');

const resolvers = {
	Query: {
		teams: () => Team.find()
	},
	Mutation: {
		createTeam: async (_, { name }) => {
			const team = new Team({ name });
			await team.save();
			return team;
		}
	}
};

module.exports = resolvers;
