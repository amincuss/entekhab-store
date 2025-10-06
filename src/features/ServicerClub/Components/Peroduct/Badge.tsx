type BadgeProps = {
  mainPage: boolean;
  status: boolean;
};

export default function Badge({ mainPage, status }: BadgeProps) {
  if (mainPage && status) {
    return (
      <div className="z-10 border border-dashed border-green-300/60 bg-green-400/10 text-green-800 text-[10px] px-2 py-1 rounded-lg">
        جدید
      </div>
    );
  }

  if (!status) {
    return (
      <div className="z-10 border border-dashed border-gray-300/60 bg-gray-400/10 text-gray-800 text-[10px] px-2 py-1 rounded-lg">
        ناموجود
      </div>
    );
  }

  return null;
}
