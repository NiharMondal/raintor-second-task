"use client";
import {
	QueryClient as Query,
	QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";

const queryClient = new Query();
export default function QueryClient({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}
