/*
Navicat MySQL Data Transfer
Date: 2021-08-18 22:45:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for direccion
-- ----------------------------
DROP TABLE IF EXISTS `direccion`;
CREATE TABLE `direccion` (
  `id` varchar(36) NOT NULL,
  `calle` varchar(170) DEFAULT NULL,
  `noExterior` varchar(10) DEFAULT NULL,
  `noInterior` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for persona-direccion
-- ----------------------------
DROP TABLE IF EXISTS `persona-direccion`;
CREATE TABLE `persona-direccion` (
  `idpersona` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `iddireccion` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  KEY `fkIddireccion` (`iddireccion`),
  KEY `fkidpers` (`idpersona`),
  CONSTRAINT `fkIddireccion` FOREIGN KEY (`iddireccion`) REFERENCES `direccion` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fkidpers` FOREIGN KEY (`idpersona`) REFERENCES `personas` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for personas
-- ----------------------------
DROP TABLE IF EXISTS `personas`;
CREATE TABLE `personas` (
  `id` varchar(36) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidoPaterno` varchar(100) DEFAULT NULL,
  `apellidoMaterno` varchar(100) DEFAULT NULL,
  `Curp` varchar(20) DEFAULT NULL,
  `Rfc` varchar(20) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for persona-usuario
-- ----------------------------
DROP TABLE IF EXISTS `persona-usuario`;
CREATE TABLE `persona-usuario` (
  `idpersona` varchar(36) NOT NULL,
  `idusuario` varchar(36) NOT NULL,
  KEY `fkIdPersona` (`idpersona`),
  KEY `fkIdUsuario` (`idusuario`),
  CONSTRAINT `fkIdPersona` FOREIGN KEY (`idpersona`) REFERENCES `personas` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fkIdUsuario` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` varchar(36) NOT NULL,
  `user` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nombre` varchar(170) DEFAULT NULL,
  `empleadoId` varchar(10) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '0',
  `alta` date DEFAULT NULL,
  `rol` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userEmpleadoUnique` (`user`),
  UNIQUE KEY `empleadoId` (`empleadoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
