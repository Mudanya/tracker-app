import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { AxiosError, CanceledError } from "../services/apiClient";

const useUsers = ()=> {
    const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState<string>("");
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		const { request, cancel } = userService.getAll<User>();
		request
			.then(res => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch((err: AxiosError) => {
				setLoading(false);
				if (err instanceof CanceledError) return;
				setError(err.message);
			});
		return () => cancel();
	}, []);

    return {users,error,isLoading,setError,setLoading,setUsers}
}

export default useUsers