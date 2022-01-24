import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {photoServices} from "../../services/photo.services";

const Photos = () => {
    const {state} = useLocation()
    const [photos, setPhotos] = useState(null)

    useEffect(()=>{
        photoServices.getById(state.id).then(value => setPhotos([...value]))
    },[state.id])
    return (
        <div>
            Photos
            {photos && photos.map(photo=>
            <div key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.id}/>
            </div>
            )}

        </div>
    );
};

export {Photos};