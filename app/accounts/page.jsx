import React from 'react';
import { Camera } from 'lucide-react';

const AccountSettings = () => {
  return (
    <div className="max-w-md mx-auto  bg-gray-100 min-h-screen border rounded-md shadow-sm">
      <div className="border-b px-6 py-4">
        <h2 className="text-2xl font-medium text-gray-900">Account Settings</h2>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="relative ">
            <div className='w-16 h-16 rounded-full z-0 overflow-hidden'>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="w-full h-full object-cover"
            />
            </div>
         
             <div className="absolute z-9 bottom-0 right-0 bg-violet-600 w-6 h-6 rounded-full flex items-center justify-center">
              <Camera className="w-4 h-4 text-white" />
            </div>
            
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Marry Doe</h3>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="mt-6 text-gray-700 text-[16px] leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      <div className="border-t border-dashed h-full" />
    </div>
  );
};

export default AccountSettings;

