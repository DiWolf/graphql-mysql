//Crear un nuevo cliente
export const CREATE_USER =
  "INSERT INTO `usuarios` (`id`, `user`, `password`, `nombre`, `empleadoId`, `activo`,`alta`,`rol`) VALUES (?, ?, ?, ?, ?, ?,?,?)";
//Seleccionar todos los usuarios
export const SELECT_USERS = "SELECT * FROM usuarios";
//Actualizar información del usuario
export const UPDATE_USER_INFO = "";
//Actualizar contraseña del usuario
export const UPDATE_PASSWORD = "";
//Desactivar un usuario usuario
export const DEACTIVATE_USER = "UPDATE usuarios SET activo=false WHERE id=?";
//Activar un usuario
export const ACTIVATE_USER = "UPDATE usuarios SET activo=true WHERE id=?";

//Para hacer el login
export const GET_USER =
  "SELECT id,user,nombre,rol,password FROM usuarios WHERE user=? AND activo=1 LIMIT 1";
export const CHECK_PASS =
  "SELECT password FROM usuarios WHERE password=? AND activo=1 LIMIT 1";
