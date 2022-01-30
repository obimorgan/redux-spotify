import { Col } from 'react-bootstrap'
import './Headers.css'
const Header = ({ props }) => {
    return (
        <Col>
            <h2 className=" header mt-4">{props}</h2>
        </Col>
    )
}
export default Header
