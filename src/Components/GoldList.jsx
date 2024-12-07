import React, { useState } from "react";
import GoldListItem from "./GoldListItem";

const people = [
  {
    provider: "Gmail",
    email: "leslie.alexander@example.com",
    subject: "Your Item Has Shipped!",
    body: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
    pinned: false,
  },
  {
    name: "Hotmail",
    email: "michael.foster@example.com",
    subject: "Tracking Information",
    body: "Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.",
    pinned: true,
  },
  {
    name: "Yahoo",
    email: "dries.vincent@example.com",
    subject: "Congratulations!",
    body: "Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    pinned: false,
  },
  {
    name: "Hotmail",
    email: "lindsay.walton@example.com",
    subject: "Formal Offer",
    body: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. ",
    pinned: false,
  },
  {
    name: "Yahoo",
    email: "courtney.henry@example.com",
    subject: "Software Engineer",
    body: "De Finibus Bonorum et Malorum (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique.",
    pinned: true,
  },
  {
    name: "Gmail",
    email: "tom.cook@example.com",
    subject: "Interview Request",
    body: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. ",
    pinned: false,
  },
];

const GoldList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = (email) => {
    setIsExpanded((prev) => (prev === email ? null : email)); // Toggle logic
  };

  return (
    <ul
      role="list"
      className="h-[385px] p-3 border border-slate-200 divide-y divide-slate-200 rounded-lg overflow-y-scroll"
    >
      {people.map((person) => (
        <GoldListItem
          key={person.email}
          item={person}
          isExpanded={isExpanded === person.email}
          onExpand={handleExpand}
        />
      ))}
    </ul>
  );
};

export default GoldList;
