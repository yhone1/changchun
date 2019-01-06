/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.53 : Database - cq
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cq` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `cq`;

/*Table structure for table `account` */

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `account_id` int(11) NULL AUTO_INCREMENT,
  `tel` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `account` */

insert  into `account`(`account_id`,`tel`,`password`) values (1,'18190907508','907508');

/*Table structure for table `active_consume` */

DROP TABLE IF EXISTS `active_consume`;

CREATE TABLE `active_consume` (
  `active_consume_id` int(11) NULL AUTO_INCREMENT,
  `active_consume_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`active_consume_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `active_consume` */

insert  into `active_consume`(`active_consume_id`,`active_consume_name`) values (1,'自助式早餐'),(2,'自助式午餐'),(3,'主厨特制西式晚餐'),(4,'山地骑行'),(5,'每日晨间热瑜伽'),(6,'口红或蜡烛手工作坊'),(7,'行政主厨制定排毒料理套餐'),(8,'专业排毒理疗'),(9,'裸心味自助式早餐两次与助式午餐一次'),(10,'三天两晚裸心私家骑马认证训练课程'),(11,'每日每房间最多2份早餐');

/*Table structure for table `album` */

DROP TABLE IF EXISTS `album`;

CREATE TABLE `album` (
  `album_id` int(11)  NULL AUTO_INCREMENT,
  `room_type_id` int(11) DEFAULT NULL,
  `path` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`album_id`),
  KEY `FK_Reference_11` (`room_type_id`),
  CONSTRAINT `FK_Reference_11` FOREIGN KEY (`room_type_id`) REFERENCES `room_type` (`room_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `album` */

/*Table structure for table `hotel` */

DROP TABLE IF EXISTS `hotel`;

CREATE TABLE `hotel` (
  `hotel_id` int(11) NULL AUTO_INCREMENT,
  `hotelname` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`hotel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `hotel` */

insert  into `hotel`(`hotel_id`,`hotelname`) values (1,'常青谷'),(2,'常青堡');

/*Table structure for table `payorder` */

DROP TABLE IF EXISTS `payorder`;

CREATE TABLE `payorder` (
  `order_id` int(11) NULL AUTO_INCREMENT,
  `order_hao` varchar(20) DEFAULT NULL,
  `order_state` int(11) DEFAULT NULL,
  `order_time` datetime DEFAULT NULL,
  `in_date` date DEFAULT NULL,
  `out_date` date DEFAULT NULL,
  `room_number` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  `room_consume_type_id` int(11) DEFAULT NULL,
  `roo_room_consume_type_id` int(11) DEFAULT NULL,
  `guestname` varchar(20) DEFAULT NULL,
  `guest_tel` varchar(20) DEFAULT NULL,
  `guest_email` varchar(20) DEFAULT NULL,
  `adultNum` int(11) DEFAULT NULL,
  `childNum` int(11) DEFAULT NULL,
  `others` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `roo_room_consume_type_id` (`roo_room_consume_type_id`),
  KEY `user_id` (`user_id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `payorder_ibfk_3` FOREIGN KEY (`room_id`) REFERENCES `roomhao` (`room_id`),
  CONSTRAINT `payorder_ibfk_1` FOREIGN KEY (`roo_room_consume_type_id`) REFERENCES `room_consume_type_price` (`room_consume_type_id`),
  CONSTRAINT `payorder_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `payorder` */

/*Table structure for table `room_active_consume` */

DROP TABLE IF EXISTS `room_active_consume`;

CREATE TABLE `room_active_consume` (
  `room_active_id` int(11) NULL AUTO_INCREMENT,
  `room_consume_id` int(11) DEFAULT NULL,
  `active_consume_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`room_active_id`),
  KEY `active_consume_id` (`active_consume_id`),
  KEY `room_consume_id` (`room_consume_id`),
  CONSTRAINT `room_active_consume_ibfk_2` FOREIGN KEY (`room_consume_id`) REFERENCES `room_consume` (`room_consume_id`),
  CONSTRAINT `room_active_consume_ibfk_1` FOREIGN KEY (`active_consume_id`) REFERENCES `active_consume` (`active_consume_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `room_active_consume` */

insert  into `room_active_consume`(`room_active_id`,`room_consume_id`,`active_consume_id`) values (1,1,11),(2,2,11),(3,3,1),(4,3,2),(5,3,3),(6,3,4),(7,4,5),(8,4,6),(9,4,7),(10,4,8),(11,5,9),(12,5,10),(13,7,11);

/*Table structure for table `room_consume` */

DROP TABLE IF EXISTS `room_consume`;

CREATE TABLE `room_consume` (
  `room_consume_id` int(11) NULL AUTO_INCREMENT,
  `room_consume_name` varchar(20) DEFAULT NULL,
  `hotel_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`room_consume_id`),
  KEY `hotel_id` (`hotel_id`),
  CONSTRAINT `room_consume_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`hotel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `room_consume` */

insert  into `room_consume`(`room_consume_id`,`room_consume_name`,`hotel_id`) values (1,'早鸟预订价',1),(2,'标准门市价',1),(3,'山地骑行套餐',1),(4,'假期秘密计划-清体套餐（双人）',1),(5,'裸心骑士俱乐部套餐',1),(6,'裸心山林洗肺套餐',1),(7,'标准门市价2',2);

/*Table structure for table `room_consume_type_price` */

DROP TABLE IF EXISTS `room_consume_type_price`;

CREATE TABLE `room_consume_type_price` (
  `room_consume_type_id` int(11) NULL AUTO_INCREMENT,
  `room_type_id` int(11) DEFAULT NULL,
  `room_consume_id` int(11) DEFAULT NULL,
  `consume_price` int(11) DEFAULT NULL,
  PRIMARY KEY (`room_consume_type_id`),
  KEY `room_type_id` (`room_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `room_consume_type_price` */

insert  into `room_consume_type_price`(`room_consume_type_id`,`room_type_id`,`room_consume_id`,`consume_price`) values (1,1,1,1980),(2,1,2,2200),(3,1,3,3600),(4,1,4,4088),(5,1,5,4800),(6,1,6,5500),(7,2,1,1980),(8,2,2,2200),(9,2,3,3600),(10,2,4,4088),(11,2,5,4800),(12,2,6,5500),(13,3,1,2340),(14,3,2,2600),(15,3,3,3900),(16,3,4,4488),(17,3,5,5200),(18,3,6,5900),(19,4,1,5400),(20,4,2,6000),(21,4,3,8600),(22,4,4,9776),(23,4,5,10800),(24,5,1,8100),(25,5,2,9000),(26,5,3,12000),(27,5,4,14664),(28,5,5,16800),(29,6,1,10800),(30,6,2,12000),(31,6,3,17200),(32,6,4,19552),(33,6,5,22400),(34,7,7,1600),(35,8,7,3400),(36,9,7,3800),(37,10,7,3800),(38,11,7,3800),(39,12,7,3800),(40,13,7,3800),(41,14,7,6400),(42,15,7,9600),(43,16,7,12800),(44,17,7,16000);

/*Table structure for table `room_type` */

DROP TABLE IF EXISTS `room_type`;

CREATE TABLE `room_type` (
  `room_type_id` int(11) NULL AUTO_INCREMENT,
  `room_type_name` varchar(20) DEFAULT NULL,
  `hotel_id` int(11) DEFAULT NULL,
  `guestNum` int(11) DEFAULT NULL,
  `mainPicPath` varchar(20) DEFAULT NULL,
  `roomNum` int(11) DEFAULT NULL,
  `roomPrice` float DEFAULT NULL,
  PRIMARY KEY (`room_type_id`),
  KEY `hotel_id` (`hotel_id`),
  CONSTRAINT `room_type_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`hotel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `room_type` */

insert  into `room_type`(`room_type_id`,`room_type_name`,`hotel_id`,`guestNum`,`mainPicPath`,`roomNum`,`roomPrice`) values (1,'夯土小屋',1,2,NULL,10,1980),(2,'夯土小屋双床',1,2,NULL,5,1980),(3,'山顶夯土小屋',1,2,NULL,5,2340),(4,'两房树顶别墅',1,4,NULL,5,5400),(5,'三房树顶别墅',1,6,NULL,5,8100),(6,'四房树顶别墅',1,8,NULL,5,10800),(7,'厢房',2,2,NULL,5,1600),(8,' 崖景套房',2,2,NULL,5,3400),(9,'两房奢华小院',2,4,NULL,5,3800),(10,'三房奢华小院',2,6,NULL,5,3800),(11,'四房奢华小院',2,8,NULL,5,3800),(12,'五房奢华小院',2,10,NULL,5,3800),(13,'地穴',2,2,NULL,5,3800),(14,'隐室',2,2,NULL,5,6400),(15,'花旦',2,2,NULL,5,9600),(16,'帮主',2,2,NULL,5,12800),(17,'王室',2,2,NULL,5,16000);

/*Table structure for table `roomhao` */

DROP TABLE IF EXISTS `roomhao`;

CREATE TABLE `roomhao` (
  `room_id` int(11) NULL AUTO_INCREMENT,
  `door_hao` varchar(20) DEFAULT NULL,
  `room_type_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`room_id`),
  KEY `room_type_id` (`room_type_id`),
  CONSTRAINT `roomhao_ibfk_1` FOREIGN KEY (`room_type_id`) REFERENCES `room_type` (`room_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `roomhao` */

insert  into `roomhao`(`room_id`,`door_hao`,`room_type_id`) values (1,'gu_1001',1),(2,'gu_1002',1),(3,'gu_1003',1),(4,'gu_1004',1),(5,'gu_1005',1),(6,'gu_1006',1),(7,'gu_1007',1),(8,'gu_1008',1),(9,'gu_1009',1),(10,'gu_1010',1),(11,'gu_2001',2),(12,'gu_2002',2),(13,'gu_2003',2),(14,'gu_2004',2),(15,'gu_2005',2),(16,'gu_2006',3),(17,'gu_2007',3),(18,'gu_2008',3),(19,'gu_2009',3),(20,'gu_2010',3),(21,'gu_3001',4),(22,'gu_3002',4),(23,'gu_3003',4),(24,'gu_3004',4),(25,'gu_3005',4),(26,'gu_3006',5),(27,'gu_3007',5),(28,'gu_3008',5),(29,'gu_3009',5),(30,'gu_3010',5),(31,'gu_3011',6),(32,'gu_3012',6),(33,'gu_3013',6),(34,'gu_3014',6),(35,'gu_3015',6),(36,'bao_1001',13),(37,'bao_1002',13),(38,'bao_1003',13),(39,'bao_1004',13),(40,'bao_1005',13),(41,'bao_1006',14),(42,'bao_1007',14),(43,'bao_1008',14),(44,'bao_1009',14),(45,'bao_1010',14),(46,'bao_1011',15),(47,'bao_1012',15),(48,'bao_1013',15),(49,'bao_1014',15),(50,'bao_1015',15),(51,'bao_1016',16),(52,'bao_1017',16),(53,'bao_1018',16),(54,'bao_1019',16),(55,'bao_1020',16),(56,'bao_1021',17),(57,'bao_1022',17),(58,'bao_1023',17),(59,'bao_1024',17),(60,'bao_1025',17),(61,'bao_2001',7),(62,'bao_2002',7),(63,'bao_2003',7),(64,'bao_2004',7),(65,'bao_2005',7),(66,'bao_2006',8),(67,'bao_2007',8),(68,'bao_2008',8),(69,'bao_2009',8),(70,'bao_2010',8),(71,'bao_3001',9),(72,'bao_3002',9),(73,'bao_3003',9),(74,'bao_3004',9),(75,'bao_3005',9),(76,'bao_3006',10),(77,'bao_3007',10),(78,'bao_3008',10),(79,'bao_3009',10),(80,'bao_3010',10),(81,'bao_3011',11),(82,'bao_3012',11),(83,'bao_3013',11),(84,'bao_3014',11),(85,'bao_3015',11),(86,'bao_3016',12),(87,'bao_3017',12),(88,'bao_3018',12),(89,'bao_3019',12),(90,'bao_3020',12);

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(11) NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `sex` varchar(20) DEFAULT NULL,
  `account_id` int(11) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `face` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`user_id`,`username`,`sex`,`account_id`,`email`,`face`) values (1,'晃过天空','男',1,'657115811@qq.com','./Dlib/face/user_default.jpg');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
