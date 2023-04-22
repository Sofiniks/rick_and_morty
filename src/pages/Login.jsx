import * as React from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Button } from "../components/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import bgImage from "../assets/loginBg.png";

export function Login() {
	const auth = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from || "/";

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const username = formData.get("username");
		auth.signin(username, () => {
			navigate(from, {
				replace: true,
			});
		});
	};

	return (
		<Box component='main' sx={{ height: "100vh" }}>
			<Box
				component='img'
				src={bgImage}
				sx={{
					height: "100%",
					width: "100%",
					maxHeight: "100vh",
					objectFit: "cover",
					position: "relative",
				}}
			></Box>
			<Box
				component={Paper}
				elevation={6}
				square
				sx={{
					backgroundColor: "primary",
					width: { md: "50%", lg: "40%" },
					height: { md: "60%", lg: "40%" },
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 1, textAlign: "center" }}
					>
						<TextField
							margin='normal'
							required
							fullWidth
							id='username'
							label='Username'
							name='username'
							autoComplete='username'
							autoFocus
						/>
						<Button>Sign In</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
