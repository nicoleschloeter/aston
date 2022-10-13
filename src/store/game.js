import create from 'zustand';
import { persist } from 'zustand/middleware';

const redQuestions = {
    0: {
        title: 'Smell - Question',
        options: ['lavender', 'apple', 'onion'],
        answer: -1,
        correct: 'lavender',
    },
    1: {
        title: 'Smell - Question',
        options: ['grass', 'cheese', 'vinegar'],
        answer: -1,
        correct: 'cheese',
    },
};
const blueQuestions = {
    0: {
        title: 'Smell - Question',
        options: ['lavender', 'apple', 'onion'],
        answer: -1,
        correct: 'onion',
    },
    1: {
        title: 'Smell - Question',
        options: ['grass', 'cheese', 'vinegar'],
        answer: -1,
        correct: 'grass',
    },
};

export const useGameStore = create(
    persist(
        (set, get) => ({
            currentIndex: 0,
            red: redQuestions,
            blue: blueQuestions,
            getQuestions: (team, index) => {
                const item = {...get()[team][index] };
                if (item) {
                    return item;
                }
                return {...get()[team][0] };
            },
            setAnswer: (team, index, value) => {
                const newObject = {...get()[team] };
                newObject[index] = {...newObject[index], answer: value };
                console.log('save', newObject, team, index, value);
                set({
                    [team]: newObject,
                });
            },
        }), {
            name: 'astons-game', // name of item in the storage (must be unique)
            getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
        }
    )
);