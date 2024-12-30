import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import SplitType from 'split-type';
import { ReactLenis } from '@studio-freight/react-lenis';

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const middle = useRef();
  const textRef = useRef();

  useGSAP(
    () => {
      const splitText = new SplitType(textRef.current, { types: 'words' });

      gsap.to(splitText.words, {
        color: '#fff',
        stagger: 0.5,
        scrollTrigger: {
          trigger: splitText.words,
          markers: true,
          start: 'top 50%',
          scrub: true,
        },
      });
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          pin: true,
          start: 'bottom 82%',
          markers: true,
        },
      });
    },
    { scope: middle }
  );
  return (
    <ReactLenis root>
      <div id="myTrigger">
        <section className="blue">
          <h1>Scroll to see the effect</h1>
        </section>
        <div className="middle" ref={middle}>
          <p className="para" ref={textRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            debitis obcaecati dolor ipsum maxime, vel quis incidunt! Eius
            quisquam, ab eos provident laboriosam id. Accusamus quisquam ad
            soluta impedit maxime!
          </p>
        </div>
        <section className="green"></section>
      </div>
    </ReactLenis>
  );
};

export default App;
