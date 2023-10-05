import { useState } from "react";
import Button from "./components/Button";
import produce from "immer";
import ExpandableText from "./components/ExpandableText";

const App = () => {
	const [bug, setBug] = useState([
		{ id: 1, fixed: false },
		{ id: 2, fixed: false },
	]);
	const handleClick = () => {
		setBug(
			produce(draft => {
				const bug = draft.find(bug => bug.id === 1);
				if (bug) bug.fixed = !bug.fixed;
			})
		);
	};
	return (
		<div>
			<ExpandableText maxSize={10}>
				Hello World manenos
			</ExpandableText>
		</div>
	);
};

export default App;
