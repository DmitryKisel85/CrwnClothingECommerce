import { Routes, Route } from "react-router-dom";

import { useEffect, lazy, Suspense } from "react";
import { useAppDispatch } from "./store/store";

import Spinner from "./component/Spinner";

import { checkUserSession } from "./store/user/userSlice";

import { GlobalStyle } from "./global.styles";

const Home = lazy(() => import("./routes/Home"));
const Authentication = lazy(() => import("./routes/Authentication"));
const Navigation = lazy(() => import("./routes/Navigation"));
const Shop = lazy(() => import("./routes/Shop"));
const Checkout = lazy(() => import("./routes/Checkout"));

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Suspense fallback={<Spinner />}>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="shop/*" element={<Shop />} />
                    <Route path="auth" element={<Authentication />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
