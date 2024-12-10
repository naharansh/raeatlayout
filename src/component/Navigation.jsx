import { Navbar , Nav, NavDropdown } from "react-bootstrap";
const Navi=()=>{
    return(
        <>
            <Navbar expand="lg" fixed="top" bg="dark" data-bs-theme="dark"  >
                <div className="container">
                    <Navbar.Brand href="#" as="h1">EstateAgency</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                                <Nav.Link href="#">home</Nav.Link>
                                <Nav.Link href="#">About</Nav.Link>
                                <Nav.Link href="#">Services</Nav.Link>
                                <Nav.Link href="#">Properties</Nav.Link>
                                <Nav.Link href="#">Agents</Nav.Link>
                                <NavDropdown title="dropdown" >
                                    <NavDropdown.Item>Deepdown1</NavDropdown.Item>
                                    <NavDropdown.Item>Deepdown2</NavDropdown.Item>
                                    <NavDropdown title="deepdown" drop="s">
                                    <NavDropdown.Item>Deepdown1</NavDropdown.Item>
                                    <NavDropdown.Item>Deepdown2</NavDropdown.Item>
                                    <NavDropdown.Item>Deepdown3</NavDropdown.Item>
                                    <NavDropdown.Item>Deepdown4</NavDropdown.Item>
                                    <NavDropdown.Item>Deepdown5</NavDropdown.Item>

                                    </NavDropdown>
                                    <NavDropdown.Item>Deepdown3</NavDropdown.Item>
                                    <NavDropdown.Item>Deepdown4</NavDropdown.Item>

                                </NavDropdown>

                            </Nav>  
                    </Navbar.Collapse>
                </div>
                </Navbar>

        </>
    )
}   
export default Navi;
