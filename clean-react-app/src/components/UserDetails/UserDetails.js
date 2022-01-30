import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {Outlet} from "react-router-dom";

const UserDetails = () => {
    const {state} = useLocation()
    console.log()
    return (
        <>
            <div>
                UserDetails
                <div><b>Name:</b> {state.name}</div>
                <div><b>username:</b> {state.username}</div>
                <div><b>email:</b> {state.email}</div>
                <div><b>phone:</b> {state.phone}</div>
                <div><b>website:</b> {state.website}</div>
                <NavLink to={'/posts'}>
                    <button>get posts by user</button>
                </NavLink>
            </div>
            <div className={'userDetailsOutlet'}>
                <Outlet/>
            </div>
        </>
    );
};

export default UserDetails;