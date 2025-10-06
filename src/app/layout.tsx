import ForceBackToStore from "@/components/BackRedirect";
import Empty from "@/components/Empty";
import BottomNav from "@/features/ServicerClub/Components/BottomNav";
import NoAccess from "@/features/ServicerClub/Components/NoAccess";
import AppProviders from "@/providers/AppProviders";
import { Metadata } from "next";
import { cookies, headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "ServicerClub",
  description: "فروشگاه دسیار کارشناسان انتخاب سرویس",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const callerId = headerList.get("Caller-Id");
  const password = headerList.get("Password");

  const cookieStore = await cookies();
  const agencyCode = cookieStore.get("agencyCode")?.value;

  // مقادیر ENV
  const envCallerId = process.env.NEXT_API_CALLER_ID;
  const envPassword = process.env.NEXT_API_PASSWORD;

  // اعتبارسنجی هدر با ENV
  if (
    !agencyCode ||
    !callerId ||
    !password ||
    callerId !== envCallerId ||
    password !== envPassword
  ) {
    return (
      <html lang="fa" dir="rtl">
        <body className="rtl">
          <AppProviders>
            <NoAccess />
          </AppProviders>
        </body>
      </html>
    );
  }
  const userAgent = headerList.get("user-agent") || "";
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  if (!isMobile) {
    return (
      <html lang="fa" dir="rtl">
        <body className="rtl">
          <AppProviders>
            <div className="w-screen h-screen flex justify-center items-center">
              <Empty message="این صفحه فقط از اپلیکیشن دستیار کارشناسان انتخاب سرویس در دسترس است" />
            </div>
          </AppProviders>
        </body>
      </html>
    );
  }
  return (
    <html lang="fa" dir="rtl">
      <body className="rtl">
        <AppProviders>
          <div className="h-screen w-full flex flex-col maineLayout">
            <div className="flex-1 overflow-auto">
              <ForceBackToStore/>
              {children}</div>
            <BottomNav agencyCode={agencyCode} />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
