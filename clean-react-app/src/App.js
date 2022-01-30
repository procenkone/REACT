import {Routes, Route} from 'react-router-dom'
import './App.css';
import Layout from "./components/Layout/Layout";
import Cars from "./components/Cars/Cars";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import PostsByUser from "./components/PostsByUser/PostsByUser";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'cars'} element={<Cars/>}/>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<PostsByUser/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
