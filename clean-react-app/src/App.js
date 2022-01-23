import {Routes, Route} from 'react-router-dom'

import './App.css';
import Layout from "./components/Layout/Layout";
import UsersPages from "./pages/UsersPages/UsersPages";
import PostsPages from "./pages/PostsPages/PostsPages";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import PostsDetails from "./components/PostsDetails/PostsDetails";
import Comments from "./components/Comments/Comments";
import Albums from "./components/Albums/Albums";
import Photos from "./components/Photos/Photos";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Layout/>}>

                    <Route path={"users"} element={<UsersPages/>}>

                        <Route path={":id"} element={<UserDetails/>}>
                            <Route path={":postsId"} element={<Posts/>}/>
                        </Route>

                        <Route path={":id/albums"} element={<Albums/>}>
                            <Route path={":albumsId/photos"} element={<Photos/>}/>
                        </Route>

                    </Route>

                    <Route path={"posts"} element={<PostsPages/>}>
                        <Route path={":id"} element={<PostsDetails/>}>
                            <Route path={":comments"} element={<Comments/>}/>
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
