import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {Scoreboard} from "./Scoreboard";
import {Menu} from "./Menu";

export class Root extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Menu/>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/heroes"} component={Heroes} />
            <Route path={"/scoreboard"} component={Scoreboard} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}