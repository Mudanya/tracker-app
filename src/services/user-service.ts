import create from "./http-service";
export type User = {
	id: number;
	name: string;
};

export default create('/users')