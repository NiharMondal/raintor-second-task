// components/MapDisplay.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

type Props = {
	position: LatLngExpression;
	userName: string;
};

export default function MapDisplay({ position, userName }: Props) {
	return (
		<MapContainer
			center={position}
			zoom={13}
			style={{ height: "400px", width: "100%" }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&copy; OpenStreetMap contributors"
			/>
			<Marker position={position}>
				<Popup>{userName}&apos;s current location</Popup>
			</Marker>
		</MapContainer>
	);
}
