import { useForm } from "react-hook-form";
import LoginForm from "./components/login_form";
import useToastify from "../../hooks/useToastify";
import useApiMutation from "../../hooks/useApiMutation";
import login_service from "./service/login_service";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { success, error } = useToastify();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      user_type: "Customer",
    },
  });

  const { mutate } = useApiMutation({
    mutationKey: ["login"],
    mutationFn: login_service.login,
    onSuccess: (data) => {
      success("Login Successfull");
      const user = data.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    },
    onError: () => {
      error("Login Failed");
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
        <div className="flex flex-col gap-2 w-[300px] min-h-[340px] h-[340px] max-h-[340px] bg-white shadow-md rounded-[0.5rem] py-5 px-6">
          <p className="text-[1.5rem]">Bonjour</p>
          <p className="text-[0.8rem] text-gray-600">
            Welcome to OneByte Restro
          </p>
          <div className="flex w-full items-center pt-3">
            <LoginForm form={form} submitHandler={submitHandler} />
          </div>
        </div>
      </main>
    </>
  );
}
