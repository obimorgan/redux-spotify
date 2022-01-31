import { Card, Col } from 'react-bootstrap'
import './Cards.css'
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    homeData: state.data.home.slice(0, 8)
})

const CardsRect = ({ homeData }) => {
    console.log({ homeData })
    return (
        <div className="d-flex flex-wrap card_wrapper">
            { homeData && homeData.map(data => (
                <Col xs={6} md={4}>
                    <div className="card_rectangle d-flex align-items-center mt-4">
                        <Card.Img variant="bottom" src={data.artist.picture_small} />
                        <div className="ml-3">
                            <Card.Title> {data.artist.name}</Card.Title>
                        </div>
                    </div>
                </Col>
            ))}
        </div>
    )
}
export default connect(mapStateToProps)(CardsRect)