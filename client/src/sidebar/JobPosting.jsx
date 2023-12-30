import React from "react";
import InputField from "../components/InputField";

const JobPosting = ({ handleRadioButtonChange }) => {
  const now = new Date();
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  //converting date into string format
  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>
      <div className="">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleRadioButtonChange}
          />
          <span className="checkmark"></span>All Time
        </label>

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value={twentyFourHoursAgoDate}
          title="Last 24 hours"
          name="test"
        />

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value={sevenDaysAgoDate}
          title="Last 7 days"
          name="test"
        />

        <InputField
          handleRadioButtonChange={handleRadioButtonChange}
          value={thirtyDaysAgoDate}
          title="Last 30 days"
          name="test"
        />
      </div>
    </div>
  );
};

export default JobPosting;
