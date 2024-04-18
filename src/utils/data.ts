import { nanoid } from "nanoid";
import { Book } from "./types";

export const BOOKS: Book[] = [
  {
    id: nanoid(),
    title: "neverwhere",
    price: "24.99",
    category: "urban fantasy",
    description:
      "Under the streets of London there's a world most people could never even dream of. A city of monsters and saints, murderers and angels, knights in armour and pale girls in black velvet. Strange destinies lie in wait in London below - a world that seems eerily familiar.",
  },
  {
    id: nanoid(),
    title: "a man called ove",
    price: "19.99",
    category: "humourous fiction",
    description:
      "Meet Ove. He's a curmudgeon, the kind of man who points at people he dislikes as if they were burglars caught outside his bedroom window. He has staunch principles, strict routines, and a short fuse. People call him the bitter neighbor from hell, but must Ove be bitter just because he doesn't walk around with a smile plastered to his face all the time?",
  },
  {
    id: nanoid(),
    title: "the hitchhiker's guide to the galaxy",
    price: "17.99",
    category: "science fiction",
    description:
      "Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy.",
  },
  {
    id: nanoid(),
    title: "american gods",
    price: "33.50",
    category: "fantasy",
    description:
      "Days before his release from prison, Shadow's wife, Laura, dies in a mysterious car crash. Numbly, he makes his way back home. On the plane, he encounters the enigmatic Mr Wednesday, who claims to be a refugee from a distant war, a former god and the king of America.",
  },
  {
    id: nanoid(),
    title: "harry potter and the prisoner of azkaban",
    price: "14.00",
    category: "fantasy",
    description:
      "Harry Potter, along with his best friends, Ron and Hermione, is about to start his third year at Hogwarts School of Witchcraft and Wizardry. Harry can't wait to get back to school after the summer holidays. But when Harry gets to Hogwarts, the atmosphere is tense.",
  },
];
