"use client";

import { useState, useEffect } from "react";

const roles = [
  "Backend Developer",
  "Front End Developer",
  "Backend Engineer",
];

export function Typewriter() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let deleteTimeout: ReturnType<typeof setTimeout>;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        } else {
          // Wait before deleting
          deleteTimeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => {
      clearTimeout(timeout);
      clearTimeout(deleteTimeout);
    };
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <span className="inline-block min-h-[1.5em]">
      <span className="text-xl md:text-2xl text-primary font-medium">
        {currentText}
      </span>
      <span className="inline-block w-[3px] h-[1.2em] bg-primary ml-1 align-middle animate-pulse" />
    </span>
  );
}
