import React, {useEffect, useState} from 'react';
import instance from "../api/InstanceURL";
import useRequest from "../hooks/useRequest";

interface Iuser  {
    id: number,
    userId: number,
    title: string
}


function AboutUs(): JSX.Element {
    const [users, loading, error] = useRequest(fetchUsers)


    function fetchUsers() {
        return instance.get("/users/1/albums")
    }


    const userData = () => {
        if(Array.isArray(users)) {
            return users.map(({id, title} : Iuser) => (
                <li key={id}>user: {title}</li>
            ))
        }
        return <h2>Нет данных</h2>
    }


    if(loading) {
        return <h1>Загрузка...</h1>
    }


    return (
        <ul>
            {userData()}
        </ul>
    )
}

export default AboutUs;
