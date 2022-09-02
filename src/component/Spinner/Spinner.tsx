import { FC } from "react";
import { SpinnerOverlay, SpinnerContainer } from "./spinner.styles";

const Spinner: FC = () => (
	<SpinnerOverlay>
		<SpinnerContainer />
	</SpinnerOverlay>
);

export default Spinner;
