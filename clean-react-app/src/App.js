import {Routes, Route} from 'react-router-dom'

import './App.css';
import {Layout,UserDetails,Posts,PostsDetails,Comments,Albums,Photos} from './components/index'
import {UsersPages,PostsPages} from './pages/index'

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
