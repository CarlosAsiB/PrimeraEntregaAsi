import NavBar from './components/NavBar';
import ProfileCard from "./components/ProfileCard";
import "bulma/css/bulma.css"
import CortadoImg from "./components/img/Cortado.png"
import EspressoImg from "./components/img/espresso.png"
import LatteImg from "./components/img/Latte.png"
import IconImg from "./components/img/Icon.png"
function App() {
    return (
        <div className="container">
            <NavBar img={IconImg}/>
            <h1 className="title is-1">Cafes</h1>
            <div className="columns">
                <ProfileCard titulo="Cortado" img={CortadoImg}/>
                <ProfileCard titulo="Espresso"img={EspressoImg}/>
                <ProfileCard titulo="Latte" img={LatteImg}/>
            </div>
        </div>
    );
}

export default App;