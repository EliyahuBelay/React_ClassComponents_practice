import React from "react";

class Season extends React.Component{
    constructor(props){
        super(props);
        this.state = {numSeason:0,rating:7,views:33_445_347};
    }
    render(){
        let{numSeason,rating,views} = this.state//פירוק והרכבה
        return(
            <div>
                <p>{numSeason}</p>
                <p>{rating}</p>
                <p>{views}</p>
            </div>
        )
    }
}
export default Season; 