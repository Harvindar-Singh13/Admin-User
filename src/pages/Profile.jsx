import React from "react";
import { Mail, Phone } from "lucide-react";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* left column*/}
      <div className="col-span-1 bg-white border border-gray-200 shadow-sm rounded-xl p-6 flex flex-col items-center justyfy-center gap-4">
        {/* logo */}
        <div className="w-20 h-20 bg-[#FF5C23] text-white font-medium flex items-center justify-center text-3xl border-2 brder-gray-400 rounded-full">
          AU
        </div>

        <div className="text-center border-b border-gray-200 w-full pb-4 mb-4">
          <p className="text-xl font-light text-[#FF5C23]">Admin User</p>
          <p className="text-sm font-light text-gray-900 mb-2">Super Admin</p>
          <p className="text-xs font-light text-gray-900">Joined 2026-01-01</p>
        </div>

        {/* email andf phone */}
        <div className="space-y-2">
          <div className="flex items-cente gap-2">
            <Mail size={14} />
            <span className="text-sm text-gray-900 font-light">
              admin@gmail.com
            </span>
          </div>
          <div className="flex items-cente gap-2">
            <Phone size={14} />
            <span className="text-sm text-gray-900 font-light">
              +91 81272 43013
            </span>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="col-span-2 space-y-6 ">
        {/* About */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
          <p className="text-sm text-[#FF5C23] font-light mb-4 uppercase">
            About
          </p>
          <p className="text-sm text-gray-900 font-light max-w-xl">
            Full-stack developer fresher. Passionate about building beautiful,
            scalable products.
          </p>
        </div>

        {/* Details */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
          <p className="text-sm text-[#FF5C23] font-light mb-4 uppercase">
            Details
          </p>

          <div className="text-sm text-gray-900 font-light flex items-center gap-8 mb-2">
            <span>Location</span>
            <span>Delhi, India</span>
          </div>

          <div className="text-sm text-gray-900 font-light flex items-center gap-8 mb-2">
            <span>Website</span>
            <span>https://adminhub.com</span>
          </div>

          <div className="text-sm text-gray-900 font-light flex items-center gap-8 mb-2">
            <span>Email</span>
            <span>admin@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
