"use server";
import prisma from "./prismaService";

export async function addCohort(name: string) {
  const cohorts = await prisma.cohorts.create({
    data: {
      cohort_name: name,
    },
  });
  return cohorts;
}

export async function getCohorts() {
  const cohorts = await prisma.cohorts.findMany();
  return cohorts;
}
