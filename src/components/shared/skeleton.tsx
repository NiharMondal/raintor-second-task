import React from "react";

export default function Skeleton() {
	return (
		<div
			className="max-w-2xl py-4 mx-auto bg-white p-4border p-4 rounded-md shadow-sm space-y-4"
			tabIndex={0}
		>
			<div className="w-16 h-16 rounded-full bg-gray-200"></div>
			<div className="space-y-3 *:rounded-sm">
				<h2 className="h-6 bg-gray-200 max-w-[280px]"></h2>
				<p className="h-4 bg-gray-200 max-w-[300px]"></p>
				<p className="h-4 bg-gray-200 max-w-[250px]"></p>
				<p className="h-4 bg-gray-200 max-w-lg"></p>
				<p className="h-4 bg-gray-200 max-w-[200px]"></p>
			</div>
		</div>
	);
}
