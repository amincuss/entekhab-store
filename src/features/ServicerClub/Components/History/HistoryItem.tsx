import Image from "next/image";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { ScoreItem } from "../../type";
dayjs.extend(jalaliday);

interface HistoryItemProps {
  item: ScoreItem;
}

export default function HistoryItem({ item }: HistoryItemProps) {
  const persianDate = dayjs(item.TransactionDate)
    .calendar("jalali")
    .locale("fa")
    .format("dddd DD MMMM YYYY");

  return (
    <div className=" rounded-md border-1 border-dashed border-gray-200 mb-2 px-3">
      <header className="py-3 border-b border-dotted border-gray-100 font-medium text-gray-500 text-[10px] flex justify-between">
        <span>{persianDate}</span>
        <div className="flex items-center gap-1 text-xs text-primary font-bold">
          <Image alt="score" src="/images/gold.png" width={15} height={15} />
          <div
            className={`flex text-center ${
              item.ScoreType === 1 ? "text-green-700" : "text-red-700"
            }`}
          >
            {item.Count}
            {item.ScoreType === 1 ? <span>+</span> : <span>-</span>}
            <span className="pr-0.5">سکه</span>
          </div>
        </div>
      </header>
      {item.Description !== "" && (
        <main>
          <span className="text-gray-700 leading-relaxed text-xs py-2 block">
            {item.Description}
          </span>
        </main>
      )}

      <footer className="py-3 border-t border-dotted border-gray-100 font-medium text-black text-xs flex items-center justify-between">
        {item.ScoreSource}
      </footer>
    </div>
  );
}
