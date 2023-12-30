import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import JobPosting from "./JobPosting";
import WorkExperience from "./WorkExperience";
import EmploymentType from "./EmploymentType";

const Sidebar = ({ handleRadioButtonChange, handleSelectedButtonChange }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <Location handleRadioButtonChange={handleRadioButtonChange} />
      <Salary
        handleRadioButtonChange={handleRadioButtonChange}
        handleSelectedButtonChange={handleSelectedButtonChange}
      />
      <JobPosting handleRadioButtonChange={handleRadioButtonChange} />
      <WorkExperience handleRadioButtonChange={handleRadioButtonChange} />
      <EmploymentType handleRadioButtonChange={handleRadioButtonChange} />
    </div>
  );
};

export default Sidebar;
