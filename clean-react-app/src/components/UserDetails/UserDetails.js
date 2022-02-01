import React, {useEffect} from 'react';
import {NavLink, useLocation, useParams} from "react-router-dom";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getUser} from "../../store/usersSlice";
import css from './userDetails.module.css'

const UserDetails = () => {
    let {user} = useSelector(state => state['usersReducer']);

    let dispatch = useDispatch();
    let {id} = useParams();

    useEffect(() => {
        dispatch(getUser(id))
    }, [id])

    return (
        <div className={css.detailsBlock}>
            {user.map(user =>
                <div className={css.item} key={user.id}>
                    <h2>UserDetails</h2>
                    <hr/>
                    <div><b>Name:</b> {user.name}</div>
                    <div><b>username:</b> {user.username}</div>
                    <div><b>email:</b> {user.email}</div>
                    <div><b>phone:</b> {user.phone}</div>
                    <div><b>website:</b> {user.website}</div>
                    <NavLink to={'posts'}>
                        <button>get posts by user</button>
                    </NavLink>
                </div>)}

            <div className={'userDetailsOutlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserDetails;