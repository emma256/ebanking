import React,{Component} from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
    
   render (){
        return(
           <nav className="side-navbar">
          
          <div className="sidebar-header d-flex align-items-center">
            <div className="avatar"><img src="img/avatar-1.jpg" alt="..." className="img-fluid rounded-circle"/></div>
            <div className="title">
              <h1 className="h4">Mark Stephen</h1>
              <p>Web Designer</p>
            </div>
          </div>
          
         <span className="heading">Main</span>
          <ul>
                    <li className="active"><Link to="/"> <i className="icon-home"></i>Home </Link></li>
                    <li><Link to="/addpost"> <i className="icon-grid"></i>Add Post </Link></li>
                    <li><Link to="/viewposts"> <i className="fa fa-bar-chart"></i>View Posts </Link></li>
                    <li><Link to="/editpost"> <i className="icon-padnote"></i>editpost</Link></li>
                    <li><Link to="/loginpage"> <i className="fa fa-bar-chart"></i>loginpage</Link></li>
                    </ul>
        </nav>
        )
    }
}
export default Sidebar