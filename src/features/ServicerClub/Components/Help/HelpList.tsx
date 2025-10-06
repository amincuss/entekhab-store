import helpData from "../../store/help.json";
import HelpAccordion from "./HelpAccordion";

export default function HelpList() {
  return (
    <div className="overflow-auto p-3 h-full">
      {helpData.map((item, index) => (
        <HelpAccordion
          key={index}
          id={`panel${index}`}
          title={item.sectionTitle}
          content={item.content}
        />
      ))}
    </div>
  );
}
