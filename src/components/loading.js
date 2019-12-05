import React, { PureComponent } from "react";
import { Spring } from "react-spring/renderprops";

class Loading extends PureComponent {
  static style = ({ props }) => ({
    border: "7px solid white",
    borderRadius: "100%",
    height: props.diameter,
    left: "50%",
    opacity: props.opacity,
    position: "absolute",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    width: props.diameter,
  });

  handleRest = () => {
    this.forceUpdate();
  };

  render() {
    return (
        <div style={{backgroundColor:'rgba(0,0,0,0.8)', height:'100%', width:'100%', zIndex: 100, position:'absolute', top:0, left:0}}>
            <Spring
                reset
                from={{ opacity: 1, diameter: 0 }}
                to={{ opacity: 0, diameter: 100 }}
                onRest={this.handleRest}
            >
                {props => <div style={Loading.style({ props })} />}
            </Spring>
        </div>
    );
  }
}

export default Loading;
