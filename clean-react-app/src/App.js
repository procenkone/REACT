import './App.css';
import {Routes, Route} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {MoviesPage} from "./Containers";
import {GenresPage, MovieInfo, OrderdescPage, TvPage} from "./components";
import SearchPage from "./components/SearchPage/SearchPage";
import LatestPage from "./components/LatestPage/LatestPage";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index  element={<MoviesPage/>}/>
                    <Route path={'/movie/:id'} element={<MovieInfo/>}/>
                    <Route path={'/genreList/:genreId'} element={<GenresPage/>}/>
                    <Route path={'/search'} element={<SearchPage/>}/>
                    <Route path={'/latest'} element={<LatestPage/>}/>
                    <Route path={'/tv'} element={<TvPage/>}/>
                    <Route path={'/orderdesc'} element={<OrderdescPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
