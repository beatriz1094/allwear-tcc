-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `senha` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `Usuario_senha_key`(`senha`),
    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Escolha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `casacos` VARCHAR(100) NOT NULL,
    `blusas` VARCHAR(100) NOT NULL,
    `shorts` VARCHAR(100) NOT NULL,
    `saias` VARCHAR(100) NOT NULL,
    `sapatos` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Combinacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roupas` VARCHAR(100) NOT NULL,
    `estacao` VARCHAR(100) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
