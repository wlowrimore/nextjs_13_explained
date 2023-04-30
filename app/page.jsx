"use client";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Link from "next/link";
import { Courses } from "./components/Courses";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);
  console.log(courses);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h2>Welcome to your NextJS 13.3 Tutorial</h2>
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;