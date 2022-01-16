import { useState, useEffect } from "react";
import axios from 'axios'
import Grid from '@mui/material/Grid';

import UserCard from "../Components/UserCard";

const Users = () => {
    const [users, setUsers] = useState([])

    
    useEffect(() => {
        axios.get('https://reqres.in/api/users')
        .then(response => {
            const { data } = response.data

            setUsers(data)
        })
    }, [])
    
    return (
        <>
            <h1>Users Accounts</h1>
            <Grid container>
                {
                    users.map(card => (
                        <Grid item xs={12} md={4}>
                            <UserCard 
                                name={card.first_name}
                                lastname={card.last_name}
                                email={card.email}
                                avatar={card.avatar}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Users;