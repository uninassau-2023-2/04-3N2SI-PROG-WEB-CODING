-- mysqldump --user=root -p --add-drop-database --complete-insert --dump-date --events --force --hex-blob --opt --add-drop-table --add-locks --create-options --disable-keys --extended-insert=1 --quick --set-charset --skip-lock-tables --order-by-primary --quote-names --single-transaction --tz-utc --verbose --result-file=dump.sql --databases pokemon_api

-- MySQL dump 10.17  Distrib 10.3.22-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: pokemon_api
-- ------------------------------------------------------
-- Server version	10.3.22-MariaDB-0+deb10u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `pokemon_api`
--

/*!40000 DROP DATABASE IF EXISTS `pokemon_api`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `pokemon_api` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `pokemon_api`;

--
-- Table structure for table `captured_pokemon`
--

DROP TABLE IF EXISTS `captured_pokemon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `captured_pokemon` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(455) NOT NULL,
  `base_experience` INT NOT NULL,
  `front_default_url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `captured_pokemon`
--
-- ORDER BY:  `id`

LOCK TABLES `captured_pokemon` WRITE;
/*!40000 ALTER TABLE `captured_pokemon` DISABLE KEYS */;
-- Adicione aqui os comandos INSERT conforme necessário
/*!40000 ALTER TABLE `captured_pokemon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'pokemon_api'
--

--
-- Dumping users and grants
--
CREATE USER IF NOT EXISTS kaian@'%' IDENTIFIED WITH mysql_native_password BY '123456789';
GRANT ALL PRIVILEGES ON pokemon_api.* TO kaian@'%';

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-29 17:14:50

