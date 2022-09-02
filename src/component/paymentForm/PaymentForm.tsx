import { useState, FormEvent, FC } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { selectCartTotal } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";

import { BUTTON_TYPES_CLASSES } from "../Button/Button";

import { PaymentFormContainer, FormContainer, PaymentButton } from "./paymentForm.styles";

const cardStyle = {
	style: {
		base: {
			fontSize: "16px",
		},
		invalid: {
			color: "red",
			iconColor: "red",
		},
	},
};

const PaymentForm: FC = () => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!stripe || !elements) return;

		setIsProcessingPayment(true);

		const response = await fetch("/.netlify/functions/createPaymentIntent", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount: amount * 100 }),
		}).then((res) => {
			return res.json();
		});

		const {
			paymentIntent: { client_secret },
		} = response;

		const cardDetails = elements.getElement(CardElement);
		if (cardDetails === null) return;

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: cardDetails,
				billing_details: {
					name: currentUser ? currentUser.displayName : "Guest",
				},
			},
		});

		setIsProcessingPayment(false);

		if (paymentResult.error) {
			alert(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === "succeeded") {
				alert("payment successful");
			}
		}
	};

	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Credit Card Payment: </h2>
				<CardElement options={cardStyle} />
				<PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPES_CLASSES.inverted}>
					Pay now
				</PaymentButton>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
