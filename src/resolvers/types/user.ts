import { JOIN_USER_CUSTOMERS } from "./../../sql/SQL_RELATIONS";
import { IResolvers } from "graphql-tools";

const resolverTypesUser: IResolvers = {
  User: {
    async personas(parent, __, { sql }) {
      const persona = new Array(0);
      try {
        const [rows]: any[] = await sql.query(JOIN_USER_CUSTOMERS, parent.id);
        //Llenar elementos
        rows.forEach((element: any) => {
          persona.push({
            id: element.idpersona,
            nombre: element.nombre,
            apellidoPaterno: element.apellidoPaterno,
            apellidoMaterno: element.apellidoMaterno,
          });
        });
        return persona;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  },
};

export default resolverTypesUser;
