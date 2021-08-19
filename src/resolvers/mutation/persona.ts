import { CREATED_REGISTER_DIRECTION } from "./../../sql/SQL_DIRECTIONS";
import { IResolvers } from "graphql-tools";
const uuid4 = require("uuid4");
import {
  CREATED_CLIENT,
  UPDATE_CLIENT,
  DEACTIVATE_CLIENT,
  ACTIVATE_CLIENT,
} from "./../../sql/SQL_PERSONAS";
import {
  INSERT_PERSONA_USUARIO,
  INSERT_PERSONA_DIRECTION,
} from "./../../sql/SQL_RELATIONS";
const resolverMutationPersona: IResolvers = {
  Mutation: {
    //crear un nuevo registro
    async addpersona(_, { persona }, { sql }) {
      try {
        //Extraer información de persona
        let { nombre, apellidoPaterno, apellidoMaterno } = persona;
        let id_persona = uuid4();
        //iniciamos transacción
        await sql.query("START TRANSACTION");
        //guardamos a base de datos
        await sql.query(CREATED_CLIENT, [
          id_persona,
          nombre,
          apellidoPaterno,
          apellidoMaterno,
        ]);
        //guardamos la relación persona-usuario
        await sql.query(INSERT_PERSONA_USUARIO, [
          id_persona,
          "8837445c-ce40-4cef-84d7-02566750f17a",
        ]);
        //Ahora extraemos los datos de la dirección
        let id_direccion = uuid4();
        let { calle, noExterior, noInterior } = persona.direccion;
        await sql.query(CREATED_REGISTER_DIRECTION, [
          id_direccion,
          calle,
          noExterior,
          noInterior,
        ]);
        await sql.query(INSERT_PERSONA_DIRECTION, [id_persona, id_direccion]);
        //finalizamos y guardamos cambios
        await sql.query("COMMIT");

        return "Operación finalizada con éxito";
      } catch (error: any) {
        await sql.query("ROLLBACK");
        throw new Error(error);
      }
    },
    //Modificar un registro
    async updatePersona(_, { persona }, { sql }) {
      try {
        let { id, nombre, apellidoPaterno, apellidoMaterno, Curp, Rfc } =
          persona;
        await sql.query("START TRANSACTION");
        //modificamos la información
        await sql.query(UPDATE_CLIENT, [
          nombre,
          apellidoPaterno,
          apellidoMaterno,
          Curp,
          Rfc,
          id,
        ]);
        await sql.query("COMMIT");
        return "Operación de actualización finalizada";
      } catch (error: any) {
        await sql.query("ROLLBACK");
        throw new Error(error);
      }
    },
    //Desactivar registro
    async deactivatePersona(_, { id }, { sql }) {
      try {
        await sql.query("START TRANSACTION");
        await sql.query(DEACTIVATE_CLIENT, [id]);
        await sql.query("COMMIT");
        return "Registro desactivado correctamente";
      } catch (error: any) {
        await sql.query("ROLLBACK");
        throw new Error(error);
      }
    },
    //Activate register
    async activatePersona(_, { id }, { sql }) {
      try {
        await sql.query("START TRANSACTION");
        await sql.query(ACTIVATE_CLIENT, [id]);
        await sql.query("COMMIT");
      } catch (error: any) {
        await sql.query("ROLLBACK");
        throw new Error(error);
      }
    },
  },
};

export default resolverMutationPersona;
