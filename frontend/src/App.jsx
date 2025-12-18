import React, { useEffect, useState } from "react";
import axios from "axios";
import architectureImg from "./assets/Architectural.png";

export default function App() {
  const [message, setMessage] = useState("Loading gratitude... 💙");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/thanks")
      .then((res) => setMessage(res.data.message))
      .catch(() =>
        setMessage("Thank you for coming at AWS Community Event.")
      );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full space-y-12">

        {/* ===== Architecture Section ===== */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">
            Live Architecture – Code to Cloud
          </h2>

          <p className="text-center text-gray-600 mb-6">
            GitHub Actions • Docker • Amazon ECR • ECS Fargate • ALB
          </p>

          <img
            src={architectureImg}
            alt="AWS Architecture Diagram"
            className="w-full rounded-2xl border shadow-xl transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* ===== Thank You Section ===== */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-14 text-center animate-fadeIn">

          {/* Badge */}
          <span className="inline-block mb-6 px-5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide">
            AWS COMMUNITY DAY
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Thank You for Coming!
          </h1>

          {/* Message */}
          <p className="mt-6 text-xl text-indigo-700 font-medium">
            {message}
          </p>

          {/* Motivation */}
          <p className="mt-8 text-lg text-gray-700">
            <span className="font-semibold">If Hira Jabeen can do it,</span>
            <br className="hidden md:block" />
            <span className="text-indigo-600 font-bold">
              you can do it too!
            </span>
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="https://www.linkedin.com/company/aws-community-pakistan/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-300"
            >
              Join the AWS Community 🌍
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
