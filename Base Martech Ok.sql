DROP DATABASE IF EXISTS `martech_db2`;
CREATE DATABASE `martech_db2`;
USE `martech_db2`;

CREATE TABLE `color`(
`id` smallint(6) NOT NULL AUTO_INCREMENT,
`nombre` varchar(100) NOT NULL,
`createdAt` datetime,
`updatedAt` datetime,
PRIMARY KEY (`id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color`  DISABLE KEYS */;
INSERT INTO `color`(id,nombre) VALUES (1,'gris'),(2,'negro'),(3,'blanco'),(4,'dorado'),(5,'azul'),(6,'rosa'),(7,'rojo'),(8,'plateado'),(9,'celeste'),(10,'violeta'),(11,'verde'),(12,'amarillo'),(13,'bordo'),(14,'azul tornasolado'),(15,'beige');
/*!40000 ALTER TABLE `color`
ENABLE KEYS */;
UNLOCK TABLES;

CREATE TABLE `marca`(
id smallint(6) NOT NULL AUTO_INCREMENT,
`nombre` varchar(100) NOT NULL,
`created_at` TIMESTAMP,
`updated_at` TEXT,
PRIMARY KEY (`id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca`  DISABLE KEYS */;
INSERT INTO `marca` (id, nombre) VALUES (1,'Apple'),(2,'Samsung'),(3,'Motorola'),(4,'Huawei'),(5,'Tesla'),(6,'LG'),(7,'Xiamoi');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

CREATE TABLE `os`(
`id` smallint(6) NOT NULL AUTO_INCREMENT,
`nombre` varchar(100) NOT NULL,
`createdAt` datetime,
`updatedAt` datetime,
PRIMARY KEY (id))
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
LOCK TABLES `os` WRITE;
/*!40000 ALTER TABLE `os`  DISABLE KEYS */;
INSERT INTO `os` (id,nombre) VALUES (1,'Ios'),(2,'Android'),(3,'Windows Phone'),(4,'Tesla OS'),(5,'MIui');
/*!40000 ALTER TABLE `os` ENABLE KEYS */;
UNLOCK TABLES;

CREATE TABLE `users`(
`id` smallint(6) NOT NULL AUTO_INCREMENT,
`firstName` varchar(100) NOT NULL,
`lastName` varchar(100) NOT NULL,
`email` text(100) NOT NULL,
`contrasenia` varchar(250) NOT NULL,
`imagenPerfil` varchar(250),
`esAdmin` varchar(5),
`created_at` TIMESTAMP,
`updated_at` TEXT,
PRIMARY KEY (`id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users`  DISABLE KEYS */;
INSERT INTO `users` (id, firstName, lastName, email, contrasenia, imagenPerfil, esAdmin)
VALUES (default, 'Testeo2', 'Testado2', 'test_2@a.com', '24', 'Premium.jpg','5');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

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
 `created_at` TIMESTAMP,
`updated_at` TEXT,
 PRIMARY KEY (id),
CONSTRAINT `products_marca_id_foreign` FOREIGN KEY (`id_marca`) REFERENCES `marca` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `products_color_id_foreign` FOREIGN KEY (`id_color`) REFERENCES `color` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `products_os_id_foreign` FOREIGN KEY (`id_os`) REFERENCES `os` (`id`) ON DELETE CASCADE ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products`  DISABLE KEYS */;
insert into products (id, id_marca, nombreProducto, imgIndex, id_color, category, descripcion, precioVenta, oferta, descuento, estadoEquipo, resolucion, memoriaRam, memoriaInterna, dualSim, id_os, senal)
values (default,'1','Iphone 12 Pro','imagen 1','2','Premium','Su nueva pantalla retina es de 4 pulgadas y tiene la cámara iSight de 8 megapíxeles con flash TrueTone, grabación a cámara lenta (120 fps), modo ráfaga de 10 fotos por segundo y foto panorámica. También cuenta con un SoC A7 y con un coprocesador d...','1200','no','0.00','Excelente','0.99','8','512','no','1','5'),
(default,'1','Iphone 13 Pro MAX','imagen 1','1','Premium','Su nueva pantalla retina es de 4 pulgadas y tiene la cámara iSight de 8 megapíxeles con flash TrueTone, grabación a cámara lenta (120 fps), modo ráfaga de 10 fotos por segundo y foto panorámica. También cuenta con un SoC A7 y con un coprocesador d...','1200','si','0.00','Excelente','0.99','8','512','no','1','5'),
(default,'2','Iphne','productImage-1662296173390.JPG','4','','','3000','','0.00','Excelente','0.00','50','0','','1',''),
(default,'2','Samsung S22','productImage-1662296590843.PNG','3','','','4000','','0.00','Muy Bueno','0.00','44','0','','2',''),
(default,'1','Testla 5005','productImage-1662297055557.PNG','1','','','5555','','0.00','Excelente','0.00','11','0','','1',''),
(default,'1','Iphone 1','productImage-1662297292813.JPG','1','','','4000','','0.00','Excelente','0.00','4','0','','1',''),
(default,'1','Samsung s21+','productImage-1662297401462.png','1','','','2100','','0.00','Bueno','0.00','44','0','','1',''),
(default,'1','Samsung s22','productImage-1662297453917.jpeg','1','','','3000','','0.00','Excelente','0.00','15','0','','1',''),
(default,'1','Iphone xxx','productImage-1662297497243.png','1','','','30000','','0.00','Exclenet','0.00','4','0','','1',''),
(default,'1','11111','productImage-1662297534673.jpg','1','','','213213','','0.00','123123','0.00','4','0','','1',''),
(default,'1','4','productImage-1662297566182.png','1','','','4','','0.00','5','0.00','5','0','','1',''),
(default,'1','Moto Test','productImage-1662420145726.png','1','','','3333','','0.00','Bueno','0.00','4','0','','1',''),
(default,'1','1','productImage-1663807923483.jpg','1','','','1','','0.00','1','0.00','1','0','','1','');

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






