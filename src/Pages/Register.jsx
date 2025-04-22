import { useForm } from "react-hook-form";
import Nav from "../Components/Nav";
import Bottom from "../Components/Bottom";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., API call)
  };

  return (
    <>
      <Nav />
      <div className="flex  items-center  ">
        {/* Image Section */}
        <div className="hidden md:block w-1/2 ">
          <img
            className="rounded-md"
            src="https://sg.trtconcept.com/cdn/shop/files/Copy_of_1440x1200px_3.png?v=1731984452&width=2000"
            alt="Register Visual"
          />
        </div>

        {/* Form Section */}
        <div className=" bg-white w-120 ml-46 rounded p-6">
          <h1 className="text-4xl font-semibold mb-6 text-center">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First Name"
              className="border-gray-300 border-2 p-2  rounded"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName.message}</span>
            )}

            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last Name"
              className="border-gray-300 border-2 p-2 rounded"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName.message}</span>
            )}

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email"
              className="border-gray-300 border-2 p-2 rounded"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}

            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Password"
              className="border-gray-300 border-2 p-2 rounded"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
            
            <h1 className="text-gray-400 mt-10 text-center">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</h1>

            <button
              type="submit"
              className="bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Register
            </button>
          </form>
          <div className="pt-10 flex items-center justify-center">
           <Link to="/auth/Login"><h1 className="text-lg cursor-pointer text-gray-600">Already Having An Account</h1></Link> 
            </div>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Register;
