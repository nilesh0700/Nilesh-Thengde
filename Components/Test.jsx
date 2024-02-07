import React, { useEffect, useState } from 'react';
import '../Style/Test.css'; // Import CSS file for animations

const FADE_INTERVAL_MS = 1750;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const WORDS_TO_ANIMATE = ['Hello', 'Ciao', 'Jambo', 'Bonjour', 'Salut', 'Hola', 'Nǐ hǎo', 'Hallo', 'Hej', '👋🏻'];

export const AnimatedText = () => {
  const [wordOrder, setWordOrder] = useState(0);
  const [currentWord, setCurrentWord] = useState(WORDS_TO_ANIMATE[0]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(prevWordOrder => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length);
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setCurrentWord(WORDS_TO_ANIMATE[wordOrder]);
    }, FADE_INTERVAL_MS);

    return () => clearTimeout(fadeTimeout);
  }, [wordOrder]);

  return (
    <h2 className="animated-text-container">
      <span className="animated-text-out">{currentWord}</span>
      <span className="animated-text-in">{WORDS_TO_ANIMATE[(wordOrder + 1) % WORDS_TO_ANIMATE.length]}</span>
    </h2>
  );
};
