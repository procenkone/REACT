import {useEffect, useState} from "react";

export default function Launches() {
    const [launches, setLaunches] = useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(launch => setLaunches(launch.filter(item => item.launch_year !== 2020)))

    }, [])
    console.log(launches)

    return (
        <>
            {
                launches.map(item =>
                    <div key={item.flight_number}>
                        <h2>{item.mission_name}--{item.launch_year}</h2>
                        <img src={item.links.mission_patch_small} alt={item.mission_name}/>
                    </div>)
            }
        </>
    )
}