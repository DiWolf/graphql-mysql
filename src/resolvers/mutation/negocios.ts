import { IResolvers } from "graphql-tools";
import { INSERT_PERSONA_NEGOCIO } from "./../../sql/SQL_RELATIONS";
import { CREATED_STORE } from "./../../sql/SQL_NEGOCIOS";
const uuid4 = require("uuid4");
const resolverMutationNegocios: IResolvers = {
  Mutation: {
    //crear un nuevo registro
    async addNegocios(_, { negocio, idPersona }, { sql }) {
      try {
        //extraemos la información
        let { razonSocial, rfc, cuentaPredial, rpu } = negocio;
        await sql.query("START TRANSACTION");
        //guardamos la información en la base de datos
        let idnegocio = uuid4();
        await sql.query(CREATED_STORE, [
          idnegocio,
          razonSocial,
          cuentaPredial,
          rpu,
        ]);
        //guardamos relacion
        await sql.query(INSERT_PERSONA_NEGOCIO, [idPersona, idnegocio]);
        //finalizamos transacción
        await sql.query("COMMIT");
        return "Operación finalizada con éxito";
      } catch (error: any) {
        sql.query("ROLLBACK");
        throw new Error(error);
      }
    },
  },
};

export default resolverMutationNegocios;
