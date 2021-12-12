import { h, Component } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { gsap } from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Text = ({ transition }) => {
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  let colorRandom = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
  ];
  let txtRandom = [
    "Greg Tate",
    "Scott Peterson",
    "AWS outage",
    "Real Madrid",
    "Celtics",
    "Sanna Marin",
  ];

  let background = useRef(null);
  let name = useRef(null);
  let cursor = useRef(null);

  const tl = gsap.timeline({
    delay: Math.random() * (1 - 0.5) + 0.5,
    repeat: -1,
    repeatDelay: Math.random() * (2 - 1) + 1,
    yoyo: true,
  });

  useEffect(() => {
    setBgColor(colorRandom[Math.floor(Math.random() * colorRandom.length)]);
    setColor(colorRandom[Math.floor(Math.random() * colorRandom.length)]);
    switch (transition) {
      case 1:
        tl.from(background, { xPercent: 150 }).to(name, {
          duration: 1,
          text: {
            value: txtRandom[Math.floor(Math.random() * txtRandom.length)],
          },
          ease: "none",
        });
        break;
      case 2:
        tl.from(background, { yPercent: 150 }).to(name, {
          duration: 1,
          text: {
            value: txtRandom[Math.floor(Math.random() * txtRandom.length)],
          },
          ease: "none",
        });
    }

    const blink = gsap
      .timeline({ repeat: -1, repeatDelay: 0.11 })
      .to(cursor, { duration: 0.32, autoAlpha: 0 });
  }, []);

  return (
    <div class={`w-full h-full ${bgColor}`}>
      <div
        class={`w-full h-full p-11 sm:p-1 flex items-center ${color}`}
        ref={(el) => (background = el)}
      >
        <h1
          class="text-4xl sm:text-sm text-white font-medium text-center"
          ref={(el) => (name = el)}
        ></h1>
        <div class="w-1 h-10 bg-white" ref={(el) => (cursor = el)}></div>
      </div>
    </div>
  );
};

export default Text;
