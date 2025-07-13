"use client";
import React from "react";
import { createSignalRContext } from "react-signalr";

export const SignalRContext = createSignalRContext();

const token = "fake-token-or-empty-if-not-needed";
export default function SignalRLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SignalRContext.Provider
			accessTokenFactory={() => token}
			connectEnabled={true}
			url="https://tech-test.raintor.com/Hub"
		>
			{children}
		</SignalRContext.Provider>
	);
}
