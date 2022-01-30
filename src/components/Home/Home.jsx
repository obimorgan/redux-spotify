import { Container } from 'react-bootstrap'
import Player from '../Player/Player'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import Header from '../Headers/Header'
import SubHeader from '../Headers/SubHeader'
import CardsRect from '../Cards/CardsRect'
import Cards from '../Cards/Cards'
import './Home.css'


const Home = () => {
    return (
        <>
            <div className="app-container">
                <Sidebar />
                <Player />
                <div className="app-frame">
                    <Container>
                        <Topbar />
                        <Header props={"Good evening"} />
                        <CardsRect />
                        <SubHeader props={"Shows you might like"} />
                        <Cards />
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Home