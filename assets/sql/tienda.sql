-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 21-11-2017 a las 19:57:49
-- Versión del servidor: 5.6.34-log
-- Versión de PHP: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------
CREATE DATABASE IF NOT EXISTS TiendaTafiraSport2;
--
USE TiendaTafiraSport2;
------------------------------------------------------------

--
-- Estructura de tabla para la tabla `deporte`
--

CREATE TABLE `deporte` (
  `id_deporte` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `deporte`
--

INSERT INTO `deporte` (`id_deporte`, `nombre`) VALUES
(1, 'futbol'),
(2, 'esqui'),
(3, 'padel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `edad`
--

CREATE TABLE `edad` (
  `id_edad` int(11) NOT NULL,
  `edad` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `edad`
--

INSERT INTO `edad` (`id_edad`, `edad`) VALUES
(1, 'adulto'),
(2, 'niño');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `id_factura` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_seleccion` int(11) DEFAULT NULL,
  `fecha` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `item`
--

CREATE TABLE `item` (
  `id_item` int(11) NOT NULL AUTO_INCREMENT,
  `id_producto` int(11) NOT NULL,

--  `id_tipoproducto` int(11) DEFAULT NULL,
--  `id_edad` int(11) DEFAULT NULL,
--  `id_sexo` int(11) DEFAULT NULL,
--  `id_deporte` int(11) DEFAULT NULL,

  PRIMARY KEY(id_item),
  FOREIGN KEY (id_producto) REFERENCES producto(id_producto)

) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_tipopro` int(11) NOT NULL,
  `marca` varchar(20) NOT NULL,

  `modelo` varchar(20) NOT NULL,
  -- Los siguientes valores en caso del calzado se corresponden con el 'numero' y para otros productos
  -- en los que no tienen sentido su valor será 'Null'
  `tallaminima` varchar(3) DEFAULT NULL,
  `tallamaxima` varchar(3) DEFAULT NULL,

  `id_sexo` int(11) DEFAULT NULL,
  `id_edad` int(11) DEFAULT NULL,
  `id_deporte` int(11) DEFAULT NULL,

  `nombre` varchar(20) NOT NULL,
  `precio` varchar(10) NOT NULL,

  FOREIGN KEY (id_tipopro) REFERENCES tipoproducto(id_tipopro),
  FOREIGN KEY (marca) REFERENCES marca(nombre)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO producto (`id_tipopro`, `marca`, `nombre`, `modelo`, `tallaminima`, `tallamaxima`, `precio`, `id_sexo`, `id_edad`, `id_deporte`) VALUES
(1, 'adidas', 'camiseta', 'k20', '34', '48', '30', '1', null, '1'),
(1, 'nike', 'camiseta', 'k21', '34', '48', '32', '2', null, '3'),
(1, 'mizuno', 'camiseta', 'k33', '36', '48', '29', '1', null, '1'),
(1, 'puma', 'pantalon', 'man', '36', '52', '40', '1', null, '2'),
(1, 'asics', 'jersey', 'jsy', '36', '48', '35', '2', null, '2'),
(3, 'asics', 'balon', 'dplaya', null, null, '20', '1', null, '1'),
(2, 'puma', 'bota', 'striker', '36', '50', '55', '2', null, '2'),
(2, 'mizuno', 'playera', 'rider', '36', '50', '79', '1', null, '3'),
(3, 'nike', 'mochila', 'xhs', 's', 'xl', '36', '1', null, null),
(3, 'adidas', 'reloj', 'marker', null, null, '63', '2', null, null);


--
-- Estructura de tabla para la tabla `marca`
--
CREATE TABLE `marca` {
    `id_marca` int(11) NOT NULL,
    `nombre` varchar(10) NOT NULL PRIMARY KEY
} ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `marca` (`nombre`) VALUES
(1, 'adidas'),
(2, 'nike'),
(3, 'mizuno'),
(4, 'puma'),
(5, 'asics');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seleccion`
--

CREATE TABLE `seleccion` (
  `id_seleccion` int(11) NOT NULL,
  `id_item` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sexo`
--

CREATE TABLE `sexo` (
  `id_sexo` int(11) NOT NULL,
  `sexo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sexo`
--

INSERT INTO `sexo` (`id_sexo`, `sexo`) VALUES
(1, 'hombre'),
(2, 'mujer');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoproducto`
--

CREATE TABLE `tipoproducto` (
  `id_tipopro` int(11) NOT NULL,
  `tipopro` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipoproducto`
--

INSERT INTO `tipoproducto` (`id_tipopro`, `tipopro`) VALUES
(1, 'ropa'),
(2, 'calzado'),
(3, 'accesorios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `pais` varchar(20) DEFAULT NULL,
  `cp` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `usuario` varchar(30) DEFAULT NULL,
  `contraseña` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `deporte`
--
ALTER TABLE `deporte`
  ADD PRIMARY KEY (`id_deporte`);

--
-- Indices de la tabla `edad`
--
ALTER TABLE `edad`
  ADD PRIMARY KEY (`id_edad`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id_factura`);

--
-- Indices de la tabla `item`
--
--ALTER TABLE `item`
--  ADD PRIMARY KEY (`id_item`);

--
-- Indices de la tabla `producto`
--
--ALTER TABLE `producto`
--  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `seleccion`
--
ALTER TABLE `seleccion`
  ADD PRIMARY KEY (`id_seleccion`);

--
-- Indices de la tabla `sexo`
--
ALTER TABLE `sexo`
  ADD PRIMARY KEY (`id_sexo`);

--
-- Indices de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  ADD PRIMARY KEY (`id_tipopro`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `usuario` (`usuario`,`contraseña`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `deporte`
--
ALTER TABLE `deporte`
  MODIFY `id_deporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `edad`
--
ALTER TABLE `edad`
  MODIFY `id_edad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `id_factura` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `item`
--
--ALTER TABLE `item`
--  MODIFY `id_item` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `producto`
--
--ALTER TABLE `producto`
 -- MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `seleccion`
--
ALTER TABLE `seleccion`
  MODIFY `id_seleccion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `sexo`
--
ALTER TABLE `sexo`
  MODIFY `id_sexo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  MODIFY `id_tipopro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
