/*
SQLyog Enterprise - MySQL GUI v7.02 
MySQL - 5.1.72-community : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `test`;

/*Table structure for table `excel` */

DROP TABLE IF EXISTS `excel`;

CREATE TABLE `excel` (
  `employee_id` int(11) NOT NULL,
  `contact_no` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `del_flag` char(1) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `excel` */

insert  into `excel`(`employee_id`,`contact_no`,`country`,`created_by`,`created_on`,`del_flag`,`email_id`,`first_name`,`gender`,`last_name`,`password`,`updated_by`,`updated_on`) values (5,'9922861410','Maharashtra',1,'2019-01-29 15:09:35','Y','it.maheshshelke@gmail.com','Mahesh','M','Shelke','Mahesh',1,'2019-01-29 15:26:13'),(6,'9922861410','Maharashtra',1,'2019-01-29 15:26:20','Y','it.maheshshelke@gmail.com','Mahesh','M','Shelke','Mahesh',1,'2019-01-29 15:27:31'),(7,'9011283843','Maharashtra',1,'2019-01-29 15:26:20','Y','sanjaymekhale@gmail.com','Sanjay','m','Mekhale','Sanjay',1,'2019-01-29 15:27:29'),(8,'9922861410','Maharashtra',1,'2019-01-29 15:27:35','Y','it.maheshshelke@gmail.com','Mahesh','M','Shelke','Mahesh',1,'2019-01-29 15:29:19'),(9,'9011283843','Maharashtra',1,'2019-01-29 15:27:35','Y','sanjaymekhale@gmail.com','Sanjay','m','Mekhale','Sanjay',1,'2019-01-29 15:29:20'),(10,'9922861410','Maharashtra',1,'2019-01-29 15:29:15','Y','it.maheshshelke@gmail.com','Mahesh','M','Shelke','Mahesh',1,'2019-01-29 15:29:21'),(11,'9011283843','Maharashtra',1,'2019-01-29 15:29:15','Y','sanjaymekhale@gmail.com','Sanjay','m','Mekhale','Sanjay',1,'2019-01-29 15:29:18'),(12,'9922861410','Maharashtra ',1,'2019-01-29 15:29:27','N','it.maheshshelke@gmail.com','Mahesh','M','Shelke','Mahesh',1,'2019-02-04 16:38:47'),(13,'9011283843','Maharashtra',1,'2019-01-29 15:29:27','Y','sanjaymekhale@gmail.com','Sanjay','m','Mekhale','Sanjay',1,'2019-01-29 15:32:10'),(14,'9922861410','Maharashtra',1,'2019-01-29 15:32:01','Y','it.maheshshelke@gmail.com','Mahesh','M','Shelke','Mahesh',1,'2019-01-29 15:32:09'),(15,'9011283843','Maharashtra',1,'2019-01-29 15:32:01','Y','sanjaymekhale@gmail.com','Sanjay','','Mekhale','Sanjay',1,'2019-01-29 15:32:08'),(16,'9922861410','Maharashtra',1,'2019-01-31 15:00:47','N','it.maheshshelke@gmail.com','Mahesh','M','Shelke','Mahesh',NULL,NULL),(17,'9011283843','Maharashtra',1,'2019-01-31 15:00:47','N','sanjaymekhale@gmail.com','Sanjay','m','Mekhale','Sanjay',NULL,NULL);

/*Table structure for table `hibernate_sequence` */

DROP TABLE IF EXISTS `hibernate_sequence`;

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `hibernate_sequence` */

insert  into `hibernate_sequence`(`next_val`) values (18);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
