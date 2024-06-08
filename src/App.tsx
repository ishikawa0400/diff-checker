import React, { useState, useEffect } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import { Grid, Heading } from "@chakra-ui/react";
import * as Diff from "diff";
import ResultBox from "./components/ResultBox";

function App() {
	const [inputLeft, setInputLeft] = useState("");
	const [inputRight, setInputRight] = useState("");
	const [diffResult, setDiffResult] = useState("");

	useEffect(() => {
		const result = check_diff(inputLeft, inputRight);
		setDiffResult(result);
	}, [inputLeft, inputRight]);

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

	const highlight_diff = (lnL: string, lnR: string): string => {
		const diff = Diff.diffChars(lnL, lnR);
		// 結果をハイライト表示用のHTMLに変換
		const result = diff
			.map((part) => {
				// 削除された部分を赤色で表示
				if (part.removed) {
					return `<span style="color:red;text-decoration:line-through;">${part.value}</span>`;
				}
				// 追加された部分を緑色で表示
				if (part.added) {
					return `<span style="color:green;">${part.value}</span>`;
				}
				// 変更がない部分はそのまま表示
				return part.value;
			})
			.join("");
		return result;
	};

	return (
		<div className="App">
			<Heading textAlign="center">文字列差分チェッカー</Heading>
			<Grid templateColumns="repeat(2, 1fr)">
				<InputBox returnInput={setInputLeft} />
				<InputBox returnInput={setInputRight} />
			</Grid>
			<Grid>
				<ResultBox diffResult={diffResult} />
			</Grid>
		</div>
	);
}

export default App;
