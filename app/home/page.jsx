"use client";
import Link from 'next/link';
import React from 'react';

export default function PopXWelcome() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Large empty space at top */}
      <div className="flex-1"></div>
      
      {/* Bottom section with content */}
      <div className="px-6 pb-12">
        {/* Welcome text */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Welcome to PopX
          </h1>
          <p className="text-gray-400 text-base">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          {/* Create Account Button */}
          <Link  href="/signup">
          <button className="w-full bg-[#6C25FF] text-white font-semibold py-4 rounded-lg">
            Create Account
          </button>
            </Link>
          
          {/* Login Button */}
         <Link  href="/login">
         <button className="w-full mt-4 bg-[#CEBAFC] text-gray-700 font-semibold py-4 rounded-lg">
            Already Registered? Login
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
}