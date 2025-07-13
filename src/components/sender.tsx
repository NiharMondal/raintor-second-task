"use client";

import { useSignalR } from "@/hooks/useSignalR";
import { useEffect, useState } from "react";
import Button from "./ui/button";

export default function Sender() {
	const [lat, setLat] = useState(25.7373);
	const [lon, setLon] = useState(90.3644);
	const [userName, setUserName] = useState("Default");
	const { sendLocation } = useSignalR(() => {});

	useEffect(() => {
		const interval = setInterval(() => {
			const simulatedLat = lat + Math.random() * 0.001;
			const simulatedLon = lon + Math.random() * 0.001;
			sendLocation(simulatedLat, simulatedLon, userName);
		}, 2000);

		return () => clearInterval(interval);
	}, [lat, lon, userName, sendLocation]);

	const handleSend = () => {
		if (!userName.trim() || isNaN(lat) || isNaN(lon)) {
			alert("Please enter valid coordinates and username.");
			return;
		}
		sendLocation(lat, lon, userName);
		console.log("Sent:", { lat, lon, userName });
	};

	return (
		<div className="p-4">
			<h2>Sender (User A)</h2>
			<p>Sending simulated GPS location every 10 seconds.</p>

			<div className="space-y-5 mt-3">
				<div className="flex flex-col gap-2">
					<label htmlFor="lat">Latitude</label>
					<input
						type="number"
						id="lat"
						onChange={(e) => setLat(parseInt(e.target.value))}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="lon">Longitude</label>
					<input
						type="number"
						id="lon"
						onChange={(e) => setLon(parseInt(e.target.value))}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="userName">User name</label>
					<input
						id="userName"
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>

				<Button variant="secondary" onClick={handleSend}>
					Send Location
				</Button>
			</div>
		</div>
	);
}
