import './App.css';
import {Routes,Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import UserPosts from "./components/UserPosts/UserPosts";
import Posts from "./components/Posts/Posts";
import PostsDetails from "./components/PostsDetails/PostsDetails";
import Comments from "./components/Comments/Comments";

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

                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':idPosts'} element={<PostsDetails/>}>
                            <Route path={'comments'} element={<Comments/>}/>
                        </Route>
                    </Route>

                </Route>
            </Routes>


        </div>
    );
}

export default App;
