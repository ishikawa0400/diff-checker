import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import parse from "html-react-parser";

interface PROPS {
	diffResult: string;
}

const ResultBox = (props: PROPS) => {
	const { diffResult } = props;

	return (
		<Card display="inline-block" w="80%" h="55%">
			<CardHeader h="10%">
				<Heading size="md">Result</Heading>
			</CardHeader>
			<CardBody display="inline-block" overflow="auto" fontSize="lg" w="90%" h="85%">
				{parse(diffResult)}
			</CardBody>
		</Card>
	);
};

export default ResultBox;
