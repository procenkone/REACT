import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useParams, Outlet} from "react-router-dom";

import css from './userDetails.module.css'
import {userServices} from "../../services/user.services";

const UserDetails = () => {
    const [user, setUser] = useState(null)
    const {id} = useParams()
    const {state} = useLocation()

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userServices.getById(id).then(value => setUser({...value}))
    }, [id])

    // console.log(user)


    return (
        <>
            <div className={css.userDetails}>
                {
                    user && (
                        <div>
                            UserDetails
                            <div>Id: {user.id}</div>
                            <div>Name: {user.name}</div>
                            <div>username: {user.username}</div>
                            <div>email: {user.email}</div>
                            <div>phone: {user.phone}</div>
                            <div>website: {user.website}</div>
                            <br/>
                            <p>address:</p>
                            <div>street: {user.address.street}</div>
                            <div>suite: {user.address.suite}</div>
                            <div>city: {user.address.city}</div>
                            <div>zipcode: {user.address.zipcode}</div>
                            <NavLink to={'postsId'}>
                                <button> get posts</button>
                            </NavLink>
                        </div>

                    )
                }
            </div>
            <div><Outlet/></div>
        </>
    );
};

export default UserDetails;