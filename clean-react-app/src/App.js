import './App.css';
import {Routes,Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import UserPosts from "./components/UserPosts/UserPosts";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                    </Route>




                </Route>
            </Routes>


        </div>
    );
}

export default App;
