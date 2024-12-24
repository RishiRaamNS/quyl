export interface Student {
  id: bigint;
  student_name: string | null;
  date_joined: Date | null;
  last_login: Date | null;
}

export interface iconProps {
  className?: string;
}

export interface Cohort {
  id: bigint;
  cohort_name: string;
}

export interface Course {
  id: bigint;
  title: string;
  createdAt: Date;
}
