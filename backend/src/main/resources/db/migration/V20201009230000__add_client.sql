CREATE TABLE `client` (
  `id` int NOT NULL AUTO_INCREMENT,

  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `date_of_birth` datetime NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `reason` varchar(20) NOT NULL,

  `income` varchar(20) NOT NULL,
  `housing_status` varchar(20) NOT NULL,
  `is_smoker` tinyint(1) NOT NULL,
  `is_drinker` tinyint(1) NOT NULL,
  `mental_health` varchar(20) NOT NULL,
  `employment_status` varchar(20) NOT NULL,
  `education_status` varchar(20) NOT NULL,
  `race` varchar(20) NOT NULL,
  `language` varchar(20) NOT NULL,
  `willingness` varchar(20) NOT NULL,
  `martial_status` varchar(20) NOT NULL,
  `religion` varchar(20),
  `legal_service_needed` tinyint(1) NOT NULL,
  `job_search_needed` tinyint(1) NOT NULL,
  `medical_care_needed` tinyint(1) NOT NULL,
  `housing_help_needed` tinyint(1) NOT NULL,
  `financial_service_needed` tinyint(1) NOT NULL,

  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `document` (
  `id` int NOT NULL AUTO_INCREMENT,

  `client_id` int NOT NULL,
  `type` varchar(20) NOT NULL,
  `s3Key` varchar(100) NOT NULL,

  PRIMARY KEY (`id`),
  CONSTRAINT FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `service` (
  `id` int NOT NULL AUTO_INCREMENT,

  `client_id` int NOT NULL,
  `type` varchar(20) NOT NULL,
  `progress` varchar(100) NOT NULL,
  `result` varchar(100) NOT NULL,
  `notes` varchar(100),
  `updated_at` datetime NOT NULL,

  PRIMARY KEY (`id`),
  CONSTRAINT FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `staff` (
  `id` int NOT NULL AUTO_INCREMENT,

  `client_id` int NOT NULL,
  `type` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,

  PRIMARY KEY (`id`),
  CONSTRAINT FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;