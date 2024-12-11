import React, { useState } from "react";
import GoldListItem from "./GoldListItem";
import gmailIcon from "../assets/gmail.png";
import outlookIcon from "../assets/outlook.png";
import yahooIcon from "../assets/yahoo.png";
import { LuGhost } from "react-icons/lu";

const people = [
  {
    provider: "Gmail",
    icon: gmailIcon,
    received: "Aug 28 2021",
    match: "Match: Email",
    email: "leslie.alexanderpopevegjhbhjhgvgh@example.com",
    subject: "Your Item Has Shipped!",
    body: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
    pinned: false,
  },
  {
    provider: "Outlook",
    icon: outlookIcon,
    received: "Jul 31 2020",
    match: "Match: Email, Keyword(s), Domain",
    email: "michael.foster@example.com",
    subject: "Tracking Information",
    body: "Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.",
    pinned: true,
  },
  {
    provider: "Yahoo",
    icon: yahooIcon,
    received: "Feb 19 2024",
    match: "Match: Keyword(s)",
    email: "dries.vincent@example.com",
    subject: "Congratulations!",
    body: "Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    pinned: false,
  },
  {
    provider: "Outlook",
    icon: outlookIcon,
    received: "Oct 5 2023",
    match: "Match: Domain",
    email: "lindsay.walton@example.com",
    subject: "Formal Offer",
    body: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. ",
    pinned: false,
  },
  {
    provider: "Yahoo",
    icon: yahooIcon,
    received: "Jun 2 2013",
    match: "Match: Keyword(s)",
    email: "courtney.henry@example.com",
    subject: "Software Engineer",
    body: "De Finibus Bonorum et Malorum (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique.",
    pinned: true,
  },
  {
    provider: "Gmail",
    icon: gmailIcon,
    received: "Mar 21 2015",
    match: "Match: Domain",
    email: "julia.spencer@example.com",
    subject: "Software Developer",
    body: "De Finibus Bonorum et Malorum (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique.",
    pinned: true,
  },
  {
    provider: "Outlook",
    icon: outlookIcon,
    received: "Nov 1 2025",
    match: "Match: Keyword(s)",
    email: "lenny.falcone@example.com",
    subject: "Software Engineer Manager",
    body: "De Finibus Bonorum et Malorum (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique.",
    pinned: true,
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
      className="border border-slate-300 p-1 h-[350px] max-h-[350px] rounded-lg overflow-y-scroll"
    >
      {people.length > 0 ? (
        people.map((person) => (
          <div className={`px-3 py-1.5`}>
            <GoldListItem
              key={person.email}
              item={person}
              isExpanded={isExpanded === person.email}
              onExpand={handleExpand}
            />
          </div>
        ))
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-gray-500">
          <LuGhost size={30} />
          <p className="font-medum text-base">No emails found</p>
        </div>
      )}
    </ul>
  );
};

export default GoldList;
