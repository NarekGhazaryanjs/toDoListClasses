import { Component } from "react";

class Input extends Component {
    render() {
        return (
            <input 
            ref={this.props.propsRef} 
            type={this.props.type} 
            onChange={this.props.onChange} 
            />
        )
    }
}

export default Input