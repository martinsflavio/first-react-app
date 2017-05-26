import React from "react";
import PropTypes from 'prop-types';
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home} from './components/Home';

class App extends React.Component {
  render() {

    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Header/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Home name={"Flavio"} initialAge={27}/>
            </div>
          </div>
        </div>
    );
  }
}

render(<App/>,window.document.getElementById("app"));