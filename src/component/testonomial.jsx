import { useState } from "react";
import { Card } from "react-bootstrap";
import first from './images/firstclients.jpg';
import second from './images/secondclient.jpg';
import third from'./images/thirdclient.jpg';
const Testnomail=(props)=>{
    console.log(props.send)
    const [age,setdata]=useState(props.send)
    return(
         <>
               <div className="container">
                <div className="row">
                    {age.map(data =>
                        <div className="col-md-4">
                        <Card>
                            <Card.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis aspernatur placeat facilis debitis saepe quaerat illum nobis neque quam rerum ratione a voluptatibus fuga, quibusdam obcaecati expedita assumenda, delectus nulla blanditiis? Repudiandae obcaecati voluptatem praesentium corporis temporibus veniam nemo!
                            </Card.Body>
                            <Card.Footer>
                               <Card.Img src={data.image} style={{width:"100px",height:"100px",borderRadius:"50%"}}/>
                                <label className="text-muted"style={{display:"block"}} ><b>{data.name}</b></label>  
                                <label className="text-muted"style={{display:"block",fontSize
                                    :"0.5rem"}} >{data.post}</label>                       
                            </Card.Footer>
                        </Card>
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Testnomail;