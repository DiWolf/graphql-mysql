import { JOIN_CUSTOMERS_DIRECTION } from "./../../sql/SQL_RELATIONS";
import { IResolvers } from "graphql-tools";
const resolverTypesPersona: IResolvers = {
  Persona: {
    async direccion(parent, __, { sql }) {
      const direccion = new Array(0);
      try {
        const [rows]: any[] = await sql.query(
          JOIN_CUSTOMERS_DIRECTION,
          parent.id
        );

        //Buscamos los elementos en el vector
        rows.forEach((element: any) => {
          direccion.push({
            calle: element.calle,
            noExterior: element.noExterior,
            noInterior: element.noInterior,
          });
        });
        //retornamos los datos
        return direccion;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  },
};

export default resolverTypesPersona;
