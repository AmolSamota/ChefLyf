import React from "react";
import "./home.css";
import { projectFirestore, projectStorage } from "../firebase/config";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineStar } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";


class Home extends React.Component {

    state = {
        recipes: null
      }
    
      componentDidMount(){
        console.log('mounted');
        projectFirestore.collection('recipes')
                         .get()
                         .then ( snapshot => {
                           const recipes = []
                           snapshot.forEach( doc => {
                             const data = doc.data()
                             recipes.push(data)
                           })
                           this.setState({ recipes: recipes })
                          //  console.log(snapshot)
                         })
                         .catch(error => console.log(error))
    
      }
    render(){
    return(
    <div>
        <div className="home">
            <h1 className="d">Welcome to ChefLyf</h1>
            {
                this.state.recipes && 
                this.state.recipes.map( recipes => {
                    return (
                    <div>
                        <Container>
                        
                            <hr className="border"></hr>
                             <Row className="pt-3 pb-5 align-items-center">

                                {/* first column */}
                                <Col xs={12} md={6}>

                                    <Row className="justify-content-center mb-2 mr-2 ">
                                        {<img className="img" src={recipes.coverPics[0]}></img> }
                                    </Row>

                                    <Row className="justify-content-center mb-2 mr-2 ">
                                        <Col xs={12} md={6}>
                                            <Row>
                                                <div className="justify-content-right mb-2 mr-2 ">
                                                <a href="">{ recipes.numOfLikes }<AiOutlineHeart /></a> &nbsp;
                                                  <a href="">{ recipes.numOfComments }<BiComment /></a> &nbsp;
                                                  <a href="">{ recipes.rating }<AiOutlineStar /></a>
                                                </div>

                                                <div className="justify-content-left mb-2 mr-2">
                                                <a href="">{ recipes.numOfBookmarks }<AiOutlineHeart /></a> &nbsp;
                                                  
                                                </div>
                                                  

                                            </Row>
                                        </Col>
                                    </Row>

                                </Col>





                                {/* second column */}
                                <Col xs={12} md={6}>
                                
                                    <Row className="justify-content-center mb-2 mr-2 ">
                                        <h1><p>{recipes.userName}</p></h1>
                                    </Row>

                                    <Row>
                                        <Col xs={12} md={4}>
                                            <Row className="justify-content-center mb-2 mr-2 ">
                                                <p>{recipes.cookTime}</p>
                                            </Row>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <Row className="justify-content-center mb-2 mr-2 ">
                                                <p>People Served: {recipes.peopleServed}</p>
                                            </Row>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <Row className="justify-content-center mb-2 mr-2 ">
                                                <p className="orange">Difficulty: {recipes.difficulty}</p>
                                            </Row>
                                        </Col>
                                            
                                    </Row>
                                    
                                    <Row className="justify-content-center mb-2 mr-2 ">
                                        <h5><p>{recipes.description}</p></h5>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                        
                        
                    </div>
                    )
                })
            }
        </div>
    </div>
    );
    }

};

export default Home;