import React, { useState, useEffect } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import { Grid, Heading } from "@chakra-ui/react";

function App() {
  const [inputLeft, setInputLeft] = useState("");
  const [inputRight, setInputRight] = useState("");
  const [valueLeft, setValueLeft] = useState("");
  const [valueRight, setValueRight] = useState("");

  useEffect(() => {
    check_diff(inputLeft, inputRight);
    setValueLeft(inputLeft);
    setValueRight(inputRight);
  }, [inputLeft, inputRight]);

  const check_diff = (inL: String, inR: String) => {
    const charLeft = inL.split("");
    const charsRight = inR.split("");
  };

  return (
    <>
      <Heading textAlign="center">文字列差分チェッカー</Heading>
      <Grid className="App" templateColumns="repeat(2, 1fr)">
        <InputBox returnInput={setInputLeft} displayValue={valueLeft} />
        <InputBox returnInput={setInputRight} displayValue={valueRight} />
      </Grid>
    </>
  );
}

export default App;
