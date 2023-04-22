import { CircularProgress, Typography, Box } from "@mui/material";

export function Loader() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				textAlign: "center",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<CircularProgress sx={{ color: "primary.light", marginBottom: '15px' }} />
			<Typography sx={{ fontFamily: "get_schwiftyregular", fontSize: '24px' }}>
				Loading...
			</Typography>
		</Box>
	);
}
