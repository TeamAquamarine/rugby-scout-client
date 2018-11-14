import React from 'react';
import { connect } from 'react-redux';
import { MemoryRouter, Switch, Route, BrowserRouter } from 'react-router-dom';



import LandingContainer from './landing/landing';
import AuthContainer from './auth-form/auth-form';
import SearchResultsContainer from './search-results/search-results';
import ProfileContainer from './profile/profile';
import AboutContainer from './about/about';
import CustomNav from './navbar/navbar';

import * as route from '../actions/route';
import * as profileActions from '../actions/profile';
import { cookieFetch, cookieDelete } from '../lib/util';


export class App extends React.Component {

  componentDidMount() {
    const token = cookieFetch('token');
    if (token) {
      localStorage.setItem('token', token);
      cookieDelete('token');
    }
  }

  render() {
    return (
      <section className="app">
        <BrowserRouter>
          <div>
            <header>
              <CustomNav actions={this.props.actions} />
            </header>
            <MemoryRouter>
              <Switch location={{ pathname: this.props.route }} >
                <Route path='/signup' component={AuthContainer} />
                <Route path='/login' component={AuthContainer} />
                <Route path='/search-results' component={SearchResultsContainer} />
                <Route path='/profile/me' render={(props) => <ProfileContainer {...props} profileAction={this.props.profileAction} />} />
                <Route path='/profile' component={ProfileContainer} />
                <Route path='/about' component={AboutContainer} />
                <Route path='/' component={LandingContainer} />
              </Switch>
            </MemoryRouter>
          </div>
        </BrowserRouter>
      </section>
    );
  }

}

const mapStateToProps = state => ({
  route: state.route,
});

const mapDispatchToProps = dispatch => ({
  actions:
  {
    goToAbout: () => dispatch(route.switchRoute('/about')),
    goToLogin: () => dispatch(route.switchRoute('/login')),
    goToSignup: () => dispatch(route.switchRoute('/signup')),
    goToLanding: () => dispatch(route.switchRoute('/')),
    goToProfile: () => dispatch(route.switchRoute('/profile/me')),
  },
  profileAction:
  {
    createProfile: (profile) => dispatch(profileActions.profileCreateRequest(profile)),
    fetchProfile: (profile) => dispatch(profileActions.profileFetchRequest(profile)),
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);