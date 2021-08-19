const GMR = require("@wiicamp/graphql-merge-resolvers");
//Query's
import resolverQueryAccount from "./account";
import resolverQueryPersona from "./persona";

const mainResolver = GMR.merge([resolverQueryAccount, resolverQueryPersona]);

export default mainResolver;
