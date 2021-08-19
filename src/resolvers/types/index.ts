const GMR = require("@wiicamp/graphql-merge-resolvers");
//Query's
import resolverTypesPersona from "./persona";

const resolverTypes = GMR.merge([resolverTypesPersona]);

export default resolverTypes;
