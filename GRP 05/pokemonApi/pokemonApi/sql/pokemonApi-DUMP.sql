-- MySQL Script generated by MySQL Workbench
-- Thu Nov 30 19:35:37 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pokemon_api
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pokemon_api
-- -----------------------------------------------------


CREATE SCHEMA IF NOT EXISTS `pokemon_api` DEFAULT CHARACTER SET utf8 ;
USE `pokemon_api` ;

-- -----------------------------------------------------
-- Table `pokemon_api`.`pokemons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pokemon_api`.`pokemons` (
  `id` INT NULL AUTO_INCREMENT,
  `base_experience` INT NULL,
  `name` VARCHAR(255) NOT NULL,
  `front_default_url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;



CREATE USER IF NOT EXISTS pokeuser@'%' IDENTIFIED WITH mysql_native_password BY '12345';
GRANT ALL PRIVILEGES ON root.* TO aula@'%';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

select * from pokemons;