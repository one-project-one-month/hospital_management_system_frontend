import { useState } from "react";
import {api} from "@/api/index.js";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


// const api  = NewApiService("superbase")



export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            const newUsers = await api.get()
          newUsers &&  setUsers(newUsers)
        })()
    }, [])

    return (
        <div>
            <Button>Hello, World</Button>
            <Input />
        <ul>
            {
                users?.map((user) => <li key={user.id}>{user.name}</li>)
            }
        </ul>
            </div>
    )
}
