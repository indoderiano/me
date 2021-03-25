import React, { Component } from 'react'
import Page from './Components/PageTemplate'
import Author from './Components/AuthorLogo'
import {style} from './styles'

class Intro extends Component {
    state = { 
        // display:false
     }

    // componentDidUpdate=()=>{
    //     if(this.props.show && this.state.display!==true){
    //         this.setState({display:true})
    //     }
    // }

    render() { 
        return ( 
            <div
                style={{
                    
                    visibility:this.props.show?'visible':'hidden',
                    transform:this.props.show?'translate(0,-50%)':'translate(0,calc(-50% - 40px))',
                    opacity:this.props.show?'1':'0',
                    transition:`all .5s ease, opacity .3s ease ${this.props.show?'.2s':''}`,
                    animation:this.props.show?'appear .5s ease':'',

                    position:'absolute',
                    top: '60px',
                    // top:'20%',
                    right: '30px',
                    // left:'30px',
                    // left:this.props.isIntro?'30px':'calc(100% - 30px)',
                    // transform: this.props.isIntro?'translate(0,-50%)':'translate(-100%,-50%)',
                    // transform: !this.props.show?'translate(0,calc(-50% - 40px))':this.props.isIntro?'translate(0,-50%)':'translate(-100%,-50%)',

                }}
            >
                
                <div
                    style={{
                        fontSize:'55px',
                        fontWeight:'800',
                        fontFamily:'Lato, sans-serif',
                        maxWidth:'600px',
                        padding:'.25em 0 0',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Indo Halim
                </div>

            </div>
                
         );
    }
}
 
export default Intro;