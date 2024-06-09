import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import { ChakraProvider, Grid, Heading, Box } from "@chakra-ui/react";
import * as Diff from "diff";
import ResultBox from "./components/ResultBox";

function App() {
	const [inputLeft, setInputLeft] = useState("");
	const [inputRight, setInputRight] = useState("");
	const [diffResult, setDiffResult] = useState("");

	useEffect(() => {
		const check_diff = (inL: string, inR: string): string => {
			let result: string[] = [];
			let linesLeft = inL.split("\n");
			let linesRight = inR.split("\n");
			const lengthLeft = linesLeft.length;
			const lengthRight = linesRight.length;
			const lineCount = Math.max(lengthLeft, lengthRight);
			if (lengthLeft < lengthRight) {
				linesLeft.push(...Array(lengthRight - lengthLeft).fill(""));
			} else {
				linesRight.push(...Array(lengthLeft - lengthRight).fill(""));
			}
			for (let i = 0; i < lineCount; i++) {
				let lineLeft = linesLeft[i];
				let lineRight = linesRight[i];
				if (lineLeft === lineRight) {
					result.push(lineRight);
					continue;
				} else {
					result.push(highlight_diff(lineLeft, lineRight));
				}
			}
			return result.join("<br>");
		};

		const result = check_diff(inputLeft, inputRight);
		setDiffResult(result);
	}, [inputLeft, inputRight]);

	const highlight_diff = (lnL: string, lnR: string): string => {
		const diff = Diff.diffChars(lnL, lnR);
		// 結果をハイライト表示用のHTMLに変換
		const result = diff
			.map((part) => {
				// 削除された部分を赤色で表示
				if (part.removed) {
					return `<a style="background-color:#FC8181;">${part.value}</a>`;
				}
				// 追加された部分を緑色で表示
				if (part.added) {
					return `<a style="background-color:#68D391;">${part.value}</a>`;
				}
				// 変更がない部分はそのまま表示
				return part.value;
			})
			.join("");
		return result;
	};

	return (
		<ChakraProvider>
			<Box textAlign="center" paddingTop={5} bg="cyan.100" w="100vw" h="100vh">
				<Heading as="samp">String Diff Checker</Heading>
				<Grid templateColumns="repeat(2, 1fr)" placeItems="center" h="35%" padding={10}>
					<InputBox returnInput={setInputLeft} />
					<InputBox returnInput={setInputRight} />
				</Grid>
				<ResultBox diffResult={diffResult} />
			</Box>
		</ChakraProvider>
	);
}

export default App;
