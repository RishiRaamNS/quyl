"use server";
import prisma from "./prismaService";

export const addCourse = async (name: string) => {
  const courses = await prisma.courses.create({
    data: {
      title: name,
    },
  });
  return courses;
};

export const getCourses = async () => {
  const courses = await prisma.courses.findMany();
  return courses;
};
