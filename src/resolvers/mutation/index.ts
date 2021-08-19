const GMR = require("@wiicamp/graphql-merge-resolvers");
import resolverMutationAccount from "./account";
import resolverMutationPersona from "./persona";
const resolverMutation = GMR.merge([
  resolverMutationAccount,
  resolverMutationPersona,
]);

export default resolverMutation;
