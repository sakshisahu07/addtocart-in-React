
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Home=()=>{
  const [mydata,setMydata]=useState([]);
  const loadData=()=>{
    let api="http://localhost:3000/product";
    axios.get(api).then((res)=>{
      setMydata(res.data);
    })
  }
  useEffect(()=>{
    loadData();
  },[])
  const ans=mydata.map((key)=>{
    return(
      <>
      <Card style={{ width: "250px", marginLeft:"10px",marginRight:"10px",marginBottom:"20px" }}>
      <Card.Img variant="top" src={"public/images/"+key.images} style={{width:"100%",height:"300px"}} />
      <Card.Body>
        <Card.Title style={{color:"black",fontSize:"20px"}}>
          <a href='#'>{key.name}</a>
        </Card.Title>
        <Card.Text>
          {key.description}
        </Card.Text>
        <Button variant="primary">Add to Cart </Button>
      </Card.Body>
    </Card>
    </>
    )
  })
    return(
        <>
           <Carousel>
      <Carousel.Item>
        <a href="#"> <img src="public/images/p3.jpg"  width="100%" height="650px" /> </a>
        
        <Carousel.Caption>
          <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <a href="#"> <img src='public/images/p2.jpg' width="100%" height="650px" /> </a>
        
         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <a href="#"> <img src='public/images/p3.jpg' width="100%" height="650px" /> </a>
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>

       <Carousel.Item>
       <a href="#"> <img src='public/images/p4.jpg' width="100%" height="650px" /> </a>
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>

       <Carousel.Item>
       <a href="#"> <img src='public/images/p5.jpg' width="100%" height="650px" /> </a>
         <Carousel.Caption>
           <h3>Third slide label</h3>
         <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>

      <div id='cartdata' style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",width:"100%",margin:"auto"}}>
      {ans}
      </div>

        </>
      
    )
}
export default Home;