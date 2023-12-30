import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Salary = ({ handleRadioButtonChange, handleSelectedButtonChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <Button
          handleSelectedButtonChange={handleSelectedButtonChange}
          value=""
          title="Hourly"
        />
        <Button
          handleSelectedButtonChange={handleSelectedButtonChange}
          value="Monthly"
          title="Monthly"
        />
        <Button
          handleSelectedButtonChange={handleSelectedButtonChange}
          value="Yearly"
          title="Yearly"
        />
      </div>

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
          value={30}
          title="< 30,000k"
          name="test"
        />

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value={50}
          title="< 50,000k"
          name="test"
        />

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value={80}
          title="< 80,000k"
          name="test"
        />

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value={100}
          title="< 1,00,000k"
          name="test"
        />
      </div>
    </div>
  );
};

export default Salary;
