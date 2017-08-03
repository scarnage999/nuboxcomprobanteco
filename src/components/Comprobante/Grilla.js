require('normalize.css/normalize.css');

import React from 'react';
import Cabecera from './Cabecera';
import Cuerpo from './Cuerpo';

class Grilla extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {
      data: {
        header: [],
        columns: [],
        items: []
      }
    }
  }

  componentDidMount(){
    let api = this.props.url
    fetch(api)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data: data })
      })
/*      .catch((error) => {
        console.log(error)
      })*/
  }

  render() {
    return (
      <div id="grid" className="modal-body">
        <div className="cnt-comprobante">

          <Cabecera data={this.state.data}/>
          <Cuerpo data={this.state.data}/>

        </div>
      </div>
    );
  }
}

Grilla.defaultProps = {
};

export default Grilla;
