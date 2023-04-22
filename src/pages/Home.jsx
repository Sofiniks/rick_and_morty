import { Box, Typography } from "@mui/material";
import bgImage from '../assets/homeBg.jpeg';

export function Home() {
    return (
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					padding: "20px",
					height: "100vh",
					flexDirection: 'column'
				}}
			>
				<Typography
					sx={{ fontSize: "30px", fontFamily: "get_schwiftyregular", color: "secondary.main", marginBottom: '20px' }}
				>
					Welcome to Rick and Morty Universe
				</Typography>
				<Box
					component='img'
					src={bgImage}
					sx={{
						height: "70vh",
						width: "80%",
						objectFit: "cover",
					}}
				/>
			</Box>
		);
}