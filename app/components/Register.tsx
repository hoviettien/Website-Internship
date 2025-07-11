"use client";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex max-w-[900px] h-[500px] mx-auto mt-10 bg-white shadow-lg rounded-xl overflow-hidden">
      
      <div className="flex-1 bg-[#0b0b58] text-white p-10 flex flex-col justify-center text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
        <p className="text-base leading-relaxed">
          Please log in to experience our outstanding and unique services,
          with high-quality, premium products.
        </p>
      </div>

      
      <div className="flex-1 p-10 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-5 uppercase text-center">CREATE ACCOUNT</h2>
        <form className="w-full max-w-[300px] flex flex-col gap-3">
          <div className="flex gap-2">
            <input type="text" placeholder="First name" className="p-3 border border-gray-300 rounded-md w-full" />
            <input type="text" placeholder="Last name" className="p-3 border border-gray-300 rounded-md w-full" />
          </div>
          <input type="email" placeholder="Email Address" className="p-3 border border-gray-300 rounded-md w-full" />
          <input type="password" placeholder="Password" className="p-3 border border-gray-300 rounded-md w-full" />
          <Link href="/login">
            <button type="button" className="w-full py-3 bg-[#0f0f88] text-white font-bold rounded-md mt-2 mb-3 hover:bg-[#090972] transition duration-300">
              Register
            </button>
          </Link>
        </form>

        <div className="text-center text-sm text-gray-500 mb-2">or</div>

        <div className="flex gap-4 justify-center">
          <button className="w-10 h-10 bg-[#0f0f88] text-white font-bold rounded-md hover:bg-[#090972] transition duration-300">f</button>
          <button className="w-10 h-10 bg-[#0f0f88] text-white font-bold rounded-md hover:bg-[#090972] transition duration-300">t</button>
        </div>

        <div className="flex w-[210px] justify-between mt-5 text-sm">
          <p>
            If you have registered!{" "}
            <Link href="/login">
              <span className="text-blue-600 underline cursor-pointer">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
