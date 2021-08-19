/**
 * Archivo: Account.ts
 * Description: Define la gestión de las cuentas de usuario
 */
import { IResolvers } from "graphql-tools";
const uuid4 = require("uuid4");
import bcrypt from "bcryptjs";
import { CREATE_USER } from "./../../sql/SQL_USERS";
const resolverMutationAccount: IResolvers = {
  Mutation: {
    //Crear una cuenta de usuario
    async createAccount(_, { User }, { sql }) {
      try {
        //Destructurin
        let { user, password, nombre, empleadoId, activo, rol } = User;
        //creamos un encriptación
        password = bcrypt.hashSync(password, 10);
        //Iniciamos la transacción para agregar al usuario
        await sql.query("START TRANSACTION");
        let now = new Date();
        //Encriptar la contraseña antes de guardarla en la base de datos
        await sql.query(CREATE_USER, [
          uuid4(),
          user,
          password,
          nombre,
          empleadoId,
          activo,
          now,
          rol,
        ]);
        await sql.query("COMMIT");
        //Finalizamos la transacción
        return "Operación finalizada con éxito";
      } catch (error: any) {
        await sql.query("ROLLBACK");
        //Si falló la operación de inserción deshacemos la operación de insert
        throw new Error(error);
      }
    },
    //Desactivar usuario
    //Reactivar usuario
    //Modificar contraseña del usuario (solo administrador)
  },
};

export default resolverMutationAccount;
