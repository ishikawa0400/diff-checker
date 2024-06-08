import React, { useState } from "react";
import { Box, Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import parse from "html-react-parser";

interface PROPS {
	diffResult: string;
}

const ResultBox = (props: PROPS) => {
	const { diffResult } = props;

	return (
		<Box>
			<Card display="inline-block" mb={4} w={600} h={400}>
				<CardHeader>
					<Heading size="md">差分結果</Heading>
				</CardHeader>
				<CardBody>{parse(diffResult)}</CardBody>
			</Card>
		</Box>
	);
};

export default ResultBox;
