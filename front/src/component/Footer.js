import React, {Component} from 'react';
import '../styles/footer.css';

class Footer extends Component{
    constructor(props){
        super(props);
    }

render(){
    return(
        <footer className="mainfooter" role="contentinfo">
          <div className="footer-middle">
          <div className="container">
            <div className="row">
         
                <div className="col-md-12 text-center paddingFooter">
                    <h4>Follow Me</h4>
                    <ul className="social-network social-circle">
                     <li><a target="_blank" href="https://www.facebook.com/ShazeeTahirOfficial/" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                     <li><a target="_blank" href="https://www.linkedin.com/in/shahzaib-tahir-ab76b1185/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                    </ul>				
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 copy">
                    <p className="text-center">&copy; Copyright 2019 - Shazee Tahir.  All rights reserved.</p>
                </div>
            </div>
        
          </div>
          </div>
        </footer>
    
        )
    }
}

export default Footer;