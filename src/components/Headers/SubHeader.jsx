import './Headers.css'
import Col from "react-bootstrap/Col"
const SubHeader = ({ props }) => {
    return (
        <Col>
            <h4 className=" sub_header mt-4">{props}</h4>
        </Col>
    )
}
export default SubHeader