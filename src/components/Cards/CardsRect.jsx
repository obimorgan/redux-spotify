import { Card, Col } from 'react-bootstrap'
import './Cards.css'
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    homeData: state.data.home
})

const CardsRect = () => {
    return (
        <>
            <Col xs={6} md={4}>
                <div className="card_rectangle d-flex align-items-center mt-4">
                    <Card.Img variant="bottom" src="holder.js/100px160" />
                    <div className="ml-3">
                        <Card.Title> Liked</Card.Title>
                    </div>
                </div>
            </Col>
        </>
    )
}
export default connect(mapStateToProps)(CardsRect)