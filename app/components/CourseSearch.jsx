"use client";
import { useState } from "react";

const CourseSearch = () => {
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input type="text" className="search-input" />
    </form>
  );
};

export default CourseSearch;
