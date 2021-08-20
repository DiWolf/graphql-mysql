const GMR = require("@wiicamp/graphql-merge-resolvers");
import resolverMutationAccount from "./account";
import resolverMutationPersona from "./persona";
import resolverMutationNegocios from "./negocios";
const resolverMutation = GMR.merge([
  resolverMutationAccount,
  resolverMutationPersona,
  resolverMutationNegocios
]);

export default resolverMutation;
