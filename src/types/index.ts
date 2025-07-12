export type TUser = {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	image: string;
	university: string;
	company: TCompany;
};

type TCompany = {
	title: string;
};

export type TServerResponse = {
	limit: number;
	skip: number;
	total: number;
	users: TUser[];
};
