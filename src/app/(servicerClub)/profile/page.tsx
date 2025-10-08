import MenuAccount from "@/features/ServicerClub/Components/Profile/MenuAccount";
import MyOrdersWidget from "@/features/ServicerClub/Components/Profile/MyOrdersWidget";
import Profile from "@/features/ServicerClub/Components/Profile/Profile";

function ProfilePage() {
  return (
    <div className="flex flex-col flex-1 gap-3 h-full bg-gray-100 rounded-t-lg overflow-hidden">
      <Profile />
      <MyOrdersWidget />
      <MenuAccount />
    </div>
  );
}

export default ProfilePage;
