import { h, Component } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import {
  firstRow,
  firstColumn,
  secondColumn,
  thirdColumn,
  fourthColumn,
  fifthColumn,
} from "../functions/gridHighLight";
const Picker = () => {
  let picker = useRef(null);
  let pickerHighlight = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      firstRow(pickerHighlight);
      firstColumn(pickerHighlight);
      secondColumn(pickerHighlight);
      thirdColumn(pickerHighlight);
      fourthColumn(pickerHighlight);
      fifthColumn(pickerHighlight);
      pickerHighlight.addEventListener("mouseleave", () => setVisible(false));
    } else {
      picker.addEventListener("mouseenter", () => setVisible(true));
    }
  }, [visible]);
  return (
    <div class="absolute p-4 z-10 ">
      {visible ? (
        <ul
          class="grid grid-cols-5 grid-rows-5 gap-1"
          ref={(el) => (pickerHighlight = el)}
        >
          {[...Array(25)].map((e, i) => (
            <li class="bg-white opacity-50 hover:opacity-100 text-center cursor-pointer text-white h-6 w-6">
              {i}
            </li>
          ))}
        </ul>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="w-7 h-7 text-white"
          viewBox="0 0 16 16"
          ref={(el) => (picker = el)}
        >
          <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
        </svg>
      )}
    </div>
  );
};

export default Picker;
