import axios from "axios";
import { useState } from "react";
import UserStore from "../store/LoginStore";

function LoginPage() {
	const { loginData, setLoginState } = UserStore();
	const [data, setData] = useState({ email: "", password: "" });

	const handleLogin = async (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3000/api/v1/auth/login", data)
			.then((response) => {
				console.log(response.data);
				loginData(response.data);
				setLoginState(true)
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleChange = (e) => {
		e.preventDefault();
		setData({ ...data, [e.target.name]: e.target.value });
	};

	return (
		<>
			<div className="container">
				<h1>Login</h1>
				<div>
					<form onSubmit={handleLogin}>
						<label htmlFor="email">Email</label>
						<input
							className="form-control"
							onChange={handleChange}
							type="text"
							name="email"
						/>
						<label htmlFor="password">Password</label>
						<input
							className="form-control"
							onChange={handleChange}
							type="password"
							name="password"
						/>
						<button className="btn btn-primary" type="submit">
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default LoginPage;
