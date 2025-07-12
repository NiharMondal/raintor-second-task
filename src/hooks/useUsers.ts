import { TServerResponse } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchUsers = async ({ pageParam = 0 }): Promise<TServerResponse> => {
	const res = await fetch(
		`https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=${pageParam}`
	);
	const data = await res.json();

	return data;
};

export const useUsers = () => {
	return useInfiniteQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
		getNextPageParam: (data: TServerResponse) => {
			const nextSkip = data.skip + data.users.length;
			return nextSkip < data.total ? nextSkip : undefined;
		},
	});
};
