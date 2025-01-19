import React from "react";

function Gender({ handleCheckbox, selectedGender }) {
  return (
    <div className="flex mb-0 gap-3">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <input
            type="checkbox"
            className={`checkbox checkbox-sm bg-white`}
            name="male"
            id="male"
            checked={selectedGender === "male"}
            onChange={() => handleCheckbox("male")}
          />
          <span className="label-text text-white">Male</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <input
            type="checkbox"
            className={`checkbox checkbox-sm bg-white`}
            name="female"
            id="female"
            checked={selectedGender === "female"}
            onChange={() => handleCheckbox("female")}
          />
          <span className="label-text text-white">Female</span>
        </label>
      </div>
    </div>
  );
}
export default Gender;
