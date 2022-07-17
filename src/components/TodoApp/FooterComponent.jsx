import React, { Component } from "react";

class FooterComponent extends Component{
    render() {
        return (
            <footer className="footer-responsive  fixed-bottom" style={{backgroundColor:'#002776'}}>
                    <span style={{fontWeight:'bold', color:'white',position:'relative', height:10}}> All rights reserved 2022</span>
            </footer>
        )
    }

}

export default FooterComponent