import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "./routes/home";
import Navigation from "./routes/navigation";
import Authentication from "./routes/authentication";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";

import { checkUserSession } from "./store/user/user.action";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
