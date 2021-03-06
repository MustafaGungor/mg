import * as React from "react";
import {TextArea} from "mg-ui";

export default class TextAreaExample extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            textArea : ""
        }
    }
    render(){
        return <TextArea
            name={"textArea"}
            value={this.state.textArea}
            label={"TextArea Example"}
            valid
            onChange={this.handleChange.bind(this)}
        />
    }
    handleChange(e){
        let state = [];
        state[e.target.name] = e.target.parsedValue != undefined ? e.target.parsedValue : e.target.value;
        this.setState(state);
        this.forceUpdate();
    }
}
