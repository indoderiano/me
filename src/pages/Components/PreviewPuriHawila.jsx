import React, { Component } from 'react'
import Homepage from '../../assets/portfolios/purihawila/homepage.png'

class Popstore extends Component {
    state = {  }
    render() { 
        return ( 
            <div {...this.props}>
                <div 
                    style={{
                        position:'relative',
                        height:'100%',
                        width:'100%'
                    }}
                >
                    <img
                        src={Homepage}
                        style={{
                            width:'100%',
                            position:'absolute',
                            top:'0',
                            left:'0'
                        }}
                    />
                    {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default Popstore;