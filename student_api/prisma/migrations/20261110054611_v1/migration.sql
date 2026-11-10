-- CreateTable
CREATE TABLE `student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `age` INTEGER NOT NULL,
    `major` VARCHAR(50) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectCode` VARCHAR(20) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `objective` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `theoryHour` INTEGER NOT NULL DEFAULT 0,
    `practiceHour` INTEGER NOT NULL DEFAULT 0,
    `credit` INTEGER NOT NULL,
    `teacher` VARCHAR(50) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `subject_subjectCode_key`(`subjectCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
