import { Card, Col } from 'react-bootstrap'
import './Cards.css'
import { connect } from "react-redux"
import { setHomeAction } from '../../redux/actions'
import { useEffect, useState } from 'react'

const mapStateToProps = (state) => ({
    homeData: state.data.home.slice(0, 12)
})

const mapDispatchToProps = (dsipatch) => ({
    setHome: (query) => { dsipatch(setHomeAction(query)) }
})
const Cards = ({ setHome, homeData }) => {

    const [query, setQuery] = useState("rock")

    useEffect(() => {
        setHome(query)
    }, [])

    return (
        <div className="card_wrapper d-flex flex-wrap">
            {homeData && homeData.map(data => (
                <Col md={3.2}>
                    <div className="cards d-flex justify-content-center align-items-center my-2 ml-4">
                        <div className="inner_cards flex-collumn">
                            <Card.Img variant="top" src={data.artist.picture_small} />
                            <div>{data.title}</div>
                            <div>{data.artist.name}</div>
                        </div>
                    </div>
                </Col>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
// export default connect(s => ({}), mapDispatchToProps)(Cards)