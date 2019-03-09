import React from 'react';
import axios from "axios";

import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';

import './Heroes.module.scss';
import {Route, Switch} from "react-router-dom";
import {Hero} from "./hero";

export class Heroes extends React.Component {

  state = {
    heroes: []
  }

  componentDidMount() {
    this.getHeroes();
  }



  getHeroes = async () => {
    let response = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    this.setState({
      heroes: response.data
    });

    console.log(this.state);
  }

  handleClick = (e, hero_id) => {
    e.preventDefault();
    this.props.history.push(`/heroes/hero/${hero_id}`)
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/heroes/hero/:hero_id" component={Hero}></Route>
        </Switch>
        <ul className="img-box">
          {
            this.state.heroes.map(hero => (
              <li key={hero.hero_id} className="row align-items-center m-0">
                <div className="row">
                  {this.state.heroes.map(hero => (
                    <div className="col-6 col-sm-4 col-md-3 p-1 p-sm-2 p-md-3" key={hero.hero_id} onClick={(e) => this.handleClick(e, hero.hero_id)}>
                      <Card>
                        <CardImg top width="100%"
                                 src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                                 style={{width: '100%'}} alt={hero.name}/>
                        <CardBody>
                          <CardTitle>{hero.name}</CardTitle>
                          <CardSubtitle>email: {hero.email}</CardSubtitle>
                          <CardText>sex: {hero.sex}</CardText>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
                <span className="col">{hero.name}</span>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}