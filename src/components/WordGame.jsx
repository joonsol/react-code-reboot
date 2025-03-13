import React, { useState, useRef } from "react";
import "./WordGame.scss"; // 스타일 파일 추가

const WordGame = ({ startWord}) => {
  // 상태 관리
  const [word, setWord] = useState(startWord); // 현재 단어
  const [userInput, setUserInput] = useState(""); // 사용자 입력값
  const [message, setMessage] = useState("끝말잇기 시작!"); // 메시지
  const inputRef = useRef(null); // input 요소 참조

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // 끝말잇기 검사 함수
  const checkWord = () => {
    const trimmedWord = userInput.trim();

    if (!trimmedWord) {
      setMessage("단어를 입력하세요!!");
      return;
    }

    const lastChar = word[word.length - 1]; // 현재 단어의 마지막 글자
    const firstChar = trimmedWord[0]; // 사용자 입력 단어의 첫 글자

    console.log(lastChar, firstChar);

    if (lastChar !== firstChar) {
      setMessage(`"${lastChar}"(으)로 시작하는 단어를 입력하세요~`);
      setUserInput(""); // 입력창 초기화
    } else {
      setMessage("성공~ 다음 단어를 입력하세요!");
      setWord(trimmedWord); // 현재 단어 업데이트
      setUserInput(""); // 입력 초기화
    }

    inputRef.current.focus(); // 입력창에 포커스 유지
  };

  return (
    <div className="game-container">
      <h2>끝말잇기 게임</h2>
      <p className="current-word">{word}</p>
      <input
        type="text"
        ref={inputRef}
        value={userInput}
        onChange={handleChange}
         onKeyUp={(e)=>e.key==='Enter' && checkWord()}
        placeholder="단어 입력..."
      />
      <button onClick={checkWord}>확인</button>
      <p className="message">{message}</p>
    </div>
  );
};

export default WordGame;
