import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Suspense } from "react";
import { Container, Box } from "@mui/material";
import { Loader } from "../components/Loader";

function LoaderScreen() {
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
export function MainLayout() {
	return (
		<>
			<Header />
			<Suspense fallback={<LoaderScreen />}>
				<Container sx={{ paddingTop: "100px" }}>
					<Outlet />
				</Container>
			</Suspense>
		</>
	);
}
