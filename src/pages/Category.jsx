import { Link, Navigate, useParams } from "react-router-dom";
import { CATEGORIES_NAME } from "../constants";
import { useSearchData } from "../hooks/useSearchData";
import { useCallback, useMemo, useRef, useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
	Box,
	List,
	ListItem,
	Typography,
	Card,
	CardMedia,
	CardContent,
} from "@mui/material";
import { Loader } from "../components/Loader/Loader";

export function Categories() {
	const { category } = useParams();
	const [pageNumber, setPageNumber] = useState(1);
	const { loading, error, data, hasMore } = useSearchData(category, pageNumber);

	const observer = useRef();

	useEffect(() => {
		setPageNumber(1);
	}, [category]);

	const lastNodeRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) {
				observer.current.disconnect();
			}
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((prevState) => prevState + 1);
				}
			});
			if (node) {
				observer.current.observe(node);
			}
		},
		[loading, hasMore]
	);

	const list = useMemo(
		() =>
			data?.map((item, index) => {
				const cardStyle = {
					minHeight: 100,
					minWidth: 200,
					width: 300,
					padding: "15px",
					transition: "all .3s",
					"&:hover": {
						transform: "scale(1.1)",
						transition: "all .3s",
					},
				};
				return (
					<ListItem
						key={uuidv4()}
						ref={data.length === index + 10 ? lastNodeRef : null}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<Link
							to={`/${category}/${item.id}`}
							state={{ item: item, category: category }}
						>
							<Card sx={cardStyle}>
								{item.image && (
									<CardMedia component='img' src={item.image} height={250} />
								)}
								<CardContent sx={{ textAlign: "center" }}>
									<Typography
										sx={{
											fontSize: "18px",
											textTransform: "uppercase",
											color: "primary.dark",
										}}
									>
										{item.name}
									</Typography>
								</CardContent>
							</Card>
						</Link>
					</ListItem>
				);
			}),
		[data, category, lastNodeRef]
	);

	if (!data) {
		return <Navigate to='/' />;
	}
	if (loading) {
		return (
			<Box
				sx={{
					minHeight: "100vh",
					justifyContent: "center",
					alignItems: "center",
					display: "flex",
				}}
			>
				<Loader />
			</Box>
		);
	}
	if (error) {
		return <h1>Error</h1>;
	}
	return (
		<Box sx={{ padding: "70px 25px" }}>
			<Typography
				component='h1'
				sx={{
					fontSize: "40px",
					textAlign: "center",
					marginBottom: "20px",
					fontFamily: "get_schwiftyregular",
					color: "secondary.main",
				}}
			>
				{CATEGORIES_NAME[category]}
			</Typography>
			<List
				sx={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr",
					gap: "20px",
				}}
			>
				{list}
			</List>
		</Box>
	);
}
