
/* opcionalmente    ->     prisma db push  */

/* SELECT count(1) AS table_count FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'addoncontratos'; */

SET @drop_query = (SELECT GROUP_CONCAT(CONCAT(' DROP TABLE `', TABLE_SCHEMA, '`.`', TABLE_NAME, '`;') SEPARATOR '')
FROM  INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA = 'addoncontratos');

SELECT @drop_query;
