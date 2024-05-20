import classNames from "classnames";
import { useState } from "react";
import { Controller } from "react-hook-form";

export default function CustomSwitch({ control, name }) {
  const [isSwitched, setSwitch] = useState(true);

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className="flex gap-2 items-center">
            <div
              {...field}
              className={classNames(
                "flex justify-start items-center w-9 px-[0.1rem] py-1 border border-gray-300 h-5 rounded-[2rem] bg-gray-200",
                {
                  "justify-end": !isSwitched,
                  "justify-start": isSwitched,
                },
              )}
            >
              <div
                className="flex rounded-full h-4 w-4 bg-blue-500"
                onClick={() => {
                  setSwitch((prev) => !prev);
                  field.onChange(!isSwitched ? "Customer" : "Staff");
                }}
              ></div>
            </div>
            {!isSwitched && (
              <p className="text-[0.75rem] text-gray-500">Staff</p>
            )}
            {isSwitched && (
              <p className="text-[0.75rem] text-gray-500">Customer</p>
            )}
          </div>
        )}
      />
    </>
  );
}
