// "use client";
// import L from "leaflet";
// export const fixLeafletIcon = () => {
// 	if (typeof window === "undefined") return; // only run on client

// 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// 	//@ts-ignore
// 	delete L.Icon.Default.prototype._getIconUrl;

// 	L.Icon.Default.mergeOptions({
// 		iconRetinaUrl:
// 			"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
// 		iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
// 		shadowUrl:
// 			"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
// 	});
// };
