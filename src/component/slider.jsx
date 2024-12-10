import Ima from"./images/—Pngtree—new homeowners couple stands proudly_5575667.jpg";
import'./data.css';
const Slide=(props)=>{
    return(
        <> 
            <div className='container-fluid gx-0'>
                <div className='row gx-0 '>                      
                    <div className="sheet" style={{    width: "100vw",
    height: "100vh",
    position: "absolute",
    zIndex: 100,
    backgroundColor: "#0000004a",
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column"}}>
                        <h3 style={{color:"white",marginLeft:"380px",fontSize:"1rem"}}>Doral, Florida</h3>
                        <h1 style={{alignSelf:"center",marginTop:"20px",color:"white",textTransform:"uppercase",wordSpacing:"10px"}}><span style={{color:"green"}}>247</span> Vitra Road three</h1>
                        <button style={{marginLeft:"380px",width:"200px",padding:"5px",borderRadius:"20px",outline:"1px solid green",border:"1px solid green",backgroundColor:"green",color:"white", }} className="foir">SALE|&#x24;12.000</button>
                    </div>
                        <img src={Ima} alt="" className='imgage' />
                </div>
            </div>
        </>
    )
}
export default Slide;