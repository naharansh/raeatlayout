import { Card, Col } from "react-bootstrap"
import './data.css'
import { useState } from "react"
const Cards = (props) => {
    const [set,setimage] = useState(props.send);
    return (
        <>
            <div className="container hel">
                <div className="row">
                    {
                        set.map(list => 
                                <div className="col-md-4">
                                <Card className="card">
                                   <div className="fier">
                                     <Card.Img src={list.image} className="ima" />
                                   </div>
                                    <Card.Header className="head">
                                        {list.name}
                                    </Card.Header>
                                    <Card.Body className="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati vero ab reiciendis illo dignissimos,
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                   
                </div>
            </div>
        </>
    )
}
export default Cards;