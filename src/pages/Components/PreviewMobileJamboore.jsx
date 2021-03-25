import React, { Component } from 'react'
import Home from '../../assets/portfolios/mobile-jamboore/home.jpg'
import Menu from '../../assets/portfolios/mobile-jamboore/menu.jpg'
import Bag from '../../assets/portfolios/mobile-jamboore/bag.jpg'

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
                        src={Home}
                        style={{
                            width:'35%',
                            position:'absolute',
                            top:'0',
                            left:'0%',
                            boxShadow:'0px 0px 12px 0px rgba(0,0,0,0.75)',
                            zIndex: 0,
                        }}
                    />
                    <img
                        src={Menu}
                        style={{
                            width:'35%',
                            position:'absolute',
                            top:'0',
                            left:'35%',
                            boxShadow:'0px 0px 12px 0px rgba(0,0,0,0.75)',
                            zIndex: -1,
                        }}
                    />
                    <img
                        src={Bag}
                        style={{
                            width:'35%',
                            position:'absolute',
                            // top:'0',
                            bottom: '0',
                            left:'65%',
                            boxShadow:'0px 0px 12px 0px rgba(0,0,0,0.75)',
                            zIndex: -2,
                        }}
                    />
                    {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default Popstore;