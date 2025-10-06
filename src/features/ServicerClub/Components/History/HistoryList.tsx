import { ScoreItem } from "../../type";
import HistoryItem from "./HistoryItem";

interface HistoryListProps {
  scores: ScoreItem[];
}

export default function HistoryList({ scores }: HistoryListProps) {
  return (
    <div className="overflow-auto flex-1">
      {scores.map((item, index) => (
        <HistoryItem key={index} item={item} />
      ))}
    </div>
  );
}
