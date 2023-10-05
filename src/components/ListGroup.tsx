import { useState } from "react";

// types
type Props = {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
};
const ListGroup = ({ items, heading, onSelectItem }: Props) => {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	return (
		<>
			<h1>{heading}</h1>
			<ul className="list-group">
				{items.length === 0 && <p>No items found</p>}
				{items.map((item, index) => (
					<li
						key={item}
						className={`list-group-item ${selectedIndex === index && "active"}`}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
};

export default ListGroup;
