import NavBar from './components/NavBar';
import ProfileCard from "./components/ProfileCard";
import ItemListContainer from './components/ItemListContainer';
import "bulma/css/bulma.css"
import CortadoImg from "./components/img/Cortado.png"
import EspressoImg from "./components/img/espresso.png"
import LatteImg from "./components/img/Latte.png"
import IconImg from "./components/img/Icon.png"
function App() {
    const items = [
        { id: 1, name: 'Cortado', description: 'Esto es un Cortado,  nivel de cafe medio' },
        { id: 2, name: 'Espresso', description: 'Esto es un  Espresso, nivel de cafe alto' },
        { id: 3, name: 'Latte', description: 'Estp es un Latte, nivel de cafe bajo' },
    ];

    return (
        <div className="container">
            <NavBar img={IconImg}/>
            <h1 className="title is-1">Cafes</h1>
            <div className="columns">
                <ProfileCard titulo="Cortado" img={CortadoImg} item={items[0]}/>
                <ProfileCard titulo="Espresso" img={EspressoImg} item={items[1]}/>
                <ProfileCard titulo="Latte" img={LatteImg} item={items[2]}/>
            </div>
        </div>
    );
}


export default App;