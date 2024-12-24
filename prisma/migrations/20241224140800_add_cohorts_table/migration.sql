-- CreateTable
CREATE TABLE "cohorts" (
    "id" BIGSERIAL NOT NULL,
    "cohort_name" TEXT NOT NULL,

    CONSTRAINT "cohorts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cohorts_id_key" ON "cohorts"("id");
