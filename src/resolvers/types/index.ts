const GMR = require("@wiicamp/graphql-merge-resolvers");
//Query's
import resolverTypesPersona from "./persona";
import resolverTypesUser from "./user";

const resolverTypes = GMR.merge([resolverTypesPersona, resolverTypesUser]);

export default resolverTypes;
