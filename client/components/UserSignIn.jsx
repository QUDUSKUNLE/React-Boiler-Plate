import React from 'react';
import {Link} from 'react-router-dom';

class SignIn extends React.Component{
  render(){
    return(
      <div>
        <div className="navbar navbar-default" role="navigation">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<h1 className="navbar-brand">
                PostIt<small>App</small>
              </h1>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li><Link to="/">Home</Link></li>
                <li><Link to="/user/broadcastboard">Chat Room</Link></li>
							</ul>
						</div>
					</div>
        </div>
        <div className="container">
					<div className="row">
						<div className="col-md-6 col-md-offset-3">
							<div className="row">
								<form className="col-md-6 col-md-offset-3" onSubmit={this.onSubmit}>
									<div className="form-group">
										<label htmlFor="email">Email</label>
										<input id="email" type="email"
											className="form-control" placeholder="johndoe@example.com"
											name="email" required />
									</div>
									<div className="form-group">
										<label htmlFor="password">Password</label>
										<input id="password" type="password"
											className="form-control" placeholder="*********"
											name="password" required />
									</div>
									<button type="submit" className="btn btn-success form-control" name="action">
										Sign in
									</button>
								</form>
							</div>
						</div>

					</div>
				</div>
      </div>
    )
  }
};

export default SignIn;