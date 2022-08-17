import { FC } from "react";
import { Outlet } from "react-router-dom";

import Directory from "../../component/directory";

const Home: FC = () => {
	return (
		<div>
			<Directory />;
			<Outlet />
		</div>
	);
};

export default Home;
