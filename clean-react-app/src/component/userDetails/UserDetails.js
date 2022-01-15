import React from 'react';

const UserDetails = ({user}) => {
    let {id,name,surname,email,phone,website,address:{street,suite,city,zipcode},geo:{lat,lng},company:{companyName,catchPhrase,bs}} = user
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default UserDetails;