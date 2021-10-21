import miningResolver from "./mining";

export default {
  Query: {
    ...miningResolver.Query,
  },
  Mutation: {
    ...miningResolver.Mutation,
  },
};
