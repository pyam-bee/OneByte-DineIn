import { useForm } from "react-hook-form";
import useToastify from "../../hooks/useToastify";
import useApiMutation from "../../hooks/useApiMutation";
import { useNavigate } from "react-router-dom";
import SignupForm from "./components/signup_form";
import signup_service from "./service/signup_service";

export default function SignupPage() {
  const { success, error } = useToastify();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      user_type: "Customer",
    },
  });

  const { mutate } = useApiMutation({
    mutationKey: ["signup"],
    mutationFn: signup_service.signup,
    onSuccess: (data) => {
      success("Signup Successfull");
      navigate("/login");
    },
    onError: () => {
      error("Signup Failed");
    },
  });

  function submitHandler(data) {
    if (!data.email || !data.password) {
      error("Please provide proper input");
    } else {
      mutate(data);
    }
  }

  return (
    <>
      <main className="flex justify-center items-center h-screen w-screen bg-blue-200">
        <div className="flex flex-col gap-2 min-h-[340px]  bg-white shadow-md rounded-[0.5rem] py-5 px-6">
          <p className="text-[1.5rem]">Customer Signup</p>
          <p className="text-[0.8rem] text-gray-600">Get Started with us</p>
          <div className="flex w-full pt-3">
            <SignupForm form={form} submitHandler={submitHandler} />
          </div>
        </div>
      </main>
    </>
  );
}
