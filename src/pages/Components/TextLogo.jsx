import React, { Component } from 'react'

class TextLogo extends Component {
    state = {  }
    render() { 
        return ( 
            <div
                style={{
                    position:'absolute',
                    top:'50%',
                    left:'50%',
                    transform:'translate(-50%,-50%)',
                    backgroundColor:'white',
                    width:'132px',
                    height:'132px'
                }}
            >
                <div
                    style={{
                        position:'absolute',
                        top:'50%',
                        left:'50%',
                        transform:'translate(-50%,-50%)',
                        fontFamily:'Leckerli One, cursive',
                        // padding:'100px',
                        // backgroundColor:'white',
                        color:'rgba(0,0,0,.6)',
                        fontSize:'60px',
                        letterSpacing:'-20px',

                        marginLeft:'-10px'
                    }}
                >
                    <span
                        style={{
                            verticalAlign:'60px',
                            // verticalAlign:'text-top'
                            letterSpacing:'-50px',
                            marginRight:'-0px'
                        }}
                    >
                        i
                    </span>
                    <span 
                        style={{
                            fontSize:'200%',
                            letterSpacing:'-18px'
                        }}
                    >
                        /
                    </span>
                    <span
                        style={{
                            verticalAlign:'-20px'
                        }}
                    >
                        D
                    </span>
                </div>
            </div>
         );
        
    }
}
 
export default TextLogo;