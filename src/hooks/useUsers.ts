import { useInfiniteQuery } from "@tanstack/react-query";

const fetchUsers = async ({ pageParam = 0 }) => {
	const res = await fetch(
		`https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=${pageParam}`,
		{ method: "GET", credentials: "include" }
	);
	const data = await res.json();

	return data;
};

export const useUsers = () => {
	return useInfiniteQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
		getNextPageParam: (data) => {
			const nextSkip = data.skip + data.users.length;
			return nextSkip < data.total ? nextSkip : undefined;
		},
		initialPageParam: 0,
	});
};
