import React, { useState } from "react";
import logo from "../logo.svg";
import { Text, Textarea, ChakraProvider } from "@chakra-ui/react";

type PROPS = {
  displayValue: string;
  returnInput: React.Dispatch<React.SetStateAction<string>>;
};

const InputBox = (props: PROPS) => {
  const { returnInput, displayValue } = props;

  let handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    returnInput(inputValue);
  };
  return (
    <div className="InputBox">
      <Textarea
        value={displayValue}
        onChange={handleInputChange}
        placeholder="差分比較したいテキストを入力してください"
        width="70%"
        height={200}
      />
    </div>
  );
};

export default InputBox;
