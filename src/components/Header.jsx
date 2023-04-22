import * as React from "react";
import { NavLink } from "react-router-dom";
import {
	List,
	ListItemText,
	Container,
	AppBar,
	Box,
	Toolbar,
} from "@mui/material";
import { AuthStatus } from "./AuthStatus";
import { CATEGORIES_NAME } from "../constants";

export function Header() {
	const listItemStyle = {
		marginRight: "20px",
		color: "primary.light",
		transition: ".3s",
		"&:last-of-type": {
			marginRight: 0,
		},
		"&:hover": {
			transform: "scale(1.1)",
			transition: ".3s",
			color: "secondary.main",
		},
	};
	const data = Object.values(CATEGORIES_NAME);
	const listItems = data.map((item) => {
		return (
			<ListItemText key={item.toLowerCase()} sx={listItemStyle}>
				<NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink>
			</ListItemText>
		);
	});

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='fixed'
				sx={{ backgroundColor: "primary", fontFamily: "Prompt" }}
			>
				<Container sx={{ paddingLeft: 0 }}>
					<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
						<List component='nav' sx={{ display: "flex", maxWidth: "40%" }}>
							{listItems}
						</List>
						<AuthStatus />
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
