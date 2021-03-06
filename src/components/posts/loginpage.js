import React,{Component} from 'react';

class LoginPage extends Component {
    
    render (){
         return(
             
            <div class="page login-page">
            <div class="container d-flex align-items-center"/>
              <div class="form-holder has-shadow">
                <div class="row">
                 
                  <div class="col-lg-6">
                    <div class="info d-flex align-items-center">
                      <div class="content">
                        <div class="logo">
                          <h1>Dashboard</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                 
                  <div class="col-lg-6 bg-white">
                    <div class="form d-flex align-items-center">
                      <div class="content">
                        <form id="login-form" method="post">
                          <div class="form-group">
                            <input id="login-username" type="text" name="loginUsername" required="" class="input-material"/>
                            <label for="login-username" class="label-material">User Name</label>
                          </div>
                          <div class="form-group">
                            <input id="login-password" type="password" name="loginPassword" required="" class="input-material"/>
                            <label for="login-password" class="label-material">Password</label>
                          </div>
                          <a id="login" href="index.html" class="btn btn-primary">Login</a>
                       </form>
                        <a href="#" class="forgot-pass">Forgot Password?</a><br></br><small>Do not have an account? </small>
                        <a href="register.html" class="signup">Signup</a>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
         );
     }
 }
 export default LoginPage;