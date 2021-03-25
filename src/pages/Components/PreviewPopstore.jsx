import React, { Component } from 'react'
import Homepage from '../../assets/portfolios/popstore/homepage.png'
import Product from '../../assets/portfolios/popstore/product-details.png'
import History from '../../assets/portfolios/popstore/history.png'
import Chart from '../../assets/portfolios/popstore/chart.png'

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
                            width:'55%',
                            position:'absolute',
                            top:'0',
                            left:'0'
                        }}
                    />
                    <img
                        src={Product}
                        style={{
                            width:'35%',
                            position:'absolute',
                            top:'0',
                            left:'35%',
                            boxShadow:'0px 0px 12px 0px rgba(0,0,0,0.75)'
                        }}
                    />
                    <img
                        src={History}
                        style={{
                            width:'40%',
                            position:'absolute',
                            top:'0',
                            left:'60%',
                            boxShadow:'0px 0px 12px 0px rgba(0,0,0,0.75)'
                        }}
                    />
                    <img
                        src={Chart}
                        style={{
                            width:'35%',
                            position:'absolute',
                            // top:'60%',
                            bottom:'0',
                            right:'-3%',
                            boxShadow:'0px 0px 12px 0px rgba(0,0,0,0.75)'
                        }}
                    />
                    {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default Popstore;