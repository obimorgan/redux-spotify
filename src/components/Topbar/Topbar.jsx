import "./Topbar.css"
import { BsArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { IconContext } from 'react-icons'


const Topbar = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-between mt-3">
                <Col className="arrows d-flex">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "30px" }}>
                        <div className="pr-3"
                            onClick={() => window.history.back()}
                        >
                            <BsArrowLeftCircleFill />
                        </div>
                        <div
                            onClick={() => window.history.go(1)}
                        >
                            <BsFillArrowRightCircleFill />
                        </div>
                    </IconContext.Provider>
                </Col>

                <Col className="d-flex justify-content-end" >
                    <img className="dropdown_img d-flex align-items-center" src="" alt="" />
                    <DropdownButton
                        menuAlign="right"
                        title="spotthedot9"
                        id="dropdown-menu-align-right"
                        variant="dark"
                        size="sm"

                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </Container>
    )
}

export default Topbar