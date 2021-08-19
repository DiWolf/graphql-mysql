import { IResolvers } from "graphql-tools";
import { SELECT_PERSONAS } from "../../sql/SQL_PERSONAS";

const resolverQueryPersona: IResolvers = {
  Query: {
    //Obtener todos clientes
    async getClients(_, __, { sql }) {
      try {
        const [rows]: [any] = await sql.execute(SELECT_PERSONAS);
        return rows;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  },
};

export default resolverQueryPersona;
