import { redirect } from "next/navigation";

export default function Page() {
  // ریدایرکت به صفحه فروشگاه
  redirect("/store");
 return <p>Redirecting...</p>;
}
