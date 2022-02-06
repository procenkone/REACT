import './App.css';
import {Routes, Route} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {MoviesPage} from "./Containers";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout>
                    <MoviesPage/>
                </Layout>}>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
