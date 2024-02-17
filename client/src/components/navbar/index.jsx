import { Navbar, Nav } from "react-bootstrap";
import { privateRoutes } from "../../routes";
import { Link } from "react-router-dom";
import UserStore from "../../store/LoginStore";

const NavbarComponent = () => {
	const { logout } = UserStore();
	return (
		<Navbar className={"navbar-light navbar-expand text-dark"}>
			<Nav>
				{privateRoutes.map((route, index) => {
					return (
						<Link key={index} to={route.path} className="nav-link">
							{route.name}
						</Link>
					);
				})}
				<button className="btn btn-danger" onClick={() => logout()}>Logout</button>
			</Nav>
		</Navbar>
	);
};

export default NavbarComponent;
