import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {useState} from 'react'
function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate("/home");
  };

  // CSS
  const field =
    "flex items-center justify-center gap-[0.5em] rounded-[25px] p-[0.6em] border-none outline-none text-white bg-[#171717] shadow-[inset_2px_5px_10px_rgb(5,5,5)]";

  const input_icon = "h-[1.3em] w-[1.3em] fill-white";

  const input_field =
    "bg-transparent border-none outline-none w-full text-[#d3d3d3]";

  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-black">
        <div className="bg-[#0f9] rounded-[22px] transition-all duration-300 hover:shadow-[0px_0px_30px_1px_rgba(0,255,117,0.3)]">
          <div className="transition-all duration-200 hover:scale-[0.98] hover:rounded-[20px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="form"
              className="flex flex-col gap-2.5 pl-[2em] pr-[2em] pb-[0.4em] bg-[#171717] rounded-[25px] transition-all duration-[0.4s] ease-in-out"
            >
              <p
                id="heading"
                className="text-center m-[2em] text-white text-[1.2em]"
              >
                Login
              </p>

              {/* Username */}
              <div>
                <div className={field}>
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    className={input_icon}
                  >
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                  </svg>

                  <input
                    type="text"
                    {...register("username", {
                      required: "Username is required",
                    })}
                    className={input_field}
                    placeholder="Username"
                    autoComplete="off"
                  />
                </div>
                {errors.username && (
                  <span className="text-red-500 text-[0.8em] mt-[0.2em]">
                    {errors.username.message}
                  </span>
                )}
              </div>
              {/* Password */}
              <div>
                <div className={field}>
                  <svg
                    viewBox="1 0 16 16"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    className={input_icon}
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>

                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className={input_field}
                    placeholder="Password"
                  />
                  <svg
                  onClick={() => setShowPassword(!showPassword)}
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="w-5 h-5 fill-white"
                >
                  <path d="M32,15C11.169,15,0.769,30.242,0.336,30.891c-0.448,0.672-0.448,1.547,0,2.219C0.769,33.758,11.169,49,32,49 s31.231-15.242,31.664-15.891c0.448-0.672,0.448-1.547,0-2.219C63.231,30.242,52.831,15,32,15z M32,45 C16.493,45,7.234,35.322,4.512,31.996C7.225,28.663,16.436,19,32,19c15.507,0,24.766,9.678,27.488,13.004 C56.775,35.337,47.564,45,32,45z"></path>{" "}
                  <path d="M32,23c-4.963,0-9,4.038-9,9s4.037,9,9,9s9-4.038,9-9S36.963,23,32,23z M32,37c-2.757,0-5-2.243-5-5s2.243-5,5-5 s5,2.243,5,5S34.757,37,32,37z"></path>{" "}
                </svg>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-[0.8em] mt-[0.2em]">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-center flex-row mt-[2.5em]">
                <button
                  type="submit"
                  className="p-[0.5em] pl-[1.1em] pr-[1.1em] rounded-[5px] mr-[0.5em] border-none outline-none transition-all duration-[0.4s] ease-in-out bg-[#252525] text-white hover:bg-black"
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </button>
                {/* Sign Up Button */}
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="p-[0.5em] pl-[2.3em] pr-[2.3em] rounded-[5px] border-none outline-none transition-all duration-[0.4s] ease-in-out bg-[#252525] text-white hover:bg-black"
                >
                  Sign Up
                </button>
              </div>

              {/* Forgot Password */}
              <button
                type="button"
                className="mb-[3em] p-[0.5em] rounded-[5px] border-none outline-none transition-all duration-[0.4s] ease-in-out bg-[#252525] text-white hover:bg-red-500"
              >
                Forgot Password
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
