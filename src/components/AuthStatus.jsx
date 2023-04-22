import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export function AuthStatus() {
	const auth = useAuth();
	const navigate = useNavigate();

	const handleSignOut = () => {
		auth.signout(() => {
			navigate("/");
		});
	};
	if (auth.user === null) {
		return (
			<Button>
				<Link to='/login'>Login</Link>
			</Button>
		);
	}
	return (
		<p>
			<Button onClick={handleSignOut}>Sign out</Button>
		</p>
	);
}
