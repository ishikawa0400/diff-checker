import React, { useState } from "react";
import logo from "../logo.svg";
import { Text, Textarea } from "@chakra-ui/react";
import parse from "html-react-parser";

interface PROPS {
	returnInput: React.Dispatch<React.SetStateAction<string>>;
}

const InputBox = (props: PROPS) => {
	const { returnInput } = props;

	let handleInputChange = (e: any) => {
		const inputValue = e.target.value;
		returnInput(inputValue);
	};
	return (
		<div className="InputBox">
			<Textarea
				onChange={handleInputChange}
				placeholder="差分比較したいテキストを入力してください"
				width="70%"
				height={200}
			/>
		</div>
	);
};

export default InputBox;
