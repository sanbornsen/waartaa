import React, {Component, PropTypes} from 'react';
import {DocumentTitle} from 'react-document-title';
import Header from './../header/Header';

class LoginPage extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="bodycontent m-h-75">
          <div className="p-t-2">
            <div className="container">
              <div className="row">
                <h2 className="text-xs-center p-t-2 p-b-3">Start using waartaa today.</h2>
                <div className="col-md-6 m-x-auto text-xs-center">
                  <h4 className="p-b-3">Use an existing account</h4>
                </div>
                <div className="col-md-6 m-x-auto text-xs-center left-border">
                  <h4 className="p-b-3">Create a Waartaa account</h4>
                  <div className="col-md-10 col-md-offset-1">
                    <form id="create-account-form">
                      <div className="form-group row"><input type="text" className="form-control" id="full-name" placeholder="Full Name" /></div>
                      <div className="form-group row"><input type="text" className="form-control" id="email" placeholder="Email" /></div>
                      <div className="form-group row"><input type="password" className="form-control" id="password" placeholder="Password" /></div>
                      <div className="form-group row"><input type="password" className="form-control" id="password-repeat" placeholder="Password repeat" /></div>
                      <div className="form-group row"><button type="submit" className="btn btn-primary">Create Account</button></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage;
