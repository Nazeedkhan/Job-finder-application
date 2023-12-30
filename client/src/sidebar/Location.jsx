import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleRadioButtonChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div className="">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleRadioButtonChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value="london"
          title="London"
          name="test"
        />

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value="boston"
          title="Boston"
          name="test"
        />

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value="seattle"
          title="Seattle"
          name="test"
        />

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value="madrid"
          title="Madrid"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
