import './App.css';
import {Routes, Route} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {MoviesPage} from "./Containers";
import {GenresPage, MovieInfo} from "./components";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index  element={<MoviesPage/>}/>
                    <Route path={'/movie/:id'} element={<MovieInfo/>}/>
                    <Route path={'/genreList/:genreId'} element={<GenresPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
