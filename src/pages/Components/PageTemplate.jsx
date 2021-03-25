import React, { Component } from 'react'
import {style} from '../styles'

class Page extends Component {
    state = {  }


    render() { 
        return ( 
            <div
                style={{
                    // display:this.state.display?'block':'none',
                    visibility:this.props.show?'visible':'hidden',
                    // transition:'all .5s ease',
                    position:'absolute',
                    top:'105px',
                    left:'0',
                    bottom: '0',
                    width:'100%',
                    // height:'100vh',
                    color:'rgba(255,255,255,1)',
                    overflow:'hidden',
                    // ...this.props.style,
                }}
            >
                <div
                    style={{
                        position:'absolute',
                        // top:'30px',
                        top: '40%',
                        left:'30px',
                        maxWidth:'600px',

                        // ANIMATION
                        // status, no middle vertically
                        // transform:this.props.show?'translate(0,0%)':'translate(0,calc(40px))',
                        // opacity:this.props.show?'1':'0',
                        // transition:`all .5s ease, opacity .3s ease ${this.props.show?'.2s':''}`,
                        // animation:this.props.show?'appear-top .5s ease':'',

                        // ANIMATION
                        transform:this.props.show?'translate(0,-50%)':'translate(0,calc(-50% - 40px))',
                        opacity:this.props.show?'1':'0',
                        transition:`all .5s ease, opacity .3s ease ${this.props.show?'.2s':''}`,
                        animation:this.props.show?'appear .5s ease':'',

                        // animation:this.props.show?style.contentEnter:style.contentLeave,
                    }}
                >
                    
                    {this.props.children}

                </div>
                
            </div>
         );
    }
}
 
export default Page;