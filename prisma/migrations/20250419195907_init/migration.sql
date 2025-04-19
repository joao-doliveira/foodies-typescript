/*
  Warnings:

  - Added the required column `instructions` to the `Meals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meals" ADD COLUMN     "instructions" TEXT NOT NULL;
