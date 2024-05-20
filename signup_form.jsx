import { NavLink } from "react-router-dom";
import CustomButton from "../../../components/inputs/custom_button";
import {
  CustomInput,
  CustomPassword,
} from "../../../components/inputs/custom_input";

export default function SignupForm({ form, submitHandler }) {
  return (
    <>
      <div>
        <form
          className="flex items-center flex-col flex-grow gap-4"
          onSubmit={form.handleSubmit((data) => submitHandler(data))}
        >
          <CustomInput
            className={
              "border p-2 text-[0.80rem] rounded-[0.25rem] focus:outline-none"
            }
            control={form.control}
            name={"email"}
            placeholder={"Email"}
          />
          <CustomPassword
            className={
              "border p-2 text-[0.8rem] rounded-[0.25rem] focus:outline-none"
            }
            placeholder={"Password"}
            control={form.control}
            name={"password"}
          />
          <CustomInput
            className={
              "border p-2 text-[0.80rem] rounded-[0.25rem] focus:outline-none"
            }
            control={form.control}
            name={"username"}
            placeholder={"Username"}
          />
          <CustomInput
            className={
              "border p-2 text-[0.80rem] rounded-[0.25rem] focus:outline-none"
            }
            control={form.control}
            name={"phone"}
            placeholder={"Phone"}
          />
          <CustomButton
            className="bg-blue-500 py-2 w-full text-white text-[0.8rem] rounded-[0.25rem]"
            title={"Create Account"}
          />
          {form.watch("user_type") === "Customer" && (
            <div className="text-[0.7rem] text-gray-600 flex gap-1">
              Already have an account?
              <NavLink to={"/login"} className={"text-blue-500 underline"}>
                Login
              </NavLink>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
