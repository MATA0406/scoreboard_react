import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Home} from "./Home";
import {Heroes} from "./heroes/Heroes";
import Scoreboard from "./scoreboard/Scoreboard";
import {Menu} from "./Menu";


export class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Menu/>
          <div className="container" style={{backgroundColor: '#ffffff'}}>
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route path={"/heroes"} component={Heroes} />
              <Route path={"/scoreboard"} component={Scoreboard} />
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}