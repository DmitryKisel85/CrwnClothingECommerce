import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";

import CartIcon from "../../component/CartIcon";
import CartDropdown from "../../component/CartDropdown";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";

import { signOutStart } from "../../store/user/userSlice";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";

const Navigation: FC = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const dispatch = useAppDispatch();

    const signOutUser = () => dispatch(signOutStart());

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
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
