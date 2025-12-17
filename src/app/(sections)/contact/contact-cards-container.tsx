"use client";

import { ContactCards } from "./contact-cards";
import { contact } from "./data";

const classes = [
  "bg-chart-3 hover:bg-chart-3/80",
  "bg-chart-4 hover:bg-chart-4/80",
  "bg-chart-2 hover:bg-chart-2/80",
];

export function ContactCardsContainer() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
      {contact.map((item, index) => (
        <ContactCards
          key={item.id}
          item={item}
          classes={classes}
          index={index}
        />
      ))}
    </div>
  );
}
