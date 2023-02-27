-- CreateEnum
CREATE TYPE "OPERATION_TYPE" AS ENUM ('credit', 'debit');

-- CreateEnum
CREATE TYPE "TRANSACTION_TYPE" AS ENUM ('pix', 'ted', 'doc', 'purchase');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "operation_type" "OPERATION_TYPE" NOT NULL,
    "trasaction_type" "TRANSACTION_TYPE" NOT NULL,
    "completed" BOOLEAN DEFAULT false,
    "value" DECIMAL(65,30) NOT NULL,
    "descriprion" TEXT,
    "accountId" INTEGER NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
