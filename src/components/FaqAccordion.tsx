"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({
  items,
  defaultValue,
  className,
}: {
  items: FaqItem[];
  defaultValue?: string;
  className?: string;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultValue}
      className={className}
    >
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left font-semibold">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
