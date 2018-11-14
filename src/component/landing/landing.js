import React from 'react';
import { Image, Grid, Col, Row } from 'react-bootstrap';
import Slideshow from '../slideshow/index.js';

import ActionButton from '../action-button/actionButton';

export default class LandingContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="profile">
        <div>
          <Grid>
            <Row >
              <Col xs={12} sm={12} className="main-section">
                <Slideshow className="slideshow" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4} className="sidebar-section">
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
                <p> this is where our buttons will go</p>
                <ActionButton src="http://placehold.it/250x250" api={this.props.api} query='player' />
                <ActionButton src="http://placehold.it/250x250" api={this.props.api} query='coach' />
                <ActionButton src="http://placehold.it/250x250" api={this.props.api} query='team' />
              </Col>
            </Row>
          </Grid>
        </div>
      </section >
    );
  }

}

