import React from "react";
import { Textarea } from "@chakra-ui/react";

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
		<Textarea
			bg="gray.50"
			onChange={handleInputChange}
			placeholder="差分比較したいテキストを入力してください"
			width="70%"
			height="100%"
			resize="none"
		/>
	);
};

export default InputBox;
