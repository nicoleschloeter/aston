import create from 'zustand';
import { persist } from 'zustand/middleware';
import appleImg from '../assets/apple.jpg';
import lemonImg from '../assets/lemon.jpg';
import orangeImg from '../assets/orange.jpg';
import leavesImg from '../assets/leaves.jpg';
import onionImg from '../assets/onion.jpg';
import pearImg from '../assets/pear.jpg';
import strawberryImg from '../assets/strawberry.jpg';
import tomatoImg from '../assets/tomato.jpg';
import lavenderImg from '../assets/lavender.jpg';
import cressImg from '../assets/cress.jpg';
import thymeImg from '../assets/thyme.jpg';
import mintImg from '../assets/mint.jpg';
import rosemaryImg from '../assets/rosemary.jpg';

export const DEFAULT_ANSWER = 'not-answered';
const rosemary = {
    name: 'Rosemary',
    src: rosemaryImg,
};
const mint = {
    name: 'Mint',
    src: mintImg,
};
const thyme = {
    name: 'Thyme',
    src: thymeImg,
};
const cress = {
    name: 'Cress',
    src: cressImg,
};
const lavender = {
    name: 'Lavendar',
    src: lavenderImg,
};
const apple = {
    name: 'Apple',
    src: appleImg,
};
const lemon = {
    name: 'Lemon',
    src: lemonImg,
};
const pear = {
    name: 'Pear',
    src: pearImg,
};
const leaves = {
    name: 'Leaves',
    src: leavesImg,
};
const strawberry = {
    name: 'Strawberry',
    src: strawberryImg,
};
const orange = {
    name: 'Orange',
    src: orangeImg,
};
const onion = {
    name: 'Onion',
    src: onionImg,
};
const tomato = {
    name: 'Tomato',
    src: tomatoImg,
};

const redQuestions = {
    0: {
        title: 'Question',
        options: [orange, onion, lemon],
        answer: DEFAULT_ANSWER,
        correct: orange.name,
    },
    1: {
        title: 'Question',
        options: [tomato, strawberry, apple],
        answer: DEFAULT_ANSWER,
        correct: apple.name,
    },
    2: {
        title: 'Question',
        options: [rosemary, mint, thyme, cress],
        answer: DEFAULT_ANSWER,
        correct: mint.name,
    },
};
const blueQuestions = {
    0: {
        title: 'Question',
        options: [pear, lavender, leaves],
        answer: DEFAULT_ANSWER,
        correct: lavender.name,
    },
    1: {
        title: 'Question',
        options: [tomato, apple, strawberry],
        answer: DEFAULT_ANSWER,
        correct: tomato.name,
    },
    2: {
        title: 'Question',
        options: [mint, thyme, cress, rosemary],
        answer: DEFAULT_ANSWER,
        correct: mint.name,
    },
};

// define the initial state
const initialState = {
    currentIndex: 0,
    red: redQuestions,
    blue: blueQuestions,
};

export const useGameStore = create(
    persist(
        (set, get) => ({
            ...initialState,
            updateHeader: () => {
                const el = document.getElementById('root').querySelector('.App');
                if (el) {
                    const list = el.classList;
                    list.remove(window.location.pathname !== '/' ? 'home' : 'game');
                    list.add(window.location.pathname !== '/' ? 'game' : 'home');
                    el.className = list.value;
                }
            },
            getQuestions: (team, index) => {
                const item = {...get()[team][index] };
                if (item) {
                    return item;
                }
                return {...get()[team][0] };
            },
            setAnswer: (team, index, itemName) => {
                console.log('save', itemName);

                const newObject = {...get()[team] };
                newObject[index] = {...newObject[index], answer: itemName };
                console.log('save', newObject, team, index);
                set({
                    [team]: newObject,
                });
            },
            reset: () => {
                set(initialState);
            },
        }), {
            name: 'astons-game', // name of item in the storage (must be unique)
            getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
        }
    )
);