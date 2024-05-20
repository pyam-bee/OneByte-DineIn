import { NavLink } from "react-router-dom";
import CustomButton from "../../../components/inputs/custom_button";
import {
  CustomEmail,
  CustomInput,
  CustomTextArea,
} from "../../../components/inputs/custom_input";

export default function ContactForm({ form, submitHandler }) {
  return (
    <>
      <div className="flex w-full">
        <form
          className="flex items-center flex-col flex-grow gap-4"
          onSubmit={form.handleSubmit((data) => submitHandler(data))}
        >
          <CustomInput
            className={
              "border w-full p-2 text-[0.80rem] rounded-[0.25rem] focus:outline-none"
            }
            control={form.control}
            name={"username"}
            placeholder={"Username"}
          />
          <CustomEmail
            className={
              "border w-full p-2 text-[0.80rem] rounded-[0.25rem] focus:outline-none"
            }
            control={form.control}
            name={"email"}
            placeholder={"Email"}
          />

          <CustomTextArea
            className={
              "border p-2 w-full text-[0.80rem] h-36 rounded-[0.25rem] focus:outline-none"
            }
            control={form.control}
            name={"message"}
            placeholder={"Message"}
          />
          <CustomButton
            className="bg-blue-500 py-2 w-full text-white text-[0.8rem] rounded-[0.25rem]"
            title={"Send Message"}
          />
        </form>
      </div>
    </>
  );
}
