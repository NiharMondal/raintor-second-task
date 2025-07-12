"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";
import { useSignalR } from "@/hooks/useSignalR";

const MapDisplay = dynamic(() => import("./map-display"), {
	ssr: false,
});

export default function Receiver() {
	const [position, setPosition] = useState<LatLngExpression | null>(null);
	const [userName, setUserName] = useState("");

	const handleReceive = (payload: any) => {
		setPosition([payload.lat, payload.lon]);
		setUserName(payload.userName);
	};

	useSignalR(handleReceive);

	return (
		<div className="p-4">
			<h2>Receiver (User B)</h2>
			{position ? (
				<MapDisplay position={position} userName={userName} />
			) : (
				<p>Waiting for location updates...</p>
			)}
		</div>
	);
}
