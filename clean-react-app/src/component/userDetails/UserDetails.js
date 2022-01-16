import React from 'react';

const UserDetails = ({user, getPosts}) => {
    let {
        id,
        name,
        surname,
        email,
        phone,
        website,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        company: {catchPhrase, bs}
    } = user

    return (
        <div>
            <h2>id - {id}<br/>
                name - {name}<br/>
                username - {surname}<br/>
                email - {email}<br/>
                phone - {phone}<br/>
                website - {website}<br/>
                suite - {suite}<br/>
                city - {city}<br/>
                street - {street}<br/>
                zipcode - {zipcode}<br/>
                lat - {lat}<br/>
                lng - {lng}<br/>
                catchPhrase - {catchPhrase}<br/>
                company name - {user.company.name}<br/>
                bs - {bs}</h2>
            <button onClick={() => getPosts(id)}>getPosts</button>
        </div>
    );
};

export default UserDetails;