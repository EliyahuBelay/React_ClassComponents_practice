import React from "react";

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {likes : 0}; //create state and given key with a start value
        this.UpLikes = this.UpLikes.bind(this);// bind the function to the to the class
    }
    UpLikes(){
        let newLikes = this.state.likes + 1;//change the state and save in variable
        this.setState({likes : newLikes});//render the state 
    }
    render(){
        let {showName,rating,year} = this.props
        let {likes} = this.state;//destruction and rese..פירוק והרכבה יעני
        return(
            <div>
                <h1>{showName}</h1>
                <h1>{rating}</h1>
                <h1>{year}</h1>
                <button onClick={this.UpLikes}>Up</button>
                <h2>{likes}</h2>
            </div>
        )
    }
}

export default Show;