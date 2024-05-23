import { useEffect } from "react";
import { Controller } from "react-hook-form";

export function CustomOptions({ control, data, name, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <select
            {...field}
            {...rest}
            value={field.value}
            onChange={(e) => {
              field.onChange(e);
            }}
          >
            {data.map((options) => {
              return <option value={options._id}>{options.table_name}</option>;
            })}
          </select>
        );
      }}
    />
  );
}
