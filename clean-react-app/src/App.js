import './App.css';
import {Routes, Route} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {MoviesPage} from "./Containers";
import {MovieInfo} from "./components";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index  element={<MoviesPage/>}/>
                    <Route path={'movie/:id'} element={<MovieInfo/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
