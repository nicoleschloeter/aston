import create from "zustand";
import { persist } from "zustand/middleware";
import almondsImg from "../assets/almonds.jpg";
import appleImg from "../assets/apple.jpg";
import cheeriosImg from "../assets/cheerios.jpg";
import cheeseImg from "../assets/cheese.jpg";
import chocolateImg from "../assets/chocolate.jpg";
import cressImg from "../assets/cress.jpg";
import lavenderImg from "../assets/lavender.jpg";
import leavesImg from "../assets/leaves.jpg";
import lemonImg from "../assets/lemon.jpg";
import mintImg from "../assets/mint.jpg";
import oatsImg from "../assets/oats.jpg";
import onionImg from "../assets/onion.jpg";
import orangeImg from "../assets/orange.jpg";
import pearImg from "../assets/pear.jpg";
import rosemaryImg from "../assets/rosemary.jpg";
import sausageImg from "../assets/sausage.jpg";
import strawberryImg from "../assets/strawberry.jpg";
import hariboImg from "../assets/sweetharibo.jpg";
import heartImg from "../assets/sweetheart.jpg";
import lacesImg from "../assets/sweetlaces.jpg";
import thymeImg from "../assets/thyme.jpg";
import tomatoImg from "../assets/tomato.jpg";
import wheatabixImg from "../assets/wheatabix.jpg";

export const DEFAULT_ANSWER = "not-answered";
const cheerios = {
  name: "Cheerios",
  src: cheeriosImg,
};
const sausage = {
  name: "Sausage",
  src: sausageImg,
};
const almonds = {
  name: "Almonds",
  src: almondsImg,
};
const chocolate = {
  name: "Chocolate",
  src: chocolateImg,
};
const cheese = {
  name: "Cheese",
  src: cheeseImg,
};
const wheatabix = {
  name: "Wheatabix",
  src: wheatabixImg,
};
const oats = {
  name: "Oats",
  src: oatsImg,
};
const laces = {
  name: "Strawberry laces",
  src: lacesImg,
};
const haribo = {
  name: "Haribo hearts",
  src: hariboImg,
};
const love = {
  name: "Love hearts",
  src: heartImg,
};
const rosemary = {
  name: "Rosemary",
  src: rosemaryImg,
};
const mint = {
  name: "Mint",
  src: mintImg,
};
const thyme = {
  name: "Thyme",
  src: thymeImg,
};
const cress = {
  name: "Cress",
  src: cressImg,
};
const lavender = {
  name: "Lavendar",
  src: lavenderImg,
};
const apple = {
  name: "Apple",
  src: appleImg,
};
const lemon = {
  name: "Lemon",
  src: lemonImg,
};
const pear = {
  name: "Pear",
  src: pearImg,
};
const leaves = {
  name: "Leaves",
  src: leavesImg,
};
const strawberry = {
  name: "Strawberry",
  src: strawberryImg,
};
const orange = {
  name: "Orange",
  src: orangeImg,
};
const onion = {
  name: "Onion",
  src: onionImg,
};
const tomato = {
  name: "Tomato",
  src: tomatoImg,
};

const redQuestions = {
  0: {
    title: "Question",
    options: [orange, onion, lemon, cheese],
    answer: DEFAULT_ANSWER,
    correct: orange.name,
  },
  1: {
    title: "Question",
    options: [tomato, strawberry, apple],
    answer: DEFAULT_ANSWER,
    correct: apple.name,
  },
  2: {
    title: "Question",
    options: [rosemary, mint, thyme, cress],
    answer: DEFAULT_ANSWER,
    correct: mint.name,
  },
  3: {
    title: "Question",
    options: [sausage, almonds, chocolate],
    answer: DEFAULT_ANSWER,
    correct: chocolate.name,
  },
  4: {
    title: "Question",
    options: [laces, haribo, love],
    answer: DEFAULT_ANSWER,
    correct: love.name,
  },
  5: {
    title: "Question",
    options: [oats, wheatabix, cheerios],
    answer: DEFAULT_ANSWER,
    correct: oats.name,
  },
};
const blueQuestions = {
  0: {
    title: "Question",
    options: [pear, lavender, leaves],
    answer: DEFAULT_ANSWER,
    correct: lavender.name,
  },
  1: {
    title: "Question",
    options: [sausage, almonds, chocolate],
    answer: DEFAULT_ANSWER,
    correct: chocolate.name,
  },
  2: {
    title: "Question",
    options: [laces, haribo, love],
    answer: DEFAULT_ANSWER,
    correct: love.name,
  },
  3: {
    title: "Question",
    options: [oats, wheatabix, cheerios],
    answer: DEFAULT_ANSWER,
    correct: oats.name,
  },
};

// define the initial state
const initialState = {
  currentIndex: 0,
  lives: {
    red: 3,
    blue: 3,
  },
  done: {
    red: "",
    blue: "",
  },
  extra: {
    red: 0,
    blue: 0,
  },
  total: {
    red: 0,
    blue: 0,
  },
  red: redQuestions,
  blue: blueQuestions,
};

export const useGameStore = create(
  persist(
    (set, get) => ({
      ...initialState,
      updateHeader: () => {
        const el = document.getElementById("root").querySelector(".App");
        if (el) {
          const list = el.classList;
          list.remove(window.location.pathname !== "/" ? "home" : "game");
          list.add(window.location.pathname !== "/" ? "game" : "home");
          el.className = list.value;
        }
      },
      useLive: (team) => {
        const current = get().lives[team] - 1;
        set({
          lives: { ...get().lives, [team]: current },
        });
      },
      addExtra: (team, minus) => {
        const add = get().extra[team];
        const total = get().total[team];
        if (minus) {
          set({
            extra: { ...get().extra, [team]: add - 1 },
            total: { ...get().total, [team]: total - 1 },
          });
        } else {
          set({
            extra: { ...get().extra, [team]: add + 1 },
            total: { ...get().total, [team]: total + 1 },
          });
        }
      },
      getQuestions: (team, index) => {
        const item = { ...get()[team][index] };
        if (item) {
          return item;
        }
        return { ...get()[team][0] };
      },
      getNextQuestion: (team) => {
        const questions = get()[team];
        let count = 0;
        let total = 0;
        Object.entries(questions).forEach(([item]) => {
          total++;
          if (questions[item].answer !== DEFAULT_ANSWER) {
            count++;
          }
        });
        if (count === total) {
          return `/${team}/end`;
        }
        if (!questions[count]) {
          count = 0;
        }
        return `/${team}/${count}`;
      },
      setScore: (team) => {
        console.log("setScore", team);
        let count = 0;
        Object.entries(get()[team]).forEach(([item]) => {
          if (item.answer === item.correct) {
            count++;
          }
        });
        const lives = get().lives[team];
        const done = `${count} + ${lives} ♥ = ${count + lives}`;
        set({
          done: { ...get().done, [team]: done },
          total: { ...get().total, [team]: count + lives },
        });
      },
      setAnswer: (team, index, itemName) => {
        const newObject = { ...get()[team] };
        newObject[index] = { ...newObject[index], answer: itemName };
        set({
          [team]: newObject,
        });
      },
      reset: () => {
        set(initialState);
      },
      next: (team, page, navigate) => {
        const list = get()[team];
        if (list[page]) {
          navigate(`/${team}/${page}`);
        } else {
          navigate(`/${team}/end`);
        }
      },
    }),
    {
      name: "astons-game", // name of item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
