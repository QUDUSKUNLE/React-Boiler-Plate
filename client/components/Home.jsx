import React from 'react';

class Home extends React.Component{
  render(){
    return(
        <div>
          <div className="container">
						<div className="row">
							<div className='col-md-6'>
								<p>PostIt
									<small>
										<i>App</i>
									</small>
										&nbsp;allows friends to come together and share vital informtion
								</p>
							</div>
							<div className="col-md-5 col-md-offset-1">
								<div className='row'>
									<div className='col-md-12'>
										<h5>Create an account</h5>
										<form onSubmit={this.onSubmit}>
											<div className="form-group">
												<label htmlFor='email'>Email</label>
												<input id='email' type="email"
													className="form-control" placeholder="johndoe@example.com"
													name='email' required />
											</div>
											<div className="form-group">
												<label htmlFor='username'>Username</label>
												<input id='username' type="text"
													className="form-control" placeholder="johndoe"
													name='username' required />
											</div>
											<div className="form-group">
												<label htmlFor='password'>Password</label>
												<input id='pass' type="password"
													className="form-control" placeholder="********"
													name='password' required />
											</div>
											<div className="form-group">
												<label htmlFor='conf_password'>Confirm Password</label>
												<input id='conf_password' type="password"
													className="form-control" placeholder="********"
													name='conf_password' required />
											</div>
											<button type="submit" className="btn btn-success form-control">Sign up</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
        </div>
    )
  }
};

export default Home;