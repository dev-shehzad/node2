"use client";
import Footer from "@/app/_components/Footer/Footer";
import Link from "next/link";
import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { firebaseConfig } from "@/app/config/firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  app,
  auth,
  signInWithGoogle,
  createUserWithEmailAndPassword,
} from "@/app/config/firebaseConfig";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Page = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp); // Corrected line
  const router = useRouter();
  const handleSignUp = (e) => {
    e.preventDefault();
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User created:", userCredential.user);
        // Show success toast message
        toast.success('User created successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Redirect the user to the dashboard
        router.push('/pages/Dashboard1');
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
        // Show an error message to the user
        if (error.code === 'auth/email-already-in-use') {
          alert('This email is already in use. Please log in or use a different email.');
        } else {
          // Handle other errors
          alert('An error occurred. Please try again.');
        }
      });
  };
  return (
    <div className="w-full ">
       <ToastContainer />
      <div className="w-full max-w-[800px] p-[30px] mx-auto flex flex-col items-center  font-roboto">
        <img
          src="/sign up.png"
          alt=""
          className="w-[346px] h-[129px] overflow-hidden object-cover"
        />
        <div className="w-full h-auto bg-[#E6F2F8] rounded-[20px] p-[20px] py-[40px] flex flex-col items-center">
          {/* Apple and Google Sign Up Buttons (Note: These are not functional in this snippet) */}
          <div className="w-full flex gap-[21px] max-md:gap-[10px] justify-center max-md:flex-col max-md:items-center">
            <div className="w-[250px] h-[44.811px] gap-1 cursor-pointer rounded-md text-[16px] font-[600] bg-black text-white flex justify-center items-center">
              <FaApple />
              Sign up with Apple
            </div>
            <div className="w-[250px] h-[45px] gap-1 bg-white text-gray-500 cursor-pointer rounded-xl text-[17px] font-[600] flex justify-center items-center">
              <FcGoogle />
              Sign up with Google
            </div>
          </div>
          <div className="text-[36px] font-[400] py-[30px] max-md:py-[17px] max-md:text-[30px]">
            or
          </div>
          <form
            onSubmit={handleSignUp}
            className="space-y-2 md:space-y-4 w-full px-8 max-md:px-4 max-sm:px-2"
          >
            {/* Full Name Input */}
            <div className="w-full py-1 rounded-[5px] mt-3 bg-[#BFDDEE] focus-within:bg-[#a8d6f1]">
              <div className="text-[12px] text-[#49454F] pt-2 pl-2">
                Full Name{" "}
              </div>
              <input
                type="text"
                className="w-full h-full bg-transparent border-none outline-none pl-2 text-[16px] text-[#1C1B1F]"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            {/* Email Input */}
            <div className="w-full py-1 rounded-[5px] mt-3 bg-[#BFDDEE] focus-within:bg-[#a8d6f1]">
              <div className="text-[12px] text-[#49454F] pt-2 pl-2">
                Your Email{" "}
              </div>
              <input
                type="email"
                className="w-full h-full bg-transparent border-none outline-none pl-2 text-[16px] text-[#1C1B1F]"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password Input */}
            <div className="w-full py-1 rounded-[5px] mt-3 bg-[#BFDDEE] focus-within:bg-[#a8d6f1]">
              <div className="text-[12px] text-[#49454F] pt-2 pl-2">
                Password{" "}
              </div>
              <input
                type="password"
                className="w-full h-full bg-transparent border-none outline-none pl-2 text-[16px] text-[#1C1B1F]"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Sign Up Button */}
            <div className="w-full flex justify-center py-12 max-md:py-8">
              <button
                type="submit"
                className="px-5 py-2.5 text-center bg-[#0076BA] hover:bg-[#3d97cb] rounded-full text-white text-md font-medium"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="w-full flex justify-center">
            <div className="text-[14px] font-[500] text-[#0076BA]">
              Already have an account?{" "}
              <Link href="/pages/SignIn" className="hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
