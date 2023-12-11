import axios, { AxiosError, CanceledError } from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const res = axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })

      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // .finally(()=>{
    //   setLoading(false);
    // })
    return () => controller.abort();
  }, []);

  const deleteUser =(user: User)=>{
const originalUsers = [...users];
setUsers(users.filter(u => u.id !== user.id ));
axios.delete('https://jsonplaceholder.typicode.com/users'+ user.id)
.catch(err => {
  setError(err.message);
  setUsers(originalUsers);
})
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
            <button className="btn btn-outline-danger " onClick={()=> deleteUser(user)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
