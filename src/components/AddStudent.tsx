"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addStudent } from "@/services/studentService";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addCohort, getCohorts } from "@/services/cohortService";
import { Cohort, Course } from "@/types";
import { GoPlus } from "react-icons/go";
import { getCourses } from "@/services/courseService";

export function AddStudent() {
  const [name, setName] = useState<string>("");
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [selectedCohort, setSelectedCohort] = useState<Cohort | null>(null);
  const [newCohortName, setNewCohortName] = useState<string>("");
  const [isCreatingCohort, setIsCreatingCohort] = useState<boolean>(false);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [courses, setCourses] = useState<Course[]>([]); // Store courses

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission (page reload)
    await addStudent(name); // Call your addStudent function with the values
  };
  console.log(name);

  const handleCreateCohort = async () => {
    if (!newCohortName.trim()) return; // Do not create an empty cohort

    // Call the API to create a new cohort (ensure createCohort is defined in your cohortService)
    const newCohort = await addCohort(newCohortName);

    // Update the cohorts list with the newly created cohort
    setCohorts((prevCohorts) => [...prevCohorts, newCohort]);

    // Reset the input and close the "Create New Cohort" input field
    setNewCohortName("");
    setIsCreatingCohort(false);
  };

  const handleCourseSelect = (selectedCourseId: string) => {
    setSelectedCourses((prevSelectedCourses) => [
      ...prevSelectedCourses,
      selectedCourseId,
    ]);
  };

  useEffect(() => {
    const get = async () => {
      const ch = await getCohorts();
      setCohorts(ch);
    };
    const getco = async () => {
      const co = await getCourses();
      setCourses(co);
    };
    get();
    getco();
  }, []);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-buttonbg text-buttonfg hover:bg-buttonbg hover:text-buttonfg">
          <FaPlus />
          Add new student
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add student</DialogTitle>
            <DialogDescription>
              Add new student. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Cohort
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a cohort" />
                </SelectTrigger>
                <SelectContent>
                  {cohorts.map((cohort) => (
                    <SelectItem
                      key={cohort.id.toString()}
                      value={cohort.id.toString()}
                    >
                      {cohort.cohort_name}
                    </SelectItem>
                  ))}
                  {isCreatingCohort ? (
                    <div className="flex items-center gap-2">
                      <Input
                        value={newCohortName}
                        onChange={(e) => setNewCohortName(e.target.value)}
                        placeholder="Enter cohort name"
                        className="w-full"
                      />
                      <Button
                        size="sm"
                        onClick={handleCreateCohort}
                        className="mt-2"
                      >
                        Create
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant={"ghost"}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent SelectItem from being selected
                        setIsCreatingCohort(true);
                      }} // Toggle the creation state
                    >
                      <GoPlus />
                      Create New Cohort
                    </Button>
                  )}
                </SelectContent>
              </Select>
            </div>
            {/* Select Courses (Multiple) */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="courses" className="text-right">
                Courses
              </Label>
              <div className="col-span-3">
                {courses.length === 0 ? (
                  <p>No courses available</p>
                ) : (
                  <div className="flex flex-col gap-2">
                    
                  </div>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
