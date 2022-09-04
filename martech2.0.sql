CREATE TABLE color(
id smallint(6) NOT NULL PRIMARY KEY,
nombre varchar(100) NOT NULL);
​
INSERT INTO `color` VALUES (1,'gris'),(2,'negro'),(3,'blanco'),(4,'dorado'),(5,'azul'),(6,'rosa'),(7,'rojo'),(8,'plateado'),(9,'celeste'),(10,'violeta'),(11,'verde'),(12,'amarillo'),(13,'bordo'),(14,'azul tornasolado'),(15,'beige');

​
CREATE TABLE marca(
id smallint(6) NOT NULL,
nombre varchar(100) NOT NULL,
PRIMARY KEY (id))
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;
​
LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca`  DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Apple'),(2,'Samsung'),(3,'Motorola'),(4,'Huawei'),(5,'Tesla'),(6,'LG'),(7,'Xiamoi');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;
​
CREATE TABLE os(
id smallint(6) NOT NULL,
nombre varchar(100) NOT NULL,
PRIMARY KEY (id))
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;
​
LOCK TABLES `os` WRITE;
/*!40000 ALTER TABLE `os`  DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Ios'),(2,'Android'),(3,'Windows Phone'),(4,'Tesla OS'),(5,'MIui');
/*!40000 ALTER TABLE `os` ENABLE KEYS */;
UNLOCK TABLES;
CREATE TABLE users(
id smallint(6) NOT NULL,
fistName varchar(100) NOT NULL,
lastName varchar(100) NOT NULL,
email varchar(100) NOT NULL,
contrasenia text NOT NULL,
imagenPerfil varchar(250),
esAdmin varchar(5),
PRIMARY KEY (id))
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;
​
 CREATE TABLE products(
 id smallint(6) NOT NULL,
 marca varchar(100) NOT NULL,
 nombreProducto varchar(100) NOT NULL,
 imgIndex varchar(250) NOT NULL,
 color_id smallint (6) NOT NULL,
 categoy varchar (100),
 descripcion varchar(250) NOT NULL,
 condicion varchar(100) NOT NULL,
 precioVenta INT NOT NULL,
 oferta varchar (5) NOT NULL,
 descuento DECIMAL(2,2) NOT NULL,
 estadoEquipo varchar (100) NOT NULL,
 marca_id smallint(6) NOT NULL ,
 resolucion DECIMAL(2,2) NOT NULL,
 memoriaRam INT NOT NULL,
 memoriaInterna INT NOT NULL,
 dualSim varchar (5) NOT NULL,
 os_id smallint(6) NOT NULL,
 senal varchar (10) NOT NULL,
 PRIMARY KEY (`id`),
CONSTRAINT `products_color_id_foreign` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
CONSTRAINT `products_marca_id_foreign` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`id`),
CONSTRAINT `products_os_id_foreign` FOREIGN KEY (`os_id`) REFERENCES `os` (`id`))
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;
​
CREATE TABLE carrito (
id smallint(6),
users_id smallint(6) NOT NULL,
product_id smallint(6) NOT NULL,
products_nombreProducto varchar(100) NOT NULL,
products_marca smallint (6) NOT NULL,
products_condicion varchar(100) NOT NULL,
products_precioVenta  INT NOT NULL,
products_imgIndex varchar(250) NOT NULL,
estadoCarrito varchar(100) NOT NULL,
PRIMARY KEY (id),
CONSTRAINT `carrito_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
CONSTRAINT `carrito_product_id_foreign` FOREIGN KEY (`products_id`) REFERENCES `product` (`id`),
CONSTRAINT `carrito_nombreProducto_id_foreign` FOREIGN KEY (`products_nombreProducto`) REFERENCES `products` (`nombreProducto`),
CONSTRAINT `carrito_marca_id_foreign` FOREIGN KEY (`products_marca`) REFERENCES `products` (`marca`),
CONSTRAINT `carrito_condicion_foreign` FOREIGN KEY (`products_condicion`) REFERENCES `products` (`condicion`),
CONSTRAINT `carrito_precioVenta_foreign` FOREIGN KEY (`products_precioVenta`) REFERENCES `products` (`precioVenta`),
CONSTRAINT `carrito_imgIndex_foreign` FOREIGN KEY (`products_imgIndex`) REFERENCES `products` (`imgIndex`))
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;
​
​
CREATE TABLE color(
id smallint(6) NOT NULL PRIMARY KEY,
nombre varchar(100) NOT NULL)
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;
​
CREATE TABLE marca(
id smallint(6) NOT NULL,
nombre varchar(100) NOT NULL,
PRIMARY KEY (id))

ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;
​
CREATE TABLE os(
id smallint(6) NOT NULL,
nombre varchar(100) NOT NULL,
PRIMARY KEY (id))
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;
​
CREATE TABLE users(
id smallint(6) NOT NULL,
fistName varchar(100) NOT NULL,
lastName varchar(100) NOT NULL,
email varchar(100) NOT NULL,
contrasenia text NOT NULL,
imagenPerfil varchar(250),
esAdmin varchar(5),
PRIMARY KEY (id))
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;
​
 CREATE TABLE products(
 id smallint(6) NOT NULL,
 marca varchar(100) NOT NULL,
 nombreProducto varchar(100) NOT NULL,
 imgIndex varchar(250) NOT NULL,
 color_id smallint (6) NOT NULL,
 categoy varchar (100),
 descripcion varchar(250) NOT NULL,
 condicion varchar(100) NOT NULL,
 precioVenta INT NOT NULL,
 oferta varchar (5) NOT NULL,
 descuento DECIMAL(2,2) NOT NULL,
 estadoEquipo varchar (100) NOT NULL,
 marca_id smallint(6) NOT NULL ,
 resolucion DECIMAL(2,2) NOT NULL,
 memoriaRam INT NOT NULL,
 memoriaInterna INT NOT NULL,
 dualSim varchar (5) NOT NULL,
 os_id smallint(6) NOT NULL,
 senal varchar (10) NOT NULL,
 PRIMARY KEY (`id`),
CONSTRAINT `products_color_id_foreign` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
CONSTRAINT `products_marca_id_foreign` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`id`),marca
CONSTRAINT `products_os_id_foreign` FOREIGN KEY (`os_id`) REFERENCES `os` (`id`))
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;
​
 
​
CREATE TABLE carrito (
id smallint(6),
users_id smallint(6) NOT NULL,
nombreProducto_id varchar(100) NOT NULL,
marca_id smallint (6) NOT NULL,
condicion_id varchar(100) NOT NULL,
precioVenta_id  INT NOT NULL,
PRIMARY KEY (id),
CONSTRAINT `carrito_users_id_foreign` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
CONSTRAINT `carrito_nombreProducto_id_foreign` FOREIGN KEY (`nombreProducto_id`) REFERENCES `products` (`nombreProducto`))
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;
​