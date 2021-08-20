/**
 * Archivo: SQL_NEGCIOS.ts
 * Descripción: Registra los negocios del contribuyente
 */

//Registrar un nuevo negocio
export const CREATED_STORE =
  "INSERT INTO negocios (id,razonsocial,cuentapredial,rpu) VALUES (?,?,?,?)";
//Modificar la información del negocio
export const UPDATE_STORE =
  "UPDATE negocios razonsocial=?, cuentapredial=?, rpu=? WHERE id=?";
//Eliminar negocio
export const DELETE_STORE = "UPDATE negocios activo=false WHERE id=?";
//Activate negocio
export const ACTIVATE_STORE = "UPDATE negocios activo=true WHERE id=?";
//Obtener ngeocios activos
export const GET_STORES = "SELECT * FROM negocios WHERE activo = true";
