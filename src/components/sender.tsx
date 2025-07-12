"use client";

import { useSignalR } from "@/hooks/useSignalR";
import { useEffect, useState } from "react";

export default function Sender() {
	const [lat, setLat] = useState(25.7373);
	const [lon, setLon] = useState(90.3644);

	const { sendLocation } = useSignalR(() => {});

	useEffect(() => {
		const interval = setInterval(() => {
			const simulatedLat = lat + Math.random() * 0.001;
			const simulatedLon = lon + Math.random() * 0.001;
			sendLocation(simulatedLat, simulatedLon, "you@example.com");
		}, 2000);

		return () => clearInterval(interval);
	}, [lat, lon, sendLocation]);

	return (
		<div className="p-4">
			<h2>Sender (User A)</h2>
			<p>Sending simulated GPS location every 2 seconds.</p>
		</div>
	);
}
