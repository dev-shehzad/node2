'use client'
import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import Link from "next/link";
import { Input } from "postcss";
import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import  { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup,OAuthProvider } from "firebase/auth";
import { app} from "@/app/config/firebaseConfig";
import { useRouter } from "next/navigation";
const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const auth = getAuth(app);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Yahaan aap user ko redirect kar sakte hain ya kuch aur action le sakte hain
        console.log(result);
        router.push('/pages/Dashboard1');
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  };

  const handleAppleSignIn = () => {
    const provider = new OAuthProvider('apple.com');
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        console.log(result.user);
        // Redirect the user to the dashboard or perform other actions
        router.push('/pages/Dashboard1');
      })
      .catch((error) => {
        console.error("Error during Apple sign-in:", error);
      });
  };
  
  return (
    <div className="w-full">
      <div className="w-full  max-w-[800px] p-[30px] mx-auto flex flex-col items-center  font-roboto">
        <img
          src="/NodeDa.png"
          alt=""
          className="py-8 overflow-hidden max-md:py-4"
        />
        <div className="w-full h-auto py-[40px] bg-[#E6F2F8] rounded-[20px] p-[20px] flex flex-col items-center">
          <div className="w-full flex gap-[21px] max-md:gap-[10px] justify-center max-md:flex-col max-md:items-center">
          <button onClick={handleAppleSignIn} className="w-[250px] h-[44.811px] gap-1 cursor-pointer rounded-md text-[16px] font-[600] bg-black text-white flex justify-center items-center">
          <FaApple />
          Sign in with Apple
        </button>
            <button onClick={handleGoogleSignIn} className="w-[250px] gap-1 h-[45px] bg-white text-gray-500 cursor-pointer rounded-xl text-[17px] font-[600] flex justify-center items-center">
              <FcGoogle />
              Sign up with Google
            </button>
          </div>
          <div className="text-[36px] max-md:text-[30px] font-[400] py-[30px] max-md:py-[17px]">
            or
          </div>
          <form
            className="space-y-2 md:space-y-4 w-full px-8 max-md:px-4 max-sm:px-2"
            action="#"
          >
            <div className="w-full py-1 rounded-[5px] mt-3 bg-[#BFDDEE] focus-within:bg-[#a8d6f1]">
              <div className="text-[12px] text-[#49454F] pt-2 pl-2">Email </div>
              <input
                type="text"
                className="w-full h-full bg-transparent border-none outline-none pl-2 text-[16px] text-[#1C1B1F]"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div>
              <div className="w-full py-1 rounded-[5px] mt-3 bg-[#BFDDEE] focus-within:bg-[#a8d6f1]">
                <div className="text-[12px] text-[#49454F] pt-2 pl-2">
                  Password
                </div>
                <input
                  type="text"
                  className="w-full h-full bg-transparent border-none outline-none pl-2 text-[16px] text-[#1C1B1F]"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </form>
          <div className="w-full flex justify-center py-12 max-md:py-8">
            <button
              type="sign-in"
              className="px-5 py-2.5 text-center bg-[#0076BA] hover:bg-[#3d97cb] rounded-full text-white text-md font-medium"
            >
              Sign in
            </button>
          </div>
          <div className="w-full flex justify-center">
            <div className="text-[14px] font-[500] text-[#0076BA]">
              Don&apos;t have an account?{" "}
              <Link href="/pages/SignUp" className="hover:underline">
                Create NodeDa ID
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
