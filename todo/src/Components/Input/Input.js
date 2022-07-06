import { Component } from "react";
import Wrapper from "../../Ui/Wrapper/Wrapper";

class Input extends Component {
    render() {
        return (
            <Wrapper>
               <input 
               ref={this.props.propsRef} 
               type={this.props.type} 
               onChange={this.props.onChange} 
               />
               <br />
            </Wrapper>
        )
    }
}

export default Input