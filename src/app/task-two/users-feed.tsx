"use client";
import React, { useRef, useEffect } from "react";
import { useUsers } from "@/hooks/useUsers";

import { UserCard } from "@/components/user-card";
import { TServerResponse } from "@/types";
import Skeleton from "@/components/shared/skeleton";

export default function UsersFeed() {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isError,
		error,
	} = useUsers();

	const observerRef = useRef(null);

	useEffect(() => {
		if (!observerRef.current || !hasNextPage) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					fetchNextPage();
				}
			},
			{ threshold: 1.0 }
		);

		const el = observerRef.current;
		observer.observe(el);

		//cleaning observer
		return () => observer.unobserve(el);
	}, [fetchNextPage, hasNextPage]);

	if (isLoading) return <Skeleton />;
	if (isError)
		return (
			<p className="text-red-500 text-center">Error: {error.message}</p>
		);

	return (
		<div className="max-w-2xl mx-auto py-4 space-y-4">
			{data.pages.map((page: TServerResponse) =>
				page.users.map((user) => <UserCard key={user.id} user={user} />)
			)}
			{isFetchingNextPage && <Skeleton />}
			<div ref={observerRef} />
		</div>
	);
}
