import { Card, Image } from "react-bootstrap";
import Icon from "@mdi/react"
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { useState } from "react";

import'./data.css'
const Agend=(props)=>{
    const [data,setdata]=useState(props.send)
    return(
        <>
            <div className="container">
                <div className="row">
                  {data.map(list =>
                              <div className="col-md-4">
                              <div>
                                  <Image src={list.ima} style={{width:"100%",padding:"40px",marginLeft:"5px"}}/>
                              </div>
                              <div style={{margin:"0px auto",width:"100%"}} > 
                                  <Card style={{marginTop:"-60px",padding:"5px", width:"300px", marginLeft:"40px"}}>
                                          <Card.Body>
                                          <h5>{list.name}</h5><hr/>
                                          <p style={{textAlign:"start",fontSize:"0.1rem",padding:"-31px"}}>{list.post}</p>
                                          <Icon path={mdiFacebook} size={1}  style={{paddingLeft:"3px"}}/>
                                          <Icon path={mdiInstagram} size={1} />
                                          <Icon path={mdiLinkedin} size={1} />
                                       
                                          </Card.Body>  
                                  </Card>
                              </div>
                          </div>  
                  )}
                </div>
            </div>
        </>
    )
}
export default Agend;