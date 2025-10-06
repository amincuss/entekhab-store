type PriceProgressProps = {
  price: number;
  percentage: number;
  status: boolean;
};

export default function PriceProgress({ price, percentage, status }: PriceProgressProps) {
  return (
    <div className="w-full mt-3">
      <div className="flex gap-1 items-center justify-center">
        <span className={`text-xs font-bold ${status ? "text-secondary" : "text-gray-400"}`}>
          {price}
        </span>
        <span className="text-[8px] text-gray-400">امتیاز</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[8px] w-full text-left text-gray-400">{percentage}%</span>
        <div className="w-full bg-gray-300 h-2 rounded-full">
          <div
            className={`h-2 rounded-full ${status ? "bg-primary" : "bg-gray-500"}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
