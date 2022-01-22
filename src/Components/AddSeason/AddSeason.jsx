import React from "react";

class AddSeason extends React.Component {
    constructor(props) {
        super(props)
        this.state = { nameShow : '', datePublish : '', numSeason : '', isEnded : ''};
        this.Print = this.Print.bind(this);
        this.ChangeName = this.ChangeName.bind(this);
        this.ChangeDate = this.ChangeDate.bind(this);
        this.ChangeSeason = this.ChangeSeason.bind(this);
        this.ChangeIsEnded = this.ChangeIsEnded.bind(this);
    }
    ChangeName(event){
        this.state.nameShow = event.target.value;
    }
    ChangeDate(event){
        this.state.datePublish = event.target.value;
    }
    ChangeSeason(event){
        this.state.numSeason = event.target.value;
    }
    ChangeIsEnded(event){
        this.state.isEnded = event.target.value;
    }
    Print() {
        this.setState({ nameShow: this.state.nameShow , datePublish : this.state.datePublish,numSeason: this.state.numSeason ,isEnded: this.state.isEnded })
    }
    render() {
        let{nameShow,datePublish,numSeason,isEnded} = this.state
        return (
            <div>
                name show : <input onChange={this.ChangeName} type={"text"} /><br></br>
                date publish : <input onChange={this.ChangeDate} type={"date"} /><br></br>
                number Season : <input onChange={this.ChangeSeason} type={"number"} /><br></br>
                is ended ? : <input onChange={this.ChangeIsEnded} type={"text"} /><br></br>
                <button onClick={this.Print}>Print</button>
                <p>{nameShow}</p>
                <p>{datePublish}</p>
                <p>{numSeason}</p>
                <p>{isEnded}</p>
            </div>
        )
    }
}
export default AddSeason;