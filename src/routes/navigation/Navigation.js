import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../component/cartIcon";
import CartDropdown from "../../component/cartDropdown";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { CartContext } from "../../context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutUser } from "../../utils/firebase/firebase";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);

	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<NavigationContainer className='navigation'>
				<LogoContainer to='/'>
					<CrwnLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>SHOP</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
