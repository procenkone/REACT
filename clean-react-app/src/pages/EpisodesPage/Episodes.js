import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import css from './episodesPage.module.css'
import {EpisodesService} from "../../services/episodes.service";
import {EpisodesPage} from "../../services/episodesPage";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const [page, setPage] = useState(1)


    const next = () => {
        page < 3 && setPage(page + 1)
    }

    const previous = () => {
        page !== 1 && setPage(page - 1)
    }

    useEffect(() => {
        switch (page) {
            case 1:
                EpisodesService.getAll().then(value => {
                    setEpisodes(value.results)
                    console.log(page, 'one case')
                })
                break;
            case 2:
                EpisodesPage.getById(page).then(value => {
                    setEpisodes(value.results)
                    console.log(page, 'two case')
                })
                break;
            case 3:
                EpisodesPage.getById(page).then(value => {
                    setEpisodes(value.results)
                    console.log(page, 'three case')
                })
                break;
            default:
        }
    }, [page])

    return (
        <div className={css.episodePageWrap}>

            <div className={css.titleEpisodes}>
                <h1>Rick and Morty episodes!</h1>
            </div>
            <div className={css.episodesBlock}>
                {
                    episodes && episodes.map(episode =>
                        <div className={css.itemEpisode} key={episode.id}>
                            <h3>{episode.name}</h3>
                            <h4>Episode: {episode.episode}</h4>
                            <h4>Air date: {episode.air_date}</h4>
                            <div className={css.itemEpisodeLink}>
                                <Link to={`/episodes/${episode.id}`} state={episode} id={episode.id}>Episode delails</Link>
                            </div>
                        </div>
                    )
                }


            </div>
            <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
                <button onClick={previous}>previous</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    );
};

export default Episodes;