CREATE DATABASE IF NOT EXISTS Prueba;


CREATE TABLE `Prueba`.`Tareas`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `tareas` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);


INSERT INTO 'Prueba' . 'Tareas' VALUES (
    'ir a la escuela'
), ('haver la tarea')