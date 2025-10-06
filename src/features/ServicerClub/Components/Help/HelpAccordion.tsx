"use client";

import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

interface HelpAccordionProps {
  id: string;
  title: string;
  content: string;
}

export default function HelpAccordion({ id, title, content }: HelpAccordionProps) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <Accordion
      key={id}
      expanded={expanded}
      onChange={handleChange}
      className="!rounded-md overflow-hidden mb-2 shadow-sm"
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className="!bg-gray-100">
        <span className="text-sm text-gray-800">{title}</span>
      </AccordionSummary>
      <AccordionDetails className="bg-white">
        <span className="text-gray-600 leading-relaxed text-sm">{content}</span>
      </AccordionDetails>
    </Accordion>
  );
}
