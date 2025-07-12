import { TUser } from "@/types";
import Image from "next/image";
import React from "react";

export const UserCard = ({ user }: { user: TUser }) => (
	<div className="user-card border p-4 rounded-md shadow-sm" tabIndex={0}>
		<Image
			src={user.image}
			alt={`${user.firstName} ${user.lastName}`}
			className="w-16 h-16 rounded-full"
			height={64}
			width={64}
		/>
		<div>
			<h2 className="text-lg font-semibold">
				{user.firstName} {user.lastName}
			</h2>
			<p>{user.email}</p>
			<p>{user.phone}</p>
			<p>{user.university}</p>
			<p className="text-sm italic text-gray-500">{user.company.title}</p>
		</div>
	</div>
);
