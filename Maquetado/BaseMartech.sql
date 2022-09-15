CREATE TABLE `color`(
`id` smallint(6) NOT NULL AUTO_INCREMENT,
`nombre` varchar(100) NOT NULL,
PRIMARY KEY (`id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color`  DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'gris'),(2,'negro'),(3,'blanco'),(4,'dorado'),(5,'azul'),(6,'rosa'),(7,'rojo'),(8,'plateado'),(9,'celeste'),(10,'violeta'),(11,'verde'),(12,'amarillo'),(13,'bordo'),(14,'azul tornasolado'),(15,'beige');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

CREATE TABLE `marca`(
id smallint(6) NOT NULL AUTO_INCREMENT,
`nombre` varchar(100) NOT NULL,
PRIMARY KEY (`id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca`  DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Apple'),(2,'Samsung'),(3,'Motorola'),(4,'Huawei'),(5,'Tesla'),(6,'LG'),(7,'Xiamoi');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

CREATE TABLE `os`(
`id` smallint(6) NOT NULL AUTO_INCREMENT,
`nombre` varchar(100) NOT NULL,
PRIMARY KEY (id))
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
LOCK TABLES `os` WRITE;
/*!40000 ALTER TABLE `os`  DISABLE KEYS */;
INSERT INTO `os` VALUES (1,'Ios'),(2,'Android'),(3,'Windows Phone'),(4,'Tesla OS'),(5,'MIui');
/*!40000 ALTER TABLE `os` ENABLE KEYS */;
UNLOCK TABLES;

CREATE TABLE `users`(
`id` smallint(6) NOT NULL AUTO_INCREMENT,
`firstName` varchar(100) NOT NULL,
`lastName` varchar(100) NOT NULL,
`email` varchar(100) NOT NULL,
`contrasenia` text NOT NULL,
`imagenPerfil` varchar(250),
`esAdmin` varchar(5),
PRIMARY KEY (`id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

 CREATE TABLE `products`(
 `id` smallint(6) NOT NULL AUTO_INCREMENT,
 `id_marca` smallint (100) NOT NULL,
 `nombreProducto` varchar(100) NOT NULL,
 `imgIndex` varchar(250) NOT NULL,
 `id_color` smallint (6) NOT NULL,
 `category` varchar (100),
 `descripcion` varchar(250) NOT NULL,
 `precioVenta` smallint (6) NOT NULL,
 `oferta` varchar (5) NOT NULL,
 `descuento` DECIMAL(2,2) NOT NULL,
 `estadoEquipo` varchar (100) NOT NULL,
 `resolucion` DECIMAL(2,2) NOT NULL,
 `memoriaRam` smallint (6) NOT NULL,
 `memoriaInterna` smallint (6) NOT NULL,
 `dualSim` varchar (5) NOT NULL,
 `id_os` smallint(6) NOT NULL,
 `senal` varchar (10) NOT NULL,
 PRIMARY KEY (id),
CONSTRAINT `products_marca_id_foreign` FOREIGN KEY (`id_marca`) REFERENCES `marca` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `products_color_id_foreign` FOREIGN KEY (`id_color`) REFERENCES `color` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `products_os_id_foreign` FOREIGN KEY (`id_os`) REFERENCES `os` (`id`) ON DELETE CASCADE ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products`  DISABLE KEYS */;
INSERT INTO `products` (id_marca, nombreProducto, imgIndex, id_color, category, descripcion, precioVenta, oferta, descuento, estadoEquipo, resolucion, memoriaRam, memoriaInterna, dualSim, id_os, senal) VALUES ('1', 'Iphone 12 Pro', 'imagen 1', '2', 'Premium', 'Su nueva pantalla retina es de 4 pulgadas y tiene la cámara iSight de 8 megapíxeles con flash TrueTone, grabación a cámara lenta (120 fps), modo ráfaga de 10 fotos por segundo y foto panorámica. También cuenta con un SoC A7 y con un coprocesador de movimiento M7 y está disponible en 16, 32 y 64 GB.0', '1200', 'no',"", 'Excelente', '1024*768', '8', '512', 'no', '1', '5'),
( '1', 'Iphone 13 Pro MAX', 'imagen 1', '1', 'Premium', 'Su nueva pantalla retina es de 4 pulgadas y tiene la cámara iSight de 8 megapíxeles con flash TrueTone, grabación a cámara lenta (120 fps), modo ráfaga de 10 fotos por segundo y foto panorámica. También cuenta con un SoC A7 y con un coprocesador de movimiento M7 y está disponible en 16, 32 y 64 GB.0', '1200', 'si',"0,10", 'Excelente', '1024*768', '8', '512', 'no', '1', '5');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

CREATE TABLE `carrito`(
`id` smallint(6) AUTO_INCREMENT,
`users_id` smallint(6) NOT NULL,
`products_id` smallint(6) NOT NULL,
`products_nombreProducto` varchar(100) NOT NULL,
`products_marca` smallint (6) NOT NULL,
`products_condicion` varchar(100) NOT NULL,
`products_precioVenta` smallint (6) NOT NULL,
`products_imgIndex` varchar(250) NOT NULL,
`estadoCarrito` varchar(100) NOT NULL,
PRIMARY KEY (`id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito`  DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;






