 import React,{Component} from 'react';

 class Footer extends Component {
     
    render (){
         return(
            <footer className="main-footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <p>Your company &copy; 2017-2019</p>
                </div>
                <div className="col-sm-6 text-right">
                  <p>Design by <a href="https://bootstrapious.com/admin-templates" className="external">Bootstrapious</a></p>
                </div>
              </div>
            </div>
          </footer>
         )
     }
 }
 export default Footer