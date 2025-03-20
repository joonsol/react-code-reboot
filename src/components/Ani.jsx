import React,{useRef,useState} from 'react'
import { gsap } from 'gsap'
import './Ani.scss'

const Ani = () => {
    const boxRef = useRef(null); // 애니메이션 대상 요소 참조
    const [moved, setMoved] = useState(false);
    const animateBox = () => {
        if (!moved) {
            gsap.to(boxRef.current, {
              x: 200,
              backgroundColor: '#4dabf7',
              duration: 1,
              ease: 'power2.out',
            });
          } else {
            gsap.to(boxRef.current, {
              x: 0,
              backgroundColor: '#74c0fc',
              duration: 1,
              ease: 'power2.inOut',
            });
          }
          setMoved(!moved); // 상태 토글
    };
  return (
    <div className="gsap-container">
      <div className="box" ref={boxRef}></div>
      <button onClick={animateBox}>애니메이션 실행</button>
      </div>
  )
}

export default Ani