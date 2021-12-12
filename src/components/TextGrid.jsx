import { h, Component } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { num, numOfColumn, numOfRow } from "../store/grid";
import Text from "./Text";

const TextGrid = () => {
  const items = useStore(num);
  const columns = useStore(numOfColumn);
  const rows = useStore(numOfRow);

  return (
    <div
      class={`relative h-screen grid grid-cols-${columns} grid-rows-${rows}`}
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
