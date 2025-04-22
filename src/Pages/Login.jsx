import Nav from "../Components/Nav";
import Bottom from "../Components/Bottom";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }; // ✅ FIXED: Closed the function here

  return (
    <>
      <Nav />
      <div className="flex ">
        <img
          className="w-1/2 object-cover rounded-md "
          src="https://sg.trtconcept.com/cdn/shop/files/Copy_of_1440x1200px_1.png?v=1731984451&width=2000"
          alt=""
        />
        <div className="w-1/2 p-62 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3  ">
            <input
              {...register("Email", { required: true })}
              placeholder="E-mail"
              className="border-gray-300 border-2 w-96 p-2 rounded"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
            
            <input
                {...register("password",{required:true})}
                 placeholder="Password"
                className=" border-gray-300 border-2  w-96 p-2 rounded"
            />
             {errors.name && <span className="text-red-500">Password is Required</span>}
            <input
              type="submit"
              value="Log in"
              className="bg-black w-96 text-white py-2 rounded cursor-pointer"
            />
            
          </form>

          <div className="pt-30">
            <h1 className="text-xl cursor-pointer text-gray-600">Forgot password?</h1>
          <Link to="/auth/Register">  <h1 className="text-xl pt-2 ">Not a member?<span className="cursor-pointer pl-2 text-gray-600">Register</span> </h1></Link>
        </div>

        </div>
       
      </div>

      
      <Bottom />
    </>
  );
};

export default Login;
