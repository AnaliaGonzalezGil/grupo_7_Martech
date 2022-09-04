CREATE TABLE color(
id smallint(6) NOT NULL PRIMARY KEY,
nombre varchar(100) NOT NULL)
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;

CREATE TABLE marca(
id smallint(6) NOT NULL,
nombre varchar(100) NOT NULL,
PRIMARY KEY (id))
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;

CREATE TABLE os(
id smallint(6) NOT NULL,
nombre varchar(100) NOT NULL,
PRIMARY KEY (id))
ENGINE= InnoDB
DEFAULT CHARACTER SET= utf8
COLLATE=utf8_bin;

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

