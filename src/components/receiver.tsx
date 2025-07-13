"use client";

import { useState } from "react";

import { LatLngExpression } from "leaflet";
import { useSignalR } from "@/hooks/useSignalR";
// import MapDisplay from "./map-display";

import dynamic from "next/dynamic";

const MapDisplay = dynamic(() => import("./map-display"), { ssr: false });

export default function Receiver() {
	const [position, setPosition] = useState<LatLngExpression | null>(null);
	const [userName, setUserName] = useState("");

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleReceive = (payload: any) => {
		setPosition([payload.lat, payload.lon]);
		setUserName(payload.userName);
	};

	useSignalR(handleReceive);

	return (
		<div className="p-4">
			<h2>Receiver (User B)</h2>

			<MapDisplay
				position={position || [25.73736464, 90.3644747]}
				userName={userName}
			/>
		</div>
	);
}
