import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { AddStudent } from "./AddStudent";
import { getStudents } from "@/services/studentService";
import { Student } from "@/types";
import SelectCohort from "./SelectCohort";
import SelectCourse from "./SelectCourse";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface MyComponentProps {
  show: boolean;
}
const Dashboard: React.FC<MyComponentProps> = async ({ show }) => {
  //   const [students, setStudents] = useState<Student[]>([]);

  //   useEffect(() => {
  //     const get = async () => {
  //       const st = await getStudents();
  //       setStudents(st);
  //     };
  //     get();
  //   });
  const students = await getStudents();

  if (show) {
    return (
      <div className="bg-white mt-10 p-8 rounded-md text-black">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-x-4">
            <SelectCohort />
            <SelectCourse />
          </div>
          <AddStudent />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Cohort</TableHead>
              <TableHead>Courses</TableHead>
              <TableHead>Date Joined</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students?.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.student_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  } else {
    return (
      <div className="relative mt-10">
        <div className="absolute inset-0 top-20 flex items-center justify-center font-bold text-lg z-10">
          Login to access
        </div>
        <div className="blur-sm pointer-events-none">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Cohort</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>Date Joined</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
      </div>
    );
  }
};

export default Dashboard;
