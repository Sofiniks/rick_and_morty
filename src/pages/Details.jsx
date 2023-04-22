import moment from "moment/moment";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, Typography, CardHeader } from "@mui/material";
import { Button } from "../components/Button";

export function Details() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const { item, category } = state;
	const {
		name,
		image,
		species,
		gender,
		created,
		status,
		type,
		dimension,
		air_date,
		episode,
	} = item || {};
	if (!state) {
		return <Navigate to={`/${category}`} />;
	}
	return (
		<Box
			sx={{
				minHeight: "100vh",
			}}
		>
			<Button onClick={() => navigate(-1)}> Go back</Button>
			<Box sx={{textAlign: 'center', marginTop: '20px', width: '100%'}}>
				<Card sx={{ width: "40%", height: "70%" }}>
					<CardHeader title={name} sx={{textTransform: 'uppercase', color: 'primary.dark'}}/>
					{image && <CardMedia component='img' src={image} />}
					<CardContent sx={{textAlign: "left"}}>
						{gender && <Typography>Gender: {gender}</Typography>}
						{species && <Typography>Species: {species}</Typography>}
						{status && <Typography>Status: {status}</Typography>}
						{dimension && <Typography>Dimension: {dimension}</Typography>}
						{episode && category === "episodes" && (
							<Typography>Episode: {episode}</Typography>
						)}
						{air_date && <Typography>Air date: {air_date}</Typography>}
						<Typography>
							Created: {moment(created).format("YYYY-MM-DD")}
						</Typography>
						{type && <Typography>Type: {type}</Typography>}
					</CardContent>
				</Card>
			</Box>
		</Box>
	);
}
