import { h, Component } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { gsap } from "gsap";
import { useStore } from "@nanostores/preact";
import { num, numOfColumn, numOfRow } from "../store/grid";
import Text from "./Text";

const TextGrid = () => {
  const items = useStore(num);
  const columns = useStore(numOfColumn);
  const rows = useStore(numOfRow);
  let gridLayout = useRef(null);

  useEffect(() => {}, [columns, rows, items]);

  return (
    <div
      class={`relative h-screen grid grid-cols-${columns} grid-rows-${rows}`}
      ref={(el) => (gridLayout = el)}
    >
      {[...Array(items)].map((e, i) => (
        <div class="overflow-hidden">
          <Text transition={Math.floor(Math.random() * (3 - 1) + 1)} />
        </div>
      ))}
    </div>
  );
};

export default TextGrid;
