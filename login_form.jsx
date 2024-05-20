import { NavLink } from "react-router-dom";
import CustomButton from "../../../components/inputs/custom_button";
import {
  CustomInput,
  CustomPassword,
} from "../../../components/inputs/custom_input";
import CustomSwitch from "../../../components/inputs/custom_switch";

export default function LoginForm({ form, submitHandler }) {
  return (
    <>
      <div className="w-full">
        <form
          className="flex items-center flex-col flex-grow gap-4"
          onSubmit={form.handleSubmit((data) => submitHandler(data))}
        >
          <CustomInput
            className={
              "border w-full p-2 text-[0.80rem] rounded-[0.25rem] focus:outline-none"
            }
            control={form.control}
            name={"email"}
            placeholder={"Email"}
          />
          <CustomPassword
            className={
              "border w-full p-2 text-[0.8rem] rounded-[0.25rem] focus:outline-none"
            }
            placeholder={"Password"}
            control={form.control}
            name={"password"}
          />
          <div className="flex justify-start w-full">
            <CustomSwitch control={form.control} name="user_type" />
          </div>
          <CustomButton
            className="bg-blue-500 py-2 w-full text-white text-[0.8rem] rounded-[0.25rem]"
            title={"Login"}
          />
          {form.watch("user_type") === "Customer" && (
            <div className="text-[0.7rem] text-gray-600 flex gap-1">
              Don't have an account?
              <NavLink to={"/signup"} className={"text-blue-500 underline"}>
                Signup
              </NavLink>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
