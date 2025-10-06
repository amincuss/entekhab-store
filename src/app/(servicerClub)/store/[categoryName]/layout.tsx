import CustomBreadcrumbs from "@/features/ServicerClub/Components/Breadcrumbs";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="px-2 py-3">
        <CustomBreadcrumbs />
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
