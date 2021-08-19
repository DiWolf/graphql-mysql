//configuración de variables de entorno
import * as dotenv from "dotenv";
const path = "src/config/.env";
dotenv.config({ path });
//Configuraciones de Apollo Server
import { ApolloServer } from "apollo-server";
import sql from "./config/mysql.persistence";
//activar playground local
import schema from "./schema";

server();

function server() {
  //creamos el servidor apollo
  const serverApollo = new ApolloServer({
    schema,
    context: async () => {
      return {
        sql,
      };
    },
  });

  serverApollo.listen(process.env.PORT).then((url) => {
    console.log(`Conexión exitosa: ${url.url}`);
  });
}
