import React, { Component } from 'react'


class Logo extends Component {
    state = {
        show:false
     }

    componentDidMount=()=>{
        setTimeout(() => {
            this.setState({show:true})
        }, 10);
    }
    
    render() {
        // console.log(this.props)
        var delay=this.props.delay?this.props.delay/1000:0
        var scale=this.props.scale?this.props.scale:1
        return (
            <div
                style={{
                    position:'absolute',
                    // top: '50%',
                    // left: '50%',
                    // transform: 'rotate(90deg) translate(-50%,-50%)',
                    // transformOrigin: '0 0',
                    top:'15px',
                    left:'30px',
                    transform:'rotate(90deg)',
                    transformOrigin:'50% 50%'
                }}
            >

            <svg 
                width={scale*121.007}
                height={scale*142.004}
                viewBox={`0 0 ${131.007} ${152.004}`}
                style={{
                    // marginRight:'.5em'
                }}
            >
                {/* LETTER i */}
                <path
                    d="M 0.8 142 L 0.8 41.8 L 4.6 41.8 L 4.6 142 L 0.8 142 Z M 1.747 5.218 A 2.957 2.957 0 0 0 2.8 5.4 A 2.319 2.319 0 0 0 3.917 5.118 A 2.949 2.949 0 0 0 4.6 4.6 A 2.657 2.657 0 0 0 5.218 3.653 A 2.957 2.957 0 0 0 5.4 2.6 A 2.319 2.319 0 0 0 5.118 1.483 A 2.949 2.949 0 0 0 4.6 0.8 A 3.272 3.272 0 0 0 4.293 0.528 A 2.381 2.381 0 0 0 2.8 0 A 3.543 3.543 0 0 0 2.723 0.001 A 2.699 2.699 0 0 0 0.8 0.8 A 3.272 3.272 0 0 0 0.528 1.107 A 2.381 2.381 0 0 0 0 2.6 A 3.543 3.543 0 0 0 0.001 2.677 A 2.699 2.699 0 0 0 0.8 4.6 A 2.657 2.657 0 0 0 1.747 5.218 Z"
                    strokeLinecap="round"
                    fillRule="evenodd"
                    fontSize={12}
                    stroke={this.props.color}
                    strokeWidth="1mm"
                    fill='none'
                    // fill= {this.props.show?this.props.color:"transparent"}
                    style={{
                        strokeDasharray: '210',
                        strokeDashoffset: this.state.show?'420':'210',
                        // transition:'stroke-dashoffset 2s ease, fill 1s ease'
                        transition:`stroke-dashoffset 1.5s ease ${delay+.5}s, fill 1.5s ease ${delay}s`,
                    }}
                />

                {/* LETTER D */}
                <path
                    d="M 37 142 L 37 1.8 L 74.6 1.8 A 65.824 65.824 0 0 1 88.13 3.103 Q 101.058 5.82 109.1 14.2 A 41.792 41.792 0 0 1 119.937 35.621 A 60.185 60.185 0 0 1 121 47.2 L 121 102 A 54.223 54.223 0 0 1 118.824 118.072 Q 113.338 135.738 94.028 140.361 A 66.433 66.433 0 0 1 78.6 142 L 37 142 Z M 76.6 6 L 40.8 6 L 40.8 138 L 76.6 138 Q 87.2 138 95.7 135.7 A 25.357 25.357 0 0 0 105.77 130.209 A 35.81 35.81 0 0 0 110.7 124.9 A 27.014 27.014 0 0 0 114.755 117.025 Q 117.2 109.748 117.2 99.2 L 117.2 48.4 Q 117.2 27 105.5 16.5 A 40.78 40.78 0 0 0 80.556 6.144 A 53.362 53.362 0 0 0 76.6 6 Z"
                    strokeLinecap="round"
                    fillRule="evenodd"
                    fontSize={12}
                    stroke={this.props.color}
                    strokeWidth="1.2mm"
                    fill='none'
                    // fill= {this.props.show?this.props.color:"transparent"}
                    style={{
                        strokeDasharray: '420',
                        strokeDashoffset: this.props.skip?'0':this.state.show?'840':'420',
                        // transition:'stroke-dashoffset 2s ease, fill 1s ease'
                        transition:`stroke-dashoffset 1.5s ease ${delay}s, fill 1.5s ease ${delay}s`
                    }}
                />
            </svg>
            </div>
                
         );
    }
}


 
export default Logo;