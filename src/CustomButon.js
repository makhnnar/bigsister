import React, { 
  Component 
} from 'react';
import './CustomButon.css';

class CustomButon extends Component {
  render() {
    const {
      title
    } = this.props;
    return (
      <div className="Btn">

          <p className="Texto">{title}</p>

      </div>
    );
  }
}

export default CustomButon;
