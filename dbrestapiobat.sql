/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.25a : Database - dbrestapiobat
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dbrestapiobat` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `dbrestapiobat`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id_admin` int(20) NOT NULL AUTO_INCREMENT,
  `kode_admin` varchar(20) NOT NULL,
  `nama_admin` varchar(20) NOT NULL,
  `alamat` varchar(20) NOT NULL,
  `no_tlp` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `admin` */

insert  into `admin`(`id_admin`,`kode_admin`,`nama_admin`,`alamat`,`no_tlp`,`email`,`password`) values (1,'AD001','Latifah','Banyumas','085085085085','latifah@gmail.com','123abc'),(7,'AD002','Ipehh','Banyumas','085123456789','ipeh@gmail.com','123');

/*Table structure for table `barang_keluar` */

DROP TABLE IF EXISTS `barang_keluar`;

CREATE TABLE `barang_keluar` (
  `id_barang_keluar` int(30) NOT NULL AUTO_INCREMENT,
  `kode_barang_keluar` varchar(30) DEFAULT NULL,
  `tanggal_barang_keluar` varchar(30) DEFAULT NULL,
  `kode_obat` varchar(30) DEFAULT NULL,
  `nama_obat` varchar(30) DEFAULT NULL,
  `harga` double DEFAULT NULL,
  `jumlah` int(30) DEFAULT NULL,
  PRIMARY KEY (`id_barang_keluar`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `barang_keluar` */

insert  into `barang_keluar`(`id_barang_keluar`,`kode_barang_keluar`,`tanggal_barang_keluar`,`kode_obat`,`nama_obat`,`harga`,`jumlah`) values (1,'BK001','22/01/202','OB001','Fenamin 500mg',4000,20),(2,'BK001','22/01/2020','OB010','Fenamin 500ml',4000,1);

/*Table structure for table `barang_masuk` */

DROP TABLE IF EXISTS `barang_masuk`;

CREATE TABLE `barang_masuk` (
  `id_barang_masuk` int(30) NOT NULL AUTO_INCREMENT,
  `kode_barang_masuk` varchar(30) DEFAULT NULL,
  `tanggal_barang_masuk` varchar(30) DEFAULT NULL,
  `kode_obat` varchar(30) DEFAULT NULL,
  `nama_obat` varchar(30) DEFAULT NULL,
  `harga` double DEFAULT NULL,
  `jumlah` int(30) DEFAULT NULL,
  PRIMARY KEY (`id_barang_masuk`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `barang_masuk` */

insert  into `barang_masuk`(`id_barang_masuk`,`kode_barang_masuk`,`tanggal_barang_masuk`,`kode_obat`,`nama_obat`,`harga`,`jumlah`) values (1,'MS001','22/07/2020','OB001','Fenamin 500mg',4000,30),(2,'MS002','22/07/2020','OB001','Fenamin 500mg',4000,30),(3,'MS003','22/07/2020','OB001','Fenamin 500mg',4000,30),(8,'MS005','22/05/2020','OB010','Fenamin 500ml',4000,10),(9,'MS005','22/05/2020','OB010','Fenamin 500ml',4000,10);

/*Table structure for table `obat` */

DROP TABLE IF EXISTS `obat`;

CREATE TABLE `obat` (
  `id_obat` int(11) NOT NULL AUTO_INCREMENT,
  `kode_obat` varchar(30) NOT NULL,
  `nama_obat` varchar(50) NOT NULL,
  `jenis_obat` varchar(20) NOT NULL,
  `harga` double NOT NULL,
  `jumlah_stok` int(20) NOT NULL,
  `tanggal_exp` varchar(20) NOT NULL,
  PRIMARY KEY (`id_obat`),
  KEY `kode_obat` (`kode_obat`),
  KEY `nama_obat` (`nama_obat`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

/*Data for the table `obat` */

insert  into `obat`(`id_obat`,`kode_obat`,`nama_obat`,`jenis_obat`,`harga`,`jumlah_stok`,`tanggal_exp`) values (20,'OB002','Paracetamol If 500mg','tablet',3000,20,'15/07/2025'),(21,'OB003','Asam Mefenamat Berno','tablet',3700,20,'15/072025'),(22,'OB004','Amlodipine Berno 5mg','tablet',25500,20,'15/07/2025'),(23,'OB005','Candesatran Dexa 8mg','tablet',4290,20,'15/07/2025'),(24,'OB005','Biosoprol Fumarate 5','tablet',10800,20,'15/07/2025'),(25,'OB006','Captopril Indofarma ','tablet',700,20,'15/07/2025'),(26,'OB007','Clopidogrel Dexa 75m','tablet',56200,20,'15/07/2025'),(27,'OB008','Cefixime Novel 200mg','tablet',55500,20,'15/07/2025'),(28,'OB009','Amlodipine If 5mg','tablet',12400,31,'15/07/2025'),(29,'OB010','Fenamin 500ml','tablet',4000,29,'22/07/2020');

/*Table structure for table `supplier` */

DROP TABLE IF EXISTS `supplier`;

CREATE TABLE `supplier` (
  `id_supplier` int(20) NOT NULL AUTO_INCREMENT,
  `kode_supplier` varchar(20) NOT NULL,
  `nama_supplier` varchar(50) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `no_tlp` varchar(20) NOT NULL,
  PRIMARY KEY (`id_supplier`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

/*Data for the table `supplier` */

insert  into `supplier`(`id_supplier`,`kode_supplier`,`nama_supplier`,`alamat`,`no_tlp`) values (8,'SP003','DK','Kroyaa','081081081080'),(9,'SP004','Jeonghan','Kroya','083083083083'),(10,'SP005','Wonwo','Kroya','084084084084'),(11,'SP006','Seungkwan','Kroya','085081082083'),(12,'SP007','Vernon','Kroya','081089084086'),(13,'SP008','Joshua','Kroya','086087081082'),(14,'SP009','The 8','Kroya','084095011123'),(15,'SP010','Dino','Kroya','098716823455'),(16,'SP011','Jun','Kroya','076123432543'),(17,'SP012','Mingyu','Kroya','097532467765');

/* Trigger structure for table `barang_keluar` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `updatejumlah_stok` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `updatejumlah_stok` AFTER INSERT ON `barang_keluar` FOR EACH ROW BEGIN 
UPDATE obat SET jumlah_stok=jumlah_stok-NEW.jumlah
WHERE kode_obat=NEW.kode_obat;
END */$$


DELIMITER ;

/* Trigger structure for table `barang_masuk` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `updatejumlahstok` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `updatejumlahstok` AFTER INSERT ON `barang_masuk` FOR EACH ROW BEGIN 
UPDATE obat SET jumlah_stok=jumlah_stok+NEW.jumlah
WHERE kode_obat=NEW.kode_obat;
END */$$


DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
