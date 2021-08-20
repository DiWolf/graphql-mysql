//Funciones de relacion

//Inserta usuario-id e id-persona
export const INSERT_PERSONA_USUARIO =
  "INSERT INTO `persona-usuario` (idpersona,idusuario) VALUES(?,?)  ";
export const INSERT_PERSONA_DIRECTION =
  "INSERT INTO `persona-direccion` (idpersona,iddireccion) VALUES (?,?)";
export const INSERT_PERSONA_NEGOCIO =
  "INSERT INTO `persona-negocio` (idpersona,idnegocio) VALUES (?,?)";

//Joins
export const JOIN_CUSTOMERS_DIRECTION =
  "SELECT CD.iddireccion,CD.idpersona, D.calle, D.noExterior, D.noInterior FROM `persona-direccion` AS CD INNER JOIN `direccion` AS D ON CD.iddireccion = D.id WHERE idpersona = ?";
//Obtener los clientes del usuario logueado
export const JOIN_USER_CUSTOMERS =
  "SELECT PU.idpersona, PU.idusuario, P.nombre, P.apellidoPaterno, P.apellidoMaterno FROM `persona-usuario` AS PU INNER JOIN personas AS P ON PU.idpersona = P.id WHERE idusuario = ?";
//Obtener negocios del contribuyente
export const JOIN_CUSTOMERS_STORES =
  "SELECT CP.idnegocio,CP.idpersona,N.razonsocial,N.cuentapredial,N.rpu FROM `persona-negocio` AS CP INNER JOIN `negocios` AS N ON CP.idnegocio = N.id WHERE idpersona = ? ";
