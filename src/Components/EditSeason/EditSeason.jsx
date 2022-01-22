// צרו קומפננטת מחלקה של עריכת עונה והציגו אותה ב APP.
// העבירו שם סדרה, עונה, תאריך יציאה והאם הסתיימה, מה APP לקומפוננטה.
// צרו קלטים של שם סדרה(טקסט), עונה(מספר), תאריך יציאה(תאריך) והאם הסתיימה(check-box).
// השתמשו בנתונים מהAPP כערכים התחלתיים לקלטים.
// צרו כפתור שמדפיס את המידע למסך.

import React from "react";

class EditSeason extends React.Component{
    constructor(props){
        super(props);
        this.state = {nameSeason : 'Bla', season : 'Bla' , datePublish : '00/00/0000' , isFinished : 'Bla'};
        this.ChangeName = this.ChangeName.bind(this)
        this.ChangeSeason = this.ChangeSeason.bind(this)
        this.ChangeDate = this.ChangeDate.bind(this)
        this.ChangeIsFinished = this.ChangeIsFinished.bind(this)
        this.ShowAll = this.ShowAll.bind(this)
    }
    ChangeName(event){
        this.state.nameSeason = event.target.value
    }
    ChangeSeason(event){
        this.state.season = event.target.value
    }
    ChangeDate(event){
        this.state.datePublish = event.target.value
    }
    ChangeIsFinished(event){
        this.state.isFinished = event.target.value
    }
    ShowAll(){
        this.setState({nameSeason : this.state.nameSeason,season : this.state.season,datePublish : this.state.datePublish,isFinished : this.state.isFinished})
    }
    render(){
        let {nameSeason,season,datePublish,isFinished} = this.state
        return(
            <div>
                name Season input <input onChange={this.ChangeName} type={"text"} />
                <p>name Season result : {nameSeason}</p>
                season input <input onChange={this.ChangeSeason} type={"number"}/>
                <p>season result : {season}</p>
                date publish input <input onChange={this.ChangeDate} type={"date"}/>
                <p>date publish result : {datePublish}</p>
                is finished input <input onClick={this.ChangeIsFinished} type={"checkbox"}/>
                <p>is finished result : {isFinished}</p>
                <button onClick={this.ShowAll}>Go</button>
            </div>
        )
    }
}

export default EditSeason;