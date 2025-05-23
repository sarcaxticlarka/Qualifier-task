import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-12 px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-[24px] font-bold text-[#111827] leading-tight">Signin to your</h1>
        <h2 className="text-[24px] font-bold text-[#111827] leading-tight mb-4">PopX account</h2>
        <p className="text-sm text-[#6B7280] mb-8 leading-5">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm text-[#6B21A8] block mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm placeholder-[#9CA3AF] focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm text-[#6B21A8] block mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm placeholder-[#9CA3AF] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled
            className="w-full bg-[#D1D5DB] hover:bg-[#6B21A8] text-white py-2 rounded-lg text-sm font-medium cursor-not-allowed"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
