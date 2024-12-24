import prisma from "./prismaService";

export const addStudent = async (name: string) => {
  const students = await prisma.students.create({
    data: {
      student_name: name,
    },
  });
  return "Success";
};

export const getStudents = async () => {
  const students = await prisma.students.findMany();
  return students;
};
