import { useEffect, useRef } from "react";
import * as signalR from "@microsoft/signalr";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSignalR = (onReceive: (data: any) => void) => {
	const connectionRef = useRef<signalR.HubConnection | null>(null);

	useEffect(() => {
		const connection = new signalR.HubConnectionBuilder()
			.withUrl("https://tech-test.raintor.com/Hub")
			.withAutomaticReconnect()
			.build();

		connection.start().then(() => {
			console.log("SignalR connected");
			connection.on("ReceiveLatLon", (payload) => {
				onReceive(payload);
			});
		});

		connectionRef.current = connection;
		return () => {
			connection.stop();
		};
	}, [onReceive]);

	const sendLocation = (lat: number, lon: number, userName: string) => {
		connectionRef.current?.invoke("SendLatLon", lat, lon, userName);
	};

	return { sendLocation };
};
