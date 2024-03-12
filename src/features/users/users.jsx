import { useState } from "react";
import { NewApiService } from "../../api";
import { useEffect } from "react";

// const api  = NewApiService("superbase")
const api  = NewApiService("backend")


export default function Users() {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        (async () => {
            const newUsers = await api.get()
            setUsers(newUsers)
        })()
    }, [])

    return (
        <ul>
            {
                users.map((user) => <li key={user.id}>{user.name}</li>)
            }
        </ul>
    )
}
