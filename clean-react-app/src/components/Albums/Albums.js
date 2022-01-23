import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, Outlet} from "react-router-dom";

import {albumsServices} from "../../services/albums.services";

const Albums = () => {
    const {state} = useLocation()

    const [albums, setAlbums] = useState(null)

    useEffect(()=>{
        albumsServices.getById(state).then(value => setAlbums([...value]))
    },[state])

    return (
        <div>
            {
                albums && albums.map(album=>
                <div key={album.id}>
                    <h3>Album id: {album.id}</h3>
                    <div>Title: {album.title}</div>
                    <NavLink to={`${album.id.toString()}/photos`} state={album}><button>get photos</button></NavLink>
                    <hr/>
                </div>
                )
            }
            <Outlet/>

        </div>
    );
};

export default Albums;