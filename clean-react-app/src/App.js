import css from './App.module.css';
import {Routes,Route} from 'react-router-dom'
function App() {

    return (
        <div className={css.header}>
            <a href={'/home'}>Home</a>
            <a href={'/users'}>Users</a>
            <a href={'/posts'}>Posts</a>
            <a href={'/about'}>About</a>
        </div>

        <Routes/>
    );
}

export default App;
