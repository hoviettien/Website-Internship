"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Ngăn reload trang

    const res = await fetch("http://localhost:9000/store/customers/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Bắt buộc để lưu session
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("customer", JSON.stringify(data.customer));
      alert("Đăng nhập thành công!");
      // Optional: chuyển hướng sang trang chính
      // window.location.href = "/";
    } else {
      alert("Đăng nhập thất bại: " + (data.message || "Thông tin không đúng"));
    }
  };

  return (
    <div className="flex max-w-[900px] h-[500px] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Left panel */}
      <div className="flex-1 bg-[#0b0b58] text-white p-10 flex flex-col justify-center text-center">
        <h2 className="text-[30px] mb-2 font-bold">Welcome Back!</h2>
        <p>
          Please log in to experience our outstanding and unique services,
          with high-quality, premium products.
        </p>
      </div>

      {/* Right panel */}
      <div className="flex-1 p-10 flex flex-col justify-center">
        <h2 className="text-center text-2xl font-bold mb-5">LOGIN</h2>
        <form className="flex flex-col gap-3" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="py-3 bg-[#0f0f88] text-white font-bold rounded-md hover:bg-[#090972] transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-center my-4 text-gray-500">or</div>

        <div className="flex justify-center gap-4">
          <button className="w-10 h-10 bg-[#0f0f88] text-white text-lg rounded-md hover:bg-[#090972] transition duration-300">
            f
          </button>
          <button className="w-10 h-10 bg-[#0f0f88] text-white text-lg rounded-md hover:bg-[#090972] transition duration-300">
            t
          </button>
        </div>

        <div className="w-[280px] flex justify-between mt-5 ml-10 text-sm">
          <p>
            If you have not registered yet!{" "}
            <Link href="/register">
              <span className="text-blue-600 underline cursor-pointer">
                Register
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
