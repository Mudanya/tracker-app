import userService, { User } from "../services/user-service";
import { AxiosError, CanceledError } from "../services/apiClient";
import useUsers from "../hooks/useUsers";

const Server = () => {
	const deleteUser = (user: User) => {
		const initUsers = [...users];
		setUsers(users.filter(usr => usr.id != user.id));
		userService.delete(user.id).catch((err: AxiosError) => {
			setError(err.message);
			setUsers(initUsers);
		});
	};
	const updateUser = (user: User) => {
		const updateUser = { ...user, name: user.name + "!" };
		setUsers(users.map(usr => (usr.id === user.id ? updateUser : usr)));
		userService.update(user).catch((err: AxiosError) => {
			setError(err.message);
		});
	};
	const {users,error,setUsers,setError,isLoading} = useUsers()

	return (
		<div>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border"></div>}
			<ul className="list-group">
				{users.map(user => (
					<li
						key={user.id}
						className="list-group-item d-flex justify-content-between"
					>
						{user.name}
						<div>
							<button
								className="btn btn-outline-primary me-2"
								onClick={() => updateUser(user)}
							>
								Update
							</button>
							<button
								className="btn btn-outline-danger"
								onClick={() => deleteUser(user)}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Server;
