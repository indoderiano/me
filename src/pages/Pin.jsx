import React, { Component } from 'react'

class Pin extends Component {
    state = { 
        disable:false
     }
    render() { 
        return ( 
            <div 
                style={{
                    display:this.props.show?'block':'none',
                    position:'absolute',
                    bottom:'40px',
                    left:'50%',
                    // width:'30px',
                    // height:'30px',
                    transform:'translate(-50%,0)',
                    cursor:this.state.disable?'':'pointer',
                }}
                onClick={()=>{
                    this.props.nextSection()
                }}
            >
                <div
                    id='pin'
                    style={{
                        // display:this.props.show?'block':'none',
                        position:'absolute',
                        top:'50%',
                        left:'50%',
                        transform:'translate(-50%,-50%)',
                        width:'20px',
                        height:'20px',
                        borderRadius:'20px',
                        backgroundColor:'orange',
                        opacity:'0',
                        // animation:true?'slide-up .4s ease':''
                    }}
                />
                <i  
                    id='tack'
                    className="fa-solid fa-chevron-down"
                    style={{
                        position:'absolute',
                        top:'50%',
                        left:'50%',
                        transform:'translate(-50%,-50%)',
                        fontSize:'18px',
                        padding:'3px 5px',
                        // opacity:'0',
                        // borderRadius:'20px',
                        // backgroundColor:'orange',
                        animation:'bounce-in .5s ease 0s',
                    }}
                />
                
            </div>
         );
    }
}
 
export default Pin;