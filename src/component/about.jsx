import { Image } from "react-bootstrap";

const About=()=>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{textAlign:"justify",padding:"10px",fontSize:"1.2rem",fontFamily:"aerial",wordSpacing:"10px"}}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio neque illo, exercitationem ea quas corporis natus necessitatibus cum ducimus doloribus minus suscipit inventore? Eaque assumenda ab cupiditate itaque est! Dolor ipsa velit praesentium minima asperiores eos distinctio molestias eaque!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, earum iure! Laboriosam doloribus numquam veniam harum quos illo cumque error quasi molestiae expedita magnam ut doloremque, sequi temporibus delectus vel! Expedita culpa doloribus ut dolorum rem velit perspiciatis laboriosam, error iusto enim, labore exercitationem iste magnam ipsam voluptas autem temporibus dolore sequi tenetur! Magnam provident quaerat, quisquam ab soluta ut et, dolor est consequatur, laboriosam pariatur voluptate nulla quae. Molestiae sed pariatur nihil consectetur delectus recusandae magni placeat iste porro neque dignissimos quo aliquam explicabo, voluptate similique beatae non corrupti sit laudantium! Facere dolorem totam consectetur numquam laudantium impedit qui?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto cumque, animi, quaerat amet necessitatibus consequuntur ipsa nihil consequatur commodi optio, recusandae libero alias impedit culpa eveniet quasi assumenda? Tempora, suscipit.</p>
                    </div>
                    <div className="col-md-6">
                        <Image src="https://picsum.photos/id/283/200/300" style={{width:"80%",marginBlock:"250px"}} rounded />
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;
