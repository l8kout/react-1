import {Link, Routes, Route} from "react-router-dom";
import {Home} from "./components/home/Home"
import {Layout} from "./components/layout/Layout";
import {About} from "./components/about/About";

const App = () => {
    return (
        <div>
            <h2>menu</h2>
            <ul>
                <li>
                    <Link to={'/'}>home</Link>
                </li>
                <li>
                    <Link to={'/layout'}>layout</Link>
                </li>
                <li>
                    <Link to={'/about'}>about</Link>
                </li>

            </ul>

            <div>
                <h2>view</h2>
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/layout'} element={<Layout/>} />
                    <Route path={'/about'} element={<About/>} />
                </Routes>
            </div>

        </div>


    );
};

export default App;