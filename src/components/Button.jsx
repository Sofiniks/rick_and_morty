import { Button as MUIButton } from "@mui/material";

export const Button = (props) => {
	const { size = "medium", onClick, children } = props;
	return (
		<MUIButton
			size={size}
			variant='contained'
			onClick={onClick}
			sx={{
				backgroundColor: "primary.light",
				color: "primary.dark",
				"&:hover": {
					backgroundColor: 'success.main'
				},
			}}
		>
			{children}
		</MUIButton>
	);
};
