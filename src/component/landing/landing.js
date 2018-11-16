import React from 'react';
import { Image, Grid, Col, Row } from 'react-bootstrap';
import Slideshow from '../slideshow/slideshow.js';

import ActionButton from '../action-button/actionButton';

export default class LandingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.api.fetchTopTenRequest();
  }

  render() {
    console.log(this.props.results);

    return (
      <section className="profile">
        <div>
          <Grid>
            <Row >
              <Col xs={12} sm={12} className="main-section">
                <Slideshow className="slideshow" />
              </Col>
            </Row>
            <Row className="landing-row-2">
              <Col xs={0} sm={1}></Col>
              <Col xs={12} sm={2} className="sidebar-section">
                <ul>
                  <li>Player 1</li>
                  <li>Player 2</li>
                  <li>Player 3</li>
                  <li>Player 1</li>
                  <li>Player 2</li>
                  <li>Player 3</li>
                  <li>Player 1</li>
                  <li>Player 2</li>
                  <li>Player 3</li>
                </ul>
              </Col>
              <Col xs={12} sm={8}>
                <ActionButton className="landing-buttons" src="https://s3.amazonaws.com/rugbyscout-two/landingbuttons/coach.jpg" api={this.props.api} query='player' />
                <ActionButton className="landing-buttons" src="https://s3.amazonaws.com/rugbyscout-two/landingbuttons/player.jpg" api={this.props.api} query='coach' />
                <ActionButton className="landing-buttons" src="https://s3.amazonaws.com/rugbyscout-two/landingbuttons/team.jpg" api={this.props.api} query='team' />
              </Col>
              <Col xs={0} sm={1}></Col>
            </Row>
          </Grid>
        </div>
      </section >
    );
  }

}

