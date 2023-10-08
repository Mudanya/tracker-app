import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
type User = {
	id: number;
	name: string;
};
const Server = () => {
    const deleteUser = (user:User) => {
        const initUsers = [...users]
        setUsers(users.filter(usr => usr.id != user.id))
        axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
        .catch((err:AxiosError) => {
            setError(err.message)
            setUsers(initUsers)
        })
    }
    const updateUser = (user:User) => {
        setUsers(users.map(usr => usr.id === user.id ? {...user,name:user.name + '!'}:usr))
    }
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState<string>("");
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get<User[]>("https://jsonplaceholder.typicode.com/users")
			.then(res => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch((err: AxiosError) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border"></div>}
			<ul className="list-group">
				{users.map(user => (
					<li key={user.id} className="list-group-item d-flex justify-content-between">
						{user.name}
                        <div >
                            <button className="btn btn-outline-primary me-2" onClick={()=>updateUser(user)}>Update</button>
                            <button className="btn btn-outline-danger" onClick={()=>deleteUser(user)}>Delete</button>
                        </div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Server;
