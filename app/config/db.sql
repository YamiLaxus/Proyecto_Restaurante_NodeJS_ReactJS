-- Crear tablas
CREATE TABLE roles(
	rol_id serial primary key,
	titulo varchar,
	descripcion varchar
)

CREATE TABLE usuarios (
	usuario_id serial primary key,
	nombre varchar(150) not null,
	apellido varchar(150) not null,
	nit varchar (25) unique,
	usuario varchar(20) unique not null,
	email varchar(50) unique not null,
	password varchar(50) not null,
	img_profile varchar(300),
	rol_id int not null, 
	constraint fk_rol foreign key (rol_id)
	references roles(rol_id)
)

CREATE TABLE prod_categorias(
	categoria_id SERIAL PRIMARY KEY,
	titulo VARCHAR(50),
	descripcion VARCHAR(100)
)

CREATE TABLE estados(
	estado_id SERIAL PRIMARY KEY,
	titulo VARCHAR(50),
	descripcion VARCHAR(100)
)

CREATE TABLE menus(
	menu_id SERIAL PRIMARY KEY,
	nombre VARCHAR(100),
	descripcion VARCHAR(100),
	precio VARCHAR(100),
	imagen VARCHAR(500),
	estado_id INT,
	categoria_id INT,
	CONSTRAINT FK_ESTADO FOREIGN KEY(estado_id)
	REFERENCES estados(estado_id),
	CONSTRAINT FK_CATEGORIA FOREIGN KEY(categoria_id)
	REFERENCES prod_categorias(categoria_id)
)

CREATE TABLE mesas(
	mesa_id SERIAL PRIMARY KEY,
	capacidad INT,
	notas VARCHAR(50)
)


CREATE TABLE ordenes(
	orden_id SERIAL PRIMARY KEY,
	usuario_id INT,
	menu_id INT,
	mesa_id INT DEFAULT 0,
	cantidad INT,
	total FLOAT,
	--fecha DATE DEFAULT CURRENT_DATE,
	nota VARCHAR(50),
	CONSTRAINT FK_USUARIO_2 FOREIGN KEY(usuario_id)
	REFERENCES usuarios(usuario_id),
	CONSTRAINT FK_MESA FOREIGN KEY(mesa_id)
	REFERENCES mesas(mesa_id),
	CONSTRAINT FK_MENU FOREIGN KEY(menu_id)
	REFERENCES menus(menu_id)
);

INSERT INTO roles(titulo, descripcion) VALUES('ADMIN', 'TOTAL ACCESS');
INSERT INTO roles(titulo, descripcion) VALUES('EMPLEADO', 'SALES ACCESS');
INSERT INTO roles(titulo, descripcion) VALUES('CLIENTE', 'CLIENT ACCESS');



INSERT INTO usuarios(nombre, apellido, nit, usuario, email, password, img_profile, rol_id) 
VALUES ('Os', 'Root', '12312', 'root', 'root@root.gt', 'clave01*', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg', 1)
	

select * from usuarios
select * from roles

SELECT u.usuario_id, u.nombre, u.apellido, u.nit, u.usuario, u.email, u.img_profile, r.rol_id as rol_id, r.titulo as rol FROM usuarios u INNER JOIN roles r ON r.rol_id = u.rol_id



--Query ordenes
SELECT o.fecha, o.orden_id as serial, o.cantidad, o.total, o.nota, u.usuario_id, u.nombre, m.menu_id, m.nombre, ms.mesa_id from ordenes o INNER JOIN usuarios u ON u.usuario_id = o.usuario_id INNER JOIN menus m ON m.menu_id = o.menu_id INNER JOIN mesas ms ON ms.mesa_id = o.mesa_id