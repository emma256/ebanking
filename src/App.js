import React,{Component} from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './components/common/sidebar'
import Header from './components/common/header'
import Footer from './components/common/footer'
import HomePage from './components/common/homepage'

import AddPost from './components/posts/addPost';
import ViewPost from './components/posts/viewPost';
import EditPost from './components/posts/editpost';
import LoginPage from './components/posts/loginpage';

class App extends Component {
    
   render (){
        return(
          
          <div class="page">
          <Header/>
          
          <div class="page-content d-flex align-items-stretch">
          <Sidebar/>
              <div class="content-inner">
            
                <Route path="/" exact component={HomePage} />
                <Route path="/addpost" exact component={AddPost} />
                <Route path="/viewposts" exact component={ViewPost} />
                <section class="tables">
                <Route path="/editpost" exact component={EditPost} />
                </section> 
                <Route path="/loginpage" exact component={LoginPage} />
               
                <div class="main-footer">
            <Footer/>
            </div>
              </div> 
              </div>
        </div>
          
          
          
               
            
             
          
        )
    }
}
export default App