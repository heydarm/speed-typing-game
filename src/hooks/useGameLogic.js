import {useState, useEffect, useRef} from 'react';

function useGameLogic(startingTime = 10) {
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isStarted, setIsStarted] = useState(false);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [startTime, setStartTime] = useState(startingTime);

  const textAreaRef = useRef(null);

  useEffect(() => {
    if (timeRemaining > 0 && isStarted) {
      setTimeout(() => {setTimeRemaining(prev => prev - 1)}, 1000);
    } else {
      stopGame();
    }
  }, [timeRemaining, isStarted])

  function startGame() {
    setTimeRemaining(startTime);
    setIsStarted(true);
    setText("");
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  }

  function stopGame() {
    setIsStarted(false);
    setWordCount(countWords(text));
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function countWords(text) {
    return text
            .trim()
            .replace(/[ ,.]+/g, " ")
            .split(" ")
            .filter(item => item !== "")
            .length
  }

  return (
    {
      textAreaRef,
      handleChange,
      text,
      isStarted,
      timeRemaining,
      setTimeRemaining,
      startGame,
      stopGame,
      wordCount,
      setStartTime
    }
  )
}

export default useGameLogic;