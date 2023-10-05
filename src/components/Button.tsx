type Props = {
	color: 'primary' | 'secondary' | 'danger' | 'success';
	children: string;
    onUpdate?:() => void
};
const Button = ({ color, children,onUpdate }: Props) => {
	return (
		<button type="button" className={`btn btn-${color}`} onClick={onUpdate}>
			{children}
		</button>
	);
};

export default Button;
