import React, {useEffect, useState} from 'react';
import {NavLink,  Outlet, useParams} from "react-router-dom";

import {albumsServices} from "../../services/albums.services";

const Albums = () => {
    const {id} = useParams()

    const [albums, setAlbums] = useState([])

    useEffect(()=>{
        albumsServices.getById(id).then(value => setAlbums([...value]))
    },[id])

    return (
        <div>
            {
                albums.map(album=>
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

export {Albums};