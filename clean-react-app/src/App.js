import {Routes, Route} from 'react-router-dom'

import './App.css';
import Layout from "./components/Layout/Layout";
import Episodes from "./pages/EpisodesPage/Episodes";
import EpisodeDetails from "./components/EpisodeDetails/EpisodeDetails";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"episodes"} element={<Episodes/>}/>
                    <Route path={"episodes/:id"} element={<EpisodeDetails/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
