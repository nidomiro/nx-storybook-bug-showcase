import { MouseEvent } from 'react';

interface Props {
	label: string;
	onClick: (event: MouseEvent) => void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function Button(props: Props) {
	return (
		<>
			<button className={'bg-blue-700 text-2xl m-9'} onClick={props.onClick}>
				{props.label}
			</button>
		</>
	);
}

export default Button;
