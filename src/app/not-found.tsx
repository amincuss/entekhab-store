
import { Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
 return (
  <div className="flex flex-col items-center justify-center h-screen text-center px-4">
   <h1 className="text-6xl font-bold mb-4 text-">404</h1>
   <p className="text-lg mb-6">صفحه‌ای که دنبال آن بودید پیدا نشد!</p>
   <Link href="/store" passHref>
    <Button size="large" variant="contained" color="primary">
     بازگشت به صفحه کاربر
    </Button>
   </Link>
  </div>
 );
}
