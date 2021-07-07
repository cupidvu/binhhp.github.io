import React from "react";
import Typed from "typed.js";

class TypedSpeedString extends React.Component {
    componentDidMount() {
      const { strings } = this.props;
      //Option time type
      const options = {
        strings: strings,
        typeSpeed: 30,
        backSpeed: 50,
        startDeplay: 200,
        backDeplay: 1000,
        loop: true,
        contentType: 'html'
      };
      
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
      this.typed.destroy();
    }
  
    render() {
      return (
        <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
      );
    }
  }

  export default TypedSpeedString;