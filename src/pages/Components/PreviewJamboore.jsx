import React, { Component } from 'react'
import Homepage from '../../assets/portfolios/jamboore/homepage.png'

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
                        overflow:'hidden'
                    }}
                >
                    <img
                        src={Homepage}
                        style={{
                            width:'101.5%',
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