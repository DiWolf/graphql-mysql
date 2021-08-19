/**
 * Archivo: SQL_PERSONAS.TS
 * Descripción: Describe las operaciones CRUD para los clientes
 */
//Crear un nuevo cliente
export const CREATED_CLIENT =
  "INSERT INTO personas (id,nombre,apellidoPaterno,apellidoMaterno) VALUES (?,?,?,?) ";
//modificar la información del cliente
export const UPDATE_CLIENT =
  "UPDATE personas SET nombre=?, apellidoPaterno=?, apellidoMaterno=?, Curp=?, Rfc=? WHERE id=?";
//Eliminar un cliente (desactivar)
export const DEACTIVATE_CLIENT = "UPDATE personas SET activo = 0 WHERE id=?";
//Activar un cliente
export const ACTIVATE_CLIENT = "UPDATE personas SET activo = 1 WHERE id=?";
//Obtener clientes del usuario
//obtener todos los clientes y ordenar por activos.
export const SELECT_PERSONAS = "SELECT * FROM personas";
//Estas son validaciones no obligatorias
//Buscamos contribuyentes por curp
export const SEARCH_CURP = "SELECT * FROM personas WHERE curp =? ";
//Buscamos contribuyentes por rfc
export const SERACH_RFC = "SELECT * FROM personas WHERE rfc = ?";
