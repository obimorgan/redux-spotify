import { Card, Col } from 'react-bootstrap'
import './Cards.css'
import { connect } from "react-redux"
import { setHomeAction } from '../../redux/actions'
import { useEffect, useState } from 'react'

// const mapStateToProps = (state) => ({
//     homeData: state.data.home
// })

const mapDispatchToProps = (dsipatch) => ({
    setHome: (query) => { dsipatch(setHomeAction(query)) }
})
const Cards = ({ setHome, homeData }) => {

    const [query, setQuery] = useState("rock")

    useEffect(() => {
        setHome(query)
    }, [])

    return (
        <>
            {/* { homeData && homeData.map(data => (
                <Col md={3}>
                    <div className="cards d-flex justify-content-center align-items-center">
                        <div className="inner_cards flex-collumn">
                            <Card.Img variant="top" src={data.album.cover} />
                            <div>{data.title}</div>
                            <div>{data.artist}</div>
                        </div>
                    </div>
                </Col>
            ))} */}
            <Col md={3}>
                <div className="cards d-flex justify-content-center align-items-center">
                    <div className="inner_cards flex-collumn">
                        <Card.Img variant="top" />
                        <div>Hello</div>
                        <div>data</div>
                    </div>
                </div>
            </Col>
        </>
    )
}

// export default connect(mapStateToProps, mapDispatchToProps)(Cards)
export default connect(s => ({}), mapDispatchToProps)(Cards)