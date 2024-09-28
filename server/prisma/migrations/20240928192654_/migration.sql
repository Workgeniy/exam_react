/*
  Warnings:

  - You are about to drop the `car-info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "car-info" DROP CONSTRAINT "car-info_carId_fkey";

-- DropTable
DROP TABLE "car-info";

-- CreateTable
CREATE TABLE "carinfo" (
    "id" SERIAL NOT NULL,
    "created-at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated-at" TIMESTAMP(3) NOT NULL,
    "carId" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "engine" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "info-text" TEXT NOT NULL,

    CONSTRAINT "carinfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "carinfo_carId_key" ON "carinfo"("carId");

-- AddForeignKey
ALTER TABLE "carinfo" ADD CONSTRAINT "carinfo_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
