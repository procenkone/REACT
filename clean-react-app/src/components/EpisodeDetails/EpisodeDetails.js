import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {CharactersService} from "../../services/characters.service";
import css from './episodeDetails.module.css'

const EpisodeDetails = () => {
    let arr = []
    const [charactersAll, setCharactersAll] = useState([])
    const {id} = useParams()
    const {state: {characters, name, episode, air_date}} = useLocation()

    useEffect(() => {
        characters.map(item => {
            const id = item.slice(item.lastIndexOf('/') + 1)
            CharactersService.getById(id).then(value => {
                arr.push(value)
                setCharactersAll([...arr])
            })
        })
    }, [id])

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div className={css.charactersTitle}>
                <h2 style={{marginBottom: "10px"}}>{name}</h2>
                <h4>Episode: {episode}</h4>
                <h4>Air date: {air_date}</h4>
            </div>
            <div className={css.charactersWrap}>
                {
                    charactersAll.map(item =>
                        <div className={css.charactersItem} key={item.id}>
                            <img src={item.image} alt={item.id}/>
                            <div>
                                {item.name}
                                <p>Status: {item.status}</p>
                                <p>species: {item.species}</p>
                                <p>gender: {item.gender}</p>

                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default EpisodeDetails;