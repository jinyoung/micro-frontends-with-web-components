import * as React from 'react';
import PropTypes from 'prop-types';

export class ExampleComponent extends React.Component {

  
  static propTypes = {
    name: PropTypes.string,
    onHelloEvt: PropTypes.func,
    mode: PropTypes.string,
  }

  static defaultProps = {
    name: "Product"
  }

  constructor (props){
    super(props);
    
    this.placeOrder = this.placeOrder.bind(this);
  }

  placeOrder(){
    new BroadcastChannel("main").postMessage({type: "OrderPlaced", productId: this.props.name})
  }

  render() {
    const { name, onHelloEvt } = this.props;
    const placeOrder = this.placeOrder;
    
    if (this.props.mode === 'small')
    return (
      <div className="exampleComponent">
        <img height="50" src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" alt="React Logo" className="logo" />
      </div>
    )
    else
    return (
      <div className="exampleComponent">
        <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" alt="React Logo" className="logo" />
        <p>Product Name: <strong>{name}</strong></p>
        <button type="submit" className="btn btn-secondary" onClick={onHelloEvt}>Say hello</button>
        <button type="submit" className="btn btn-secondary" onClick={placeOrder}>Place an Order</button>
      </div>
    )
  }
}