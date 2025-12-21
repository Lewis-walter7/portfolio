import isFirstCharVowel from '@/context/getFirstChar';
import { useState, useEffect } from 'react';

const words = ["Android Developer", "Web Developer", "Physicist"];


const TypingEffect = () => {

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [identifier, setIdentifier] = useState('an');

  const titleword = `${identifier} ${displayText}`
  useEffect(() => {
    let typingInterval;
    let deletingInterval;

    const typeText = () => {
      const currentWord = words[currentWordIndex];
      let index = 0;
      typingInterval = setInterval(() => {
        if (index <= currentWord.length) {
          setDisplayText(currentWord.substring(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          deletingInterval = setTimeout(deleteText, 100);
        }
      }, 100);
    };

    const deleteText = () => {
      let index = words[currentWordIndex].length;
      deletingInterval = setInterval(() => {
        if (index >= 0) {
          setDisplayText(prevText => prevText.substring(0, index));
          index--;
        } else {
          clearInterval(deletingInterval);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }, 100);
    };

    typeText();

    if (!isFirstCharVowel(displayText)) {
      setIdentifier("a")
    }
    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, [currentWordIndex]);

  return (
    <span className='font-bold'>{titleword}</span>
  );
};

export default TypingEffect;
