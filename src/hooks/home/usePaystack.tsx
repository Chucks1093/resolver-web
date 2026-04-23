import { useCallback } from "react";

interface PaystackResponse {
	status: string;
	message: string;
	transaction: string;
	reference: string;
}

interface PaystackConfig {
	key: string;
	email: string;
	amount: number;
	ref: string;
	callback: (response: PaystackResponse) => void;
	onClose: () => void;
	metadata?: Record<string, unknown>;
}

interface PaystackPop {
	setup(config: PaystackConfig): { openIframe: () => void };
}

declare global {
	interface Window {
		PaystackPop: PaystackPop;
	}
}

interface InitializePaymentProps {
	email: string;
	amount: number;
	onSuccess: (response: PaystackResponse) => void;
	onClose: () => void;
	metadata?: Record<string, unknown>;
}

export const usePaystack = () => {
	const initializePayment = useCallback((props: InitializePaymentProps) => {
		if (!window.PaystackPop) {
			console.error("Paystack script not loaded.");
			return;
		}

		const config: PaystackConfig = {
			key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
			email: props.email,
			amount: props.amount * 100, // amount in kobo
			ref: `PSK_${Date.now()}`,
			callback: props.onSuccess,
			onClose: props.onClose,
			metadata: props.metadata,
		};

		const handler = window.PaystackPop.setup(config);
		handler.openIframe();
	}, []);

	return { initializePayment };
};
