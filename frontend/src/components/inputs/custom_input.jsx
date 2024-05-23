import { Controller } from "react-hook-form";

export function CustomInput({ control, name, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <input {...field} {...rest} type="text" />}
    />
  );
}

export function CustomEmail({ control, name, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <input {...field} {...rest} type="email" />}
    />
  );
}

export function CustomPassword({ control, name, ...rest }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <input {...field} {...rest} type="password" />}
    />
  );
}

export function CustomDate({ control, name, ...rest }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <input {...field} {...rest} type="date" />}
    />
  );
}

export function CustomTextArea({ control, name, ...rest }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <textarea {...field} {...rest} />}
    />
  );
}
