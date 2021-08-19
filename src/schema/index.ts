import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import "graphql-import-node";
import resolvers from "../resolvers";
//Revisar la documentación
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
//Constantes
const loadedFiles = loadFilesSync(`${__dirname}/**/*.graphql`);
const typeDefs = mergeTypeDefs(loadedFiles);
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
