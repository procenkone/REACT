import React from "react";

import '../App.css'

const UserDetails = ({user, getPosts}) => {

    return (
        <div>
            {user && <h2>
                id: {user.id}<br/>
                name: {user.name}<br/>
                username: {user.username}<br/>
                email: {user.email}<br/>
                phone: {user.phone}<br/>
                website: {user.website}<br/>
                <br/>
                address<br/>
                street: {user.address.street}<br/>
                suite: {user.address.suite}<br/>
                city: {user.address.city}<br/>
                zipcode: {user.address.zipcode}<br/>
                geo-lat: {user.address.geo.lat}<br/>
                geo-lng: {user.address.geo.lng}<br/>
                <br/>

                company
                name: {user.company.name}<br/>
                catchPhrase: {user.company.catchPhrase}<br/>
                bs: {user.company.bs}<br/>
                <button onClick={() => getPosts(user.id)}>GetPosts</button>
            </h2>}

        </div>
    );
};

export default UserDetails;