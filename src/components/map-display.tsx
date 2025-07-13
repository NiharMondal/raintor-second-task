"use client";
import "@/lib/fixLeafletIcon";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from "leaflet";

type Props = {
	position: LatLngExpression;
	userName: string;
};

export default function MapDisplay({ position, userName }: Props) {
	L.Icon.Default.mergeOptions({
		iconRetinaUrl:
			"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
		iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
		shadowUrl:
			"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
	});
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
