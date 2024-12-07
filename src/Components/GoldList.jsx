import React, { useState } from "react";
import GoldListItem from "./GoldListItem";

const people = [
  {
    provider: "Gmail",
    match: "Match: Email",
    email: "leslie.alexanderpopevegetashortsmarcos@example.com",
    subject: "Your Item Has Shipped!",
    body: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
    pinned: false,
  },
  {
    provider: "Hotmail",
    match: "Match: Email, Keyword(s), Domain",
    email: "michael.foster@example.com",
    subject: "Tracking Information",
    body: "Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.",
    pinned: true,
  },
  {
    provider: "Yahoo",
    match: "Keyword(s)",
    email: "dries.vincent@example.com",
    subject: "Congratulations!",
    body: "Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    pinned: false,
  },
  // {
  //   provider: "Hotmail",
  //   match: "Match: Domain",
  //   email: "lindsay.walton@example.com",
  //   subject: "Formal Offer",
  //   body: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. ",
  //   pinned: false,
  // },
  // {
  //   provider: "Yahoo",
  //   match: "Match: Keyword(s)",
  //   email: "courtney.henry@example.com",
  //   subject: "Software Engineer",
  //   body: "De Finibus Bonorum et Malorum (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique.",
  //   pinned: true,
  // },
];

const GoldList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = (email) => {
    setIsExpanded((prev) => (prev === email ? null : email)); // Toggle logic
  };

  return (
    <ul
      role="list"
      className="h-fit max-h-[385px] py-2 rounded-lg overflow-y-scroll"
    >
      {people.map((person) => (
        <div className={`py-1 ${isExpanded ? "px-3" : "px-1"}`}>
          <GoldListItem
            key={person.email}
            item={person}
            isExpanded={isExpanded === person.email}
            onExpand={handleExpand}
          />
        </div>
      ))}
    </ul>
  );
};

export default GoldList;
