import { Component } from "react";
import Wrapper from "../../Ui/Wrapper/Wrapper";

class Input extends Component {
    render() {
        return (
            <Wrapper>
               <input 
               placeholder={this.props.placeholder}
               ref={this.props.propsRef} 
               type={this.props.type} 
               onChange={this.props.onChange} 
               className={this.props.className}
               />
               <br />
            </Wrapper>
        )
    }
}

export default Input