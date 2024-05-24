import { useForm } from "react-hook-form";
import useToastify from "../../hooks/useToastify";
import useApiMutation from "../../hooks/useApiMutation";
import { useNavigate } from "react-router-dom";
import ContactForm from "./components/contact_form";
import contact_service from "./service/contact_service";

export default function ContactPage() {
  const { success, error } = useToastify();
  const navigate = useNavigate();

  const form = useForm();

  const { mutate } = useApiMutation({
    mutationKey: ["contact"],
    mutationFn: contact_service.contact,
    onSuccess: (data) => {
      success("Message sent successfully");
      form.reset({
        username: "",
        email: "",
        message: "",
      });
    },
    onError: () => {
      error("Failed to sent message");
      form.reset({
        username: "",
        email: "",
        message: "",
      });
    },
  });

  function submitHandler(data) {
    if (!data.username || !data.email || !data.message) {
      error("Please provide proper input");
    } else {
      mutate(data);
    }
  }

  return (
    <>
      <main className="flex justify-center items-center w-screen bg-blue-200">
        <div className="flex gap-5 min-h-[340px] bg-white shadow-md rounded-[0.5rem] pl-6">
          <div className="flex flex-grow flex-col items-start py-5 w-[350px]">
            <p className="flex items-center text-[1.5rem]">Contact Us</p>
            <p className="text-[0.8rem] text-gray-600">Get in touch with us</p>
            <div className="flex flex-grow items-center w-full pt-3">
              <ContactForm form={form} submitHandler={submitHandler} />
            </div>
          </div>
          <div
            className="flex border w-80 items-center justify-center flex-grow relative rounded-tr-[0.5rem] rounded-br-[0.5rem]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('../../../tables.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </main>
    </>
  );
}
