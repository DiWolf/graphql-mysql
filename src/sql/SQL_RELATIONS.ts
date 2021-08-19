//Funciones de relacion

//Inserta usuario-id e id-persona
export const INSERT_PERSONA_USUARIO =
  "INSERT INTO `persona-usuario` (idpersona,idusuario) VALUES(?,?)  ";
export const INSERT_PERSONA_DIRECTION =
  "INSERT INTO `persona-direccion` (idpersona,iddireccion) VALUES (?,?)";

//Joins
export const JOIN_CUSTOMERS_DIRECTION =
  "SELECT CD.iddireccion,CD.idpersona, D.calle, D.noExterior, D.noInterior FROM `persona-direccion` AS CD INNER JOIN `direccion` AS D ON CD.iddireccion = D.id WHERE idpersona = ?";
