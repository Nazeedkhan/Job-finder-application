import React from "react";
import InputField from "../components/InputField";

const EmploymentType = ({ handleRadioButtonChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Employment Type</h4>
      <div className="">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleRadioButtonChange}
          />
          <span className="checkmark"></span>Any
        </label>

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value="full-time"
          title="Full-Time"
          name="test"
        />

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value="part-Time"
          title="Part-Time"
          name="test"
        />

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value="temporary"
          title="Temporary"
          name="test"
        />
      </div>
    </div>
  );
};

export default EmploymentType;
