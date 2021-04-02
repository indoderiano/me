import React, { Component } from 'react'
import Me from '../../assets/profile/me.jpg'

class Popstore extends Component {
    state = {  }
    render() { 
        return ( 
            <div {...this.props}>
                <div 
                    style={{
                        position:'relative',
                        height:'100%',
                        width:'100%',
                        borderRadius: '200px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        overflow: 'hidden',
                        border: '1px solid black'
                    }}
                >
                    <img
                        src={Me}
                        style={{
                            width:'100%',
                            position:'absolute',
                            top:'0',
                            left:'0'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'radial-gradient(transparent, rgba(0,0,0,.7), rgba(0,0,0,.9), black)',
                            
                        }}
                    />
                    {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default Popstore;