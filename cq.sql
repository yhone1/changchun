-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: cq
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `account` (
  `account_id` int(11) NOT NULL AUTO_INCREMENT,
  `tel` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'18190907508','907508'),(2,'18981209011','123456');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `active_consume`
--

DROP TABLE IF EXISTS `active_consume`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `active_consume` (
  `active_consume_id` int(11) NOT NULL AUTO_INCREMENT,
  `active_consume_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`active_consume_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `active_consume`
--

LOCK TABLES `active_consume` WRITE;
/*!40000 ALTER TABLE `active_consume` DISABLE KEYS */;
INSERT INTO `active_consume` VALUES (1,'自助式早餐'),(2,'自助式午餐'),(3,'主厨特制西式晚餐'),(4,'山地骑行'),(5,'每日晨间热瑜伽'),(6,'口红或蜡烛手工作坊'),(7,'行政主厨制定排毒料理套餐'),(8,'专业排毒理疗'),(9,'裸心味自助式早餐两次与助式午餐一次'),(10,'三天两晚裸心私家骑马认证训练课程'),(11,'每日每房间最多2份早餐'),(12,'住宿与特色服务'),(13,'精彩活动'),(14,'餐饮'),(15,'裸叶水疗'),(16,'房内甜蜜早餐或裸心味自助早餐'),(17,'莫干山林漫步与浪漫姻缘树仪式'),(18,'梦幻城堡下午茶'),(19,'星空烛光晚餐'),(20,'裸叶双人按摩'),(21,'裸心味自助午餐'),(22,'两次裸心味自助式早餐与午餐'),(23,'三天两晚莫干山私家徒步路线与行程(含向导'),(24,'裸叶专业疗法'),(25,'放松时刻'),(26,'静心洗肺'),(27,'健康特制餐饮'),(28,'景点探索'),(29,'趣味活动'),(30,'住宿'),(31,'乘风玩乐'),(32,'特色活动'),(33,'秋日美食'),(34,'悠然放松'),(35,'特享'),(36,NULL);
/*!40000 ALTER TABLE `active_consume` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `album` (
  `album_id` int(11) NOT NULL AUTO_INCREMENT,
  `room_type_id` int(11) DEFAULT NULL,
  `path` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`album_id`),
  KEY `FK_Reference_11` (`room_type_id`),
  CONSTRAINT `FK_Reference_11` FOREIGN KEY (`room_type_id`) REFERENCES `room_type` (`room_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `device` (
  `device_id` int(11) NOT NULL AUTO_INCREMENT,
  `device_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`device_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device`
--

LOCK TABLES `device` WRITE;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
INSERT INTO `device` VALUES (1,'山林或泳池美景'),(2,'特大号睡床'),(3,'亚洲/非洲风格'),(4,'观景阳台'),(5,'多人入住首选'),(6,'户外理疗浴缸'),(7,'户外烧烤设备'),(8,'设备完善的厨房'),(9,'壮阔的景观'),(10,'户外淋浴设备'),(11,'独立浴缸'),(12,'高速无线上网'),(13,'中央空调系统 '),(14,'宽敞客厅'),(15,'淋浴设备'),(16,'森林/山景'),(17,'迷你吧'),(18,'山顶风光'),(19,'宽敞的高级浴缸'),(20,'具有设计感的客厅'),(21,'沙发床'),(22,'入住城堡'),(23,'主题套房'),(24,'高级浴缸'),(25,'城堡早餐'),(26,'私人管家'),(27,'烧烤设备'),(28,'设备齐全的厨房'),(29,'私人庭院'),(30,'宽敞沙发床'),(31,'296平米'),(32,'大床/双床'),(33,'加床铺'),(34,'落地窗'),(35,'1F/2F'),(36,'客房内入住登记与退房'),(37,'全景阳台');
/*!40000 ALTER TABLE `device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hotel` (
  `hotel_id` int(11) NOT NULL AUTO_INCREMENT,
  `hotelname` varchar(20) DEFAULT NULL,
  `booking_banner_path` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`hotel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'常青谷','./Dlib/gu/ban-stable'),(2,'常青堡','./Dlib/bao/ban-castl');
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payorder`
--

DROP TABLE IF EXISTS `payorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `payorder` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_hao` varchar(20) DEFAULT NULL,
  `order_state` int(11) DEFAULT NULL,
  `order_time` datetime DEFAULT NULL,
  `in_date` date DEFAULT NULL,
  `out_date` date DEFAULT NULL,
  `room_number` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `room_type_id` int(11) DEFAULT NULL,
  `room_consume_id` int(11) DEFAULT NULL,
  `guest_name` varchar(20) DEFAULT NULL,
  `guest_tel` varchar(20) DEFAULT NULL,
  `guest_email` varchar(20) DEFAULT NULL,
  `adultNum` int(11) DEFAULT NULL,
  `childNum` int(11) DEFAULT NULL,
  `others` varchar(50) DEFAULT NULL,
  `pay` tinyint(2) DEFAULT NULL,
  `tax` float(7,2) DEFAULT NULL,
  `server_money` float(7,2) DEFAULT NULL,
  `all_money` float(7,2) DEFAULT NULL,
  `contact_name` varchar(10) DEFAULT NULL,
  `contact_phone` varchar(10) DEFAULT NULL,
  `subscription` int(11) DEFAULT NULL,
  `sex` varchar(2) DEFAULT '男',
  `specials` varchar(18) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `roo_room_consume_type_id` (`room_consume_id`),
  KEY `user_id` (`user_id`),
  KEY `room_id` (`room_type_id`),
  CONSTRAINT `payorder_ibfk_1` FOREIGN KEY (`room_consume_id`) REFERENCES `room_consume_type_price` (`room_consume_type_id`),
  CONSTRAINT `payorder_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `payorder_ibfk_3` FOREIGN KEY (`room_type_id`) REFERENCES `roomhao` (`room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payorder`
--

LOCK TABLES `payorder` WRITE;
/*!40000 ALTER TABLE `payorder` DISABLE KEYS */;
INSERT INTO `payorder` VALUES (1,'201811290001',1,'2018-11-29 00:00:00','2018-11-30','2018-12-03',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'男',NULL),(2,'201811290002',1,'2018-11-29 16:24:00','2018-11-20','2018-01-01',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'男',NULL),(3,'201811300001',1,'2018-11-30 11:31:34','2018-11-30','2018-12-01',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,0,NULL,1,130.68,198.00,2308.68,'','',1000,'男',''),(4,'201811300002',1,'2018-11-30 11:33:34','2018-11-30','2018-12-01',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,0,NULL,1,130.68,198.00,2308.68,'','',1000,'男',''),(5,'201811300003',1,'2018-11-30 11:35:35','2018-11-30','2018-12-01',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,0,NULL,1,130.68,198.00,2308.68,'','',1000,'男',''),(6,'201811300004',1,'2018-11-30 11:37:35','2018-11-30','2018-12-01',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,0,NULL,1,130.68,198.00,2308.68,'','',1000,'男',''),(7,'201811300005',1,'2018-11-30 11:39:40','2018-11-30','2018-12-01',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,0,NULL,1,130.68,198.00,2308.68,'','',1000,'男',''),(8,'201811300006',1,'2018-11-30 11:42:10','2018-11-30','2018-12-01',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,0,NULL,1,130.68,198.00,2308.68,'','',1000,'男',''),(9,'201811300007',1,'2018-11-30 11:44:10','2018-11-30','2018-12-01',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,0,NULL,1,130.68,198.00,2308.68,'','',1000,'男',''),(10,'201811300008',1,'2018-11-30 11:47:10','2018-11-30','2018-12-01',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,0,NULL,1,130.68,198.00,2308.68,'','',1000,'男',''),(11,'201811300009',1,'2018-11-30 11:49:10','2018-11-30','2018-12-01',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,0,NULL,1,130.68,198.00,2308.68,'','',1000,'男',''),(12,'201811300010',1,'2018-11-30 14:38:30','2018-11-30','2018-12-02',1,2,1,1,'张少宇','18981209011','1757478118@qq.com',1,0,NULL,1,261.36,396.00,4617.36,'','',1000,'男','');
/*!40000 ALTER TABLE `payorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_active_consume`
--

DROP TABLE IF EXISTS `room_active_consume`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `room_active_consume` (
  `room_active_id` int(11) NOT NULL AUTO_INCREMENT,
  `room_consume_id` int(11) DEFAULT NULL,
  `active_consume_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`room_active_id`),
  KEY `active_consume_id` (`active_consume_id`),
  KEY `room_consume_id` (`room_consume_id`),
  CONSTRAINT `room_active_consume_ibfk_1` FOREIGN KEY (`active_consume_id`) REFERENCES `active_consume` (`active_consume_id`),
  CONSTRAINT `room_active_consume_ibfk_2` FOREIGN KEY (`room_consume_id`) REFERENCES `room_consume` (`room_consume_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_active_consume`
--

LOCK TABLES `room_active_consume` WRITE;
/*!40000 ALTER TABLE `room_active_consume` DISABLE KEYS */;
INSERT INTO `room_active_consume` VALUES (1,1,11),(2,2,11),(3,3,1),(4,3,2),(5,3,3),(6,3,4),(7,4,5),(8,4,6),(9,4,7),(10,4,8),(11,5,9),(12,5,10),(13,7,11),(14,8,30),(15,8,31),(16,8,32),(17,8,33),(18,8,34),(19,8,36),(20,9,24),(21,9,25),(22,9,26),(23,9,27),(24,9,28),(25,9,29),(26,10,11),(27,10,35),(28,11,12),(29,11,13),(30,11,14),(31,11,15),(32,12,16),(33,12,17),(34,12,18),(35,12,19),(36,12,20),(37,13,22),(38,13,23),(39,14,1),(40,14,2),(41,14,3),(42,14,4),(43,15,24),(44,15,25),(45,15,26),(46,15,27),(47,15,28),(48,15,29);
/*!40000 ALTER TABLE `room_active_consume` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_consume`
--

DROP TABLE IF EXISTS `room_consume`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `room_consume` (
  `room_consume_id` int(11) NOT NULL AUTO_INCREMENT,
  `room_consume_name` varchar(20) DEFAULT NULL,
  `hotel_id` int(11) DEFAULT NULL,
  `more` text,
  PRIMARY KEY (`room_consume_id`),
  KEY `hotel_id` (`hotel_id`),
  CONSTRAINT `room_consume_ibfk_3` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`hotel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_consume`
--

LOCK TABLES `room_consume` WRITE;
/*!40000 ALTER TABLE `room_consume` DISABLE KEYS */;
INSERT INTO `room_consume` VALUES (1,'早鸟预订价',1,'提前最少14天预订即可享受标准门市价的九折优惠， 每间房间包含双人自助早餐。 预订时须全额支付房费，预订成功不可修改、取消或退款。 全额付款后如客人取消预订，缩短入住时间或到期未入住，仍需支付全额住宿费用。 周六及中国法定节假日期间需两晚起订。'),(2,'标准门市价',1,'标准门市价提供给您基于每日的最适用房价选择，是最便利灵活的价格。'),(3,'山地骑行套餐',1,'约上三五好友，用骑行的方式去探索莫干山林！'),(4,'假期秘密计划-清体套餐（双人）',1,'度个小假期，帮身心做个深层大扫除'),(5,'裸心骑士俱乐部套餐',1,'在裸心谷专业马术师的教导下你将拿到正式骑士证书！各个年龄层的大人小孩皆可来上骑士课程，体验马背驰骋的自由快意，享受一下放松时间，一家人更可以悠闲沉浸在山林中享受回归自然的假期。'),(6,'裸心山林洗肺套餐',1,NULL),(7,'标准门市价(堡)',2,'标准门市价提供给您基于每日的最适用房价选择，是最便利灵活的价格。'),(8,'\"趣\"野秋谷套餐',1,'采摘一筐磊磊硕果，在林间手作工坊中撸起袖子，亲手制作一罐时令果酱，用舌尖锁住这份野意；亦或是去亲尝主厨特制的当季鲜蔬，感受土地的奇妙回馈！落叶铺就渐变色的地毯，徒步路上，脚底偶尔还会踩到可爱的松果！ 起个大早，做一次晨间瑜伽，让清新的空气唤醒你的感官，重获由内而外的焕然生机！'),(9,'裸心山林洗肺套餐(双人)',1,'裸心首创的山林洗肺套餐提供专业健康谘询了解您的生活常态，并透过理疗方式帮助身体加速排毒、放松紧绷的心情，进一步改善日积月累的不良习惯，如抽烟等。'),(10,'标准门市价(含水疗)',2,'标准门市价提供给您基于每日的最适用房价选择，是最便利灵活的价格。（每间房每天包含一小时水疗）'),(11,'探\"觅\"山丘套餐',2,'大地之色笼罩了山巅的城堡，微风翻开了新一季的生命乐章。漫步秋的花园，去发现大自然的馈赠, 在浪漫的城堡里品尝小森林里的自然之味！就地取材，用身边的竹材编织一件艺术品，让竹叶的纹理激发你的灵感，带回家的手作则成为永恒的生命记忆。繁星点点的夜晚，去裸叶水疗体验融入自然灵感的专业疗法，抚平秋燥，舒缓身心！'),(12,'裸心相映套餐',2,'在童话般的浪漫场景中，享受心心相印的甜蜜时光！'),(13,'裸心山林探索套餐',2,'和所有爱好徒步者一起组队，踏上探索世界知名莫干山徒步旅程！我们专业的向导将带领你了解更多莫干山生态、历史和特别之处。'),(14,'山地骑行套餐(堡)',2,'约上三五好友，用骑行的方式去探索莫干山林'),(15,'裸心山林洗肺套餐(堡)(双人)',2,'裸心首创的山林洗肺套餐提供专业健康谘询了解您的生活常态，并透过理疗方式帮助身体加速排毒、放松紧绷的心情，进一步改善日积月累的不良习惯，如抽烟等。'),(16,'早鸟预订价(堡)',2,NULL);
/*!40000 ALTER TABLE `room_consume` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_consume_type_price`
--

DROP TABLE IF EXISTS `room_consume_type_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `room_consume_type_price` (
  `room_consume_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `room_type_id` int(11) DEFAULT NULL,
  `room_consume_id` int(11) DEFAULT NULL,
  `consume_price` int(11) DEFAULT NULL,
  PRIMARY KEY (`room_consume_type_id`),
  KEY `room_type_id` (`room_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_consume_type_price`
--

LOCK TABLES `room_consume_type_price` WRITE;
/*!40000 ALTER TABLE `room_consume_type_price` DISABLE KEYS */;
INSERT INTO `room_consume_type_price` VALUES (1,1,1,1980),(2,1,2,2200),(3,1,3,3600),(4,1,4,4088),(5,1,5,4800),(6,1,6,5500),(7,2,1,1980),(8,2,2,2200),(9,2,3,3600),(10,2,4,4088),(11,2,5,4800),(12,2,6,5500),(13,3,1,2340),(14,3,2,2600),(15,3,3,3900),(16,3,4,4488),(17,3,5,5200),(18,3,6,5900),(19,4,1,5400),(20,4,2,6000),(21,4,3,8600),(22,4,4,9776),(23,4,5,10800),(24,5,1,8100),(25,5,2,9000),(26,5,3,12000),(27,5,4,14664),(28,5,5,16800),(29,6,1,10800),(30,6,2,12000),(31,6,3,17200),(32,6,4,19552),(33,6,5,22400),(34,7,7,1600),(35,7,11,2000),(36,7,12,2388),(37,7,13,3200),(38,7,14,3200),(39,7,15,5150),(40,7,16,1980),(41,8,16,3600),(42,8,7,4000),(43,8,10,4200),(44,8,12,4650),(45,8,13,4700),(46,8,14,4800),(47,8,15,6600),(48,9,16,7920),(49,9,7,8800),(50,9,13,10000),(51,9,14,10200),(52,10,16,10260),(53,10,7,11400),(54,10,14,13500),(55,10,13,13800),(56,11,16,13680),(57,11,7,15200),(58,11,14,18000),(59,11,13,18400),(60,12,16,17100),(61,12,7,19000),(62,12,14,22500),(63,12,13,23000),(64,13,16,3780),(65,13,7,4200),(66,13,10,4600),(67,13,12,5050),(68,13,14,5100),(69,13,13,5200),(70,14,16,3780),(71,14,7,4200),(72,14,10,4600),(73,14,12,5050),(74,14,14,5100),(75,14,13,5200),(76,15,16,3780),(77,15,7,4200),(78,15,10,4600),(79,15,12,5050),(80,15,14,5100),(81,15,13,5200),(82,16,16,3780),(83,16,7,4200),(84,16,10,4600),(85,16,12,5050),(86,16,14,5100),(87,16,13,5200),(88,17,16,3780),(89,17,7,4200),(90,17,10,4600),(91,17,12,5050),(92,17,14,5100),(93,17,13,5200);
/*!40000 ALTER TABLE `room_consume_type_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_type`
--

DROP TABLE IF EXISTS `room_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `room_type` (
  `room_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `room_type_name` varchar(20) DEFAULT NULL,
  `hotel_id` int(11) DEFAULT NULL,
  `guestNum` int(11) DEFAULT NULL,
  `mainPicPath` varchar(20) DEFAULT NULL,
  `roomNum` int(11) DEFAULT NULL,
  `roomPrice` float DEFAULT NULL,
  `room_type_more` text,
  PRIMARY KEY (`room_type_id`),
  KEY `hotel_id` (`hotel_id`),
  CONSTRAINT `room_type_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`hotel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_type`
--

LOCK TABLES `room_type` WRITE;
/*!40000 ALTER TABLE `room_type` DISABLE KEYS */;
INSERT INTO `room_type` VALUES (1,'夯土小屋',1,2,'./Dlib/gu/29_180046_',10,1980,'夯土小屋采用当地可持续性传统建筑工法，特殊土质制成的墙面，冬暖夏凉，带给人自然质朴的感受。隐匿在松林间，或凌驾于湖边、池边的夯土小屋，入住其中就像是沉浸在森林里般幽静浪漫。'),(2,'夯土小屋双床',1,2,'./Dlib/gu/27_140236_',5,1980,'夯土小屋采用当地可持续性传统建筑工法，特殊土质制成的墙面，冬暖夏凉，带给人自然质朴的感受。隐匿在松林间，或凌驾于湖边、池边的夯土小屋，入住其中就像是沉浸在森林里般幽静浪漫。'),(3,'山顶夯土小屋',1,2,'./Dlib/gu/30_114149_',5,2340,'栖息于山顶的夯土小屋，仿佛置身于林中仙境。邻近的茶园景色和远处的竹林相伴，坐在户外露台，眺望莫干山优美的景致，享受难得的宁静。'),(4,'两房树顶别墅',1,4,'./Dlib/gu/30_142335_',5,5400,'树顶别墅是裸心谷最具标志性的房型，每栋拥有2个房间，内部整体风格优雅却不失粗矿非洲风，外部面向一望无际的莫干山绵延山景，你可以在露台上尽情享受烧烤或在户外浴缸中泡个澡，度过一个惬意又难忘的时光。'),(5,'三房树顶别墅',1,6,'./Dlib/gu/30_142603_',5,8100,'树顶别墅是裸心谷最具标志性的房型，每栋拥有3个房间，内部整体风格优雅却不失粗矿非洲风，外部面向一望无际的莫干山绵延山景，你可以在露台上尽情享受烧烤或在户外浴缸中泡个澡，度过一个惬意又难忘的时光。'),(6,'四房树顶别墅',1,8,'./Dlib/gu/30_142706_',5,10800,'树顶别墅是裸心谷最具标志性的房型，每栋拥有4个房间，内部整体风格优雅却不失粗矿非洲风，外部面向一望无际的莫干山绵延山景，你可以在露台上尽情享受烧烤或在户外浴缸中泡个澡，度过一个惬意又难忘的时光。'),(7,'厢房',2,2,'./Dlib/bao/30_145937',5,1600,'厢房周围被山景和绿色森林环抱，改造自纯朴的当地农舍和榖仓，室内设计明亮而精致， 居住其中，沉浸大自然，让疲惫的身心获得最棒的休憩。'),(8,' 崖景套房',2,2,'./Dlib/bao/30_150139',5,3400,'你住过如童话般悬崖边上的房屋吗？每栋套房都凌驾于悬崖边，让您远眺翠叠群山及郁郁葱葱的森林。舒适的氛围，独特宽敞的浴缸，让你畅快地一边泡澡一边欣赏群山美景。'),(9,'两房奢华小院',2,4,'./Dlib/bao/30_154118',5,3800,'每一栋小院有 2-5间不等的房间数和大小，满足客人不同的需求。每栋奢华小院都配有私人管家贴心服务，户外则有烧烤，部分小院有露台浴缸、泳池；室内有宽敞的客厅、温暖的壁炉、齐全的厨房设备、舒适的沙发床…等，你可以和家人朋友在此度过一段欢乐的时光'),(10,'三房奢华小院',2,6,'./Dlib/bao/30_154259',5,3800,'此栋奢华小院拥有3间房间。每栋奢华小院都配有私人管家贴心服务，户外则有烧烤，部分小院有露台浴缸、泳池；室内有宽敞的客厅、温暖的壁炉、齐全的厨房设备、舒适的沙发床…等，你可以和家人朋友在此度过一段欢乐的时光。'),(11,'四房奢华小院',2,8,'./Dlib/bao/30_153309',5,3800,'此栋奢华小院拥有4间房间。每栋奢华小院都配有私人管家贴心服务，户外则有烧烤，部分小院有露台浴缸、泳池；室内有宽敞的客厅、温暖的壁炉、齐全的厨房设备、舒适的沙发床…等，你可以和家人朋友在此度过一段欢乐的时光。'),(12,'五房奢华小院',2,10,'./Dlib/bao/30_152419',5,3800,'此栋奢华小院拥有5间房间。每栋奢华小院都配有私人管家贴心服务，户外则有烧烤，部分小院有露台浴缸、泳池；室内有宽敞的客厅、温暖的壁炉、齐全的厨房设备、舒适的沙发床…等，你可以和家人朋友在此度过一段欢乐的时光。'),(13,'地穴',2,2,'./Dlib/bao/02_153450',5,3800,'地牢、手铐、皮鞭，地穴房充满了欧洲中古世纪古堡的各种幻想。除了令人大开眼界的地穴设计，大型浴缸、睡床和山顶风光让你拥有与众不同的入住体验。'),(14,'隐室',2,2,'./Dlib/bao/02_152509',5,6400,'瘾室的睡床两旁采用了非常大胆的鸦片床为设计灵感，整体风格富有浓郁的中东神秘色彩，入住这里能让你彻底慵懒放松。此外，一进房还能一眼就望见阳台一片苍翠的竹林风光。'),(15,'花旦',2,2,'./Dlib/bao/02_153814',5,9600,'明亮的大化妆台、黑色大理石地、精致的布帘、闪亮装饰的浴缸和浴室，处处充满了妩媚大胆的风情，就像是上世纪初女明星的私密空间。'),(16,'帮主',2,2,'./Dlib/bao/02_154213',5,12800,'木质墙面、鸵鸟皮家具、优雅绅士风格的洗手间，无处不透露着典雅、内敛却阳刚的绅士情怀。抽着雪茄、喝杯威士忌，这里就是你的天下。'),(17,'王室',2,2,'./Dlib/bao/02_154534',5,16000,'皇家奢华的极致，淋漓尽致呈现欧洲经典王室美学。欧洲古董家具，高档质感的木墙，让弥漫雍容华贵的气质。站上全景阳台，更能展现君临天下的气势。');
/*!40000 ALTER TABLE `room_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_type_device`
--

DROP TABLE IF EXISTS `room_type_device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `room_type_device` (
  `type_device_id` int(11) NOT NULL AUTO_INCREMENT,
  `room_type_id` int(11) DEFAULT NULL,
  `device_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`type_device_id`),
  KEY `device_id` (`device_id`),
  KEY `room_type_id` (`room_type_id`),
  CONSTRAINT `room_type_device_ibfk_1` FOREIGN KEY (`device_id`) REFERENCES `device` (`device_id`),
  CONSTRAINT `room_type_device_ibfk_2` FOREIGN KEY (`room_type_id`) REFERENCES `room_type` (`room_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_type_device`
--

LOCK TABLES `room_type_device` WRITE;
/*!40000 ALTER TABLE `room_type_device` DISABLE KEYS */;
INSERT INTO `room_type_device` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,11),(5,1,12),(6,1,15),(7,1,13),(8,2,1),(9,2,2),(10,2,3),(11,2,11),(12,2,12),(13,2,15),(14,2,13),(15,3,1),(16,3,3),(17,3,4),(18,3,10),(19,3,11),(20,3,12),(21,3,13),(22,4,5),(23,4,6),(24,4,7),(25,4,8),(26,4,9),(27,4,11),(28,4,12),(29,4,13),(30,4,14),(31,5,5),(32,5,6),(33,5,7),(34,5,8),(35,5,9),(36,5,11),(37,5,12),(38,5,13),(39,5,14),(40,6,5),(41,6,6),(42,6,7),(43,6,8),(44,6,9),(45,6,11),(46,6,12),(47,6,13),(48,6,14),(49,7,16),(50,7,15),(51,7,3),(52,7,12),(53,7,13),(54,7,17),(55,8,18),(56,8,3),(57,8,19),(58,8,20),(59,8,21),(60,8,4),(61,8,17),(62,8,12),(63,8,13),(64,8,15),(65,13,22),(66,13,23),(67,13,24),(68,13,37),(69,13,25),(70,13,12),(71,13,15),(72,13,13),(73,14,22),(74,14,23),(75,14,24),(76,14,37),(77,14,25),(78,14,12),(79,14,15),(80,14,13),(81,15,22),(82,15,23),(83,15,24),(84,15,37),(85,15,25),(86,15,12),(87,15,15),(88,15,13),(89,16,22),(90,16,23),(91,16,24),(92,16,37),(93,16,25),(94,16,12),(95,16,15),(96,16,13),(97,17,22),(98,17,23),(99,17,24),(100,17,37),(101,17,25),(102,17,12),(103,17,15),(104,17,13),(105,9,3),(106,9,5),(107,9,26),(108,9,27),(109,9,28),(110,9,29),(111,9,30),(112,10,3),(113,10,5),(114,10,26),(115,10,27),(116,10,28),(117,10,29),(118,10,30),(119,11,31),(120,11,32),(121,11,33),(122,11,34),(123,11,35),(124,11,36),(125,12,3),(126,12,5),(127,12,26),(128,12,27),(129,12,28),(130,12,29),(131,12,30);
/*!40000 ALTER TABLE `room_type_device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomhao`
--

DROP TABLE IF EXISTS `roomhao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roomhao` (
  `room_id` int(11) NOT NULL AUTO_INCREMENT,
  `door_hao` varchar(20) DEFAULT NULL,
  `room_type_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`room_id`),
  KEY `room_type_id` (`room_type_id`),
  CONSTRAINT `roomhao_ibfk_1` FOREIGN KEY (`room_type_id`) REFERENCES `room_type` (`room_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomhao`
--

LOCK TABLES `roomhao` WRITE;
/*!40000 ALTER TABLE `roomhao` DISABLE KEYS */;
INSERT INTO `roomhao` VALUES (1,'gu_1001',1),(2,'gu_1002',1),(3,'gu_1003',1),(4,'gu_1004',1),(5,'gu_1005',1),(6,'gu_1006',1),(7,'gu_1007',1),(8,'gu_1008',1),(9,'gu_1009',1),(10,'gu_1010',1),(11,'gu_2001',2),(12,'gu_2002',2),(13,'gu_2003',2),(14,'gu_2004',2),(15,'gu_2005',2),(16,'gu_2006',3),(17,'gu_2007',3),(18,'gu_2008',3),(19,'gu_2009',3),(20,'gu_2010',3),(21,'gu_3001',4),(22,'gu_3002',4),(23,'gu_3003',4),(24,'gu_3004',4),(25,'gu_3005',4),(26,'gu_3006',5),(27,'gu_3007',5),(28,'gu_3008',5),(29,'gu_3009',5),(30,'gu_3010',5),(31,'gu_3011',6),(32,'gu_3012',6),(33,'gu_3013',6),(34,'gu_3014',6),(35,'gu_3015',6),(36,'bao_1001',13),(37,'bao_1002',13),(38,'bao_1003',13),(39,'bao_1004',13),(40,'bao_1005',13),(41,'bao_1006',14),(42,'bao_1007',14),(43,'bao_1008',14),(44,'bao_1009',14),(45,'bao_1010',14),(46,'bao_1011',15),(47,'bao_1012',15),(48,'bao_1013',15),(49,'bao_1014',15),(50,'bao_1015',15),(51,'bao_1016',16),(52,'bao_1017',16),(53,'bao_1018',16),(54,'bao_1019',16),(55,'bao_1020',16),(56,'bao_1021',17),(57,'bao_1022',17),(58,'bao_1023',17),(59,'bao_1024',17),(60,'bao_1025',17),(61,'bao_2001',7),(62,'bao_2002',7),(63,'bao_2003',7),(64,'bao_2004',7),(65,'bao_2005',7),(66,'bao_2006',8),(67,'bao_2007',8),(68,'bao_2008',8),(69,'bao_2009',8),(70,'bao_2010',8),(71,'bao_3001',9),(72,'bao_3002',9),(73,'bao_3003',9),(74,'bao_3004',9),(75,'bao_3005',9),(76,'bao_3006',10),(77,'bao_3007',10),(78,'bao_3008',10),(79,'bao_3009',10),(80,'bao_3010',10),(81,'bao_3011',11),(82,'bao_3012',11),(83,'bao_3013',11),(84,'bao_3014',11),(85,'bao_3015',11),(86,'bao_3016',12),(87,'bao_3017',12),(88,'bao_3018',12),(89,'bao_3019',12),(90,'bao_3020',12);
/*!40000 ALTER TABLE `roomhao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `sex` varchar(20) DEFAULT NULL,
  `account_id` int(11) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `face` varchar(50) DEFAULT NULL,
  `tel` varchar(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'晃过天空','男',1,'657115811@qq.com','/Dlib/face/user_default.jpg','181'),(2,'宇少','男',2,'1757478118@qq.com','/Dlib/face/user_default.jpg','18981209011');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'cq'
--

--
-- Dumping routines for database 'cq'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-06 17:08:41
