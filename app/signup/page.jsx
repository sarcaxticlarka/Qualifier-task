"use client"
import Link from "next/link";
import { useState } from "react";

export default function PopXSignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    company: "",
    isAgency: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, isAgency: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col  pt-16">
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Create your</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">PopX account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-purple-700 font-medium mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none"
              placeholder="Marry Doe"
              required
            />
          </div>
          <div>
            <label className="block text-purple-700 font-medium mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none"
              placeholder="Marry Doe"
              required
            />
          </div>
          <div>
            <label className="block text-purple-700 font-medium mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none"
              placeholder="Marry Doe"
              required
            />
          </div>
          <div>
            <label className="block text-purple-700 font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none"
              placeholder="Marry Doe"
              required
            />
          </div>
          <div>
            <label className="block text-purple-700 font-medium mb-1">
              Company name
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none"
              placeholder="Marry Doe"
            />
          </div>
          <div>
            <label className="block text-gray-900 font-medium mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-6 items-center">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="Yes"
                  checked={formData.isAgency === "Yes"}
                  onChange={handleRadioChange}
                  className="accent-purple-600"
                  required
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="No"
                  checked={formData.isAgency === "No"}
                  onChange={handleRadioChange}
                  className="accent-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>
         <Link href="/accounts">   
         <button
            type="submit"
            className="w-full mt-5 bg-purple-600 text-white text-lg py-3 rounded-md font-semibold hover:bg-purple-700"
          >
            Create Account
          </button>
            </Link>
        </form>
      </div>
    </div>
  );
}
