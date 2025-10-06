import Link from "next/link";
import { ReactNode } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { headers } from "next/headers";

interface PageHeaderProps {
  title: string;
  backUrl?: string;
  backIcon?: ReactNode; // در صورت نیاز آیکون سفارشی بدیم
}

const PageHeader = async ({ title,backIcon = <IoIosArrowRoundForward size={25} className="text-secondary font-bold" />,}: PageHeaderProps) => {
  
    const headersList = await headers(); 
    const referer = headersList.get("referer"); 

  return (
    <header className="w-full flex justify-start items-center text-lg pb-3 px-3 font-semibold">
      {referer && (
        <Link href={referer} className="ml-2 text-2xl">
          {backIcon}
        </Link>
      )}
      <span>{title}</span>
    </header>
  );
}
export default PageHeader