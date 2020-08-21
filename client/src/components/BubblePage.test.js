import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const colorData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  }
]; 


test("Fetches data and renders the bubbles", async() => {
  // Finish this test
  const { rerender } = render(<BubblePage colors={[]}/>) 

  let colorsArr = screen.queryAllByTestId(/colors/i);
  expect(colorsArr).toHaveLength(0);

  rerender(<BubblePage colors={colorData}/>); 

  colorsArr = screen.queryAllByTestId(/colors/i);
  expect(colorsArr).toHaveLength(3);
});
