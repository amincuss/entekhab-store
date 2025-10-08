import ProfileHeader from "@/features/ServicerClub/Components/Profile/ProfileBreadcrumbs";
import React from "react";

function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex flex-col bg-primary">
      <div className="px-3 py-2 flex justify-between items-center text-white">
        <ProfileHeader />
      </div>

      <div className="flex-1 bg-gray-100 rounded-t-lg overflow-hidden mt-2">
        {children}
      </div>
    </div>
  );
}
export default ProfileLayout;
