import bcrypt from "bcryptjs";
import { SELECT_USERS, GET_USER } from "./../../sql/SQL_USERS";
import { IResolvers } from "graphql-tools";
import JWT from "../../lib/jwt";

const resolverQueryAccount: IResolvers = {
  Query: {
    //OBTENER LOS USUARIOS DEL SISTEMA
    async getUsuarios(_, __, { sql }) {
      try {
        const [rows]: any[] = await sql.execute(SELECT_USERS);
        return rows;
      } catch (error: any) {
        throw new Error(error);
      }
    },
    //LOGIN
    async login(_, { user, password }, { sql }) {
      try {
        //Buscamos el usuario
        const [userl]: any[] = await sql.query(GET_USER, [user]);
        if (userl.length === 0) throw new Error("Usuario no existe.");
        if (!bcrypt.compareSync(password, userl[0].password))
          throw new Error("La contraseña que ingresaste es incorrecta.");
        //Si pasamos las validaciones creamos el token de sesión
        delete userl[0].password;
        return new JWT().sign(userl[0]);
      } catch (error: any) {
        throw new Error(error);
      }
    },
    //Update data
    // async updateProfile(_, { userInput }, { sql }) {
    //   try {
    //   } catch (error: any) {
    //     throw new Error(error);
    //   }
    // },
  },
};

export default resolverQueryAccount;
