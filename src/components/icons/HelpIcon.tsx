import React from 'react'
import { iconProps } from "@/types";
import { twMerge } from "tailwind-merge";

function HelpIcon({ className }: iconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={twMerge(" ", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9 13H11V15H9V13ZM11 11.3551V12H9V10.5C9 9.9477 9.4477 9.5 10 9.5C10.8284 9.5 11.5 8.8284 11.5 8C11.5 7.17157 10.8284 6.5 10 6.5C9.2723 6.5 8.6656 7.01823 8.5288 7.70577L6.56731 7.31346C6.88637 5.70919 8.302 4.5 10 4.5C11.933 4.5 13.5 6.067 13.5 8C13.5 9.5855 12.4457 10.9248 11 11.3551Z" />
      </g>
    </svg>
  );
}

export default HelpIcon