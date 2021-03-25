import React, { Component } from 'react'
import Page from './Components/PageTemplate'
import {style} from './styles'
import Popstore from './Components/PreviewPopstore'
import PuriHawila from './Components/PreviewPuriHawila'
import Jamboore from './Components/PreviewJamboore'
import MobileJamboore from './Components/PreviewMobileJamboore'

const projectList=[
    {
        component: Popstore,
        url: 'https://popstore-indo.herokuapp.com/'
    },
    {
        component: PuriHawila,
        url: 'https://purihawila-f1c1f.web.app/'
    },
    {
        component: Jamboore,
        url: 'https://jamboree-indo.herokuapp.com/'
    },
    {
        mobile: true,
        component: MobileJamboore,
        url: '/data/jamboore.apk'
    }
]

class Portfolios extends Component {
    state = { 
        // display:false,
     }

    renderPortfolios=()=>{
        return projectList.map((Project,index)=>{
            return (
                <Project.component
                    key={index}
                    style={{
                        display:'inline-block',
                        width:'250px',
                        height:'140px',
                        overflow:'hidden',
                        margin:'1em 1em 0 0',
                        transform:this.props.show?'':'translate(0,-.8em)',
                        opacity:this.props.show?'1':'0',
                        transition:this.props.show?`opacity .5s ease ${.55+index*.15}s, transform .5s ease ${.55+index*.15}s`:''
                    }}
                    // className='container-project'
                >
                    <a
                        download={Project.mobile}
                        href={Project.url}
                        target='_blank'
                        className='project'
                        style={{
                            position:'absolute',
                            top:'0',
                            left:'0',
                            width:'100%',
                            height:'100%',
                            backgroundColor:'rgba(0,0,0,.8)',
                            transition:'all .4s ease',
                            color:'white'
                        }}
                    >
                        {
                            Project.mobile?
                            <span
                                style={{
                                    position:'absolute',
                                    top:'50%',
                                    left:'50%',
                                    transform:'translate(-50%,-50%)',
                                    fontSize:'17px',
                                    textAlign: 'center'
                                }}
                            >
                                <i 
                                    className="fas fa-mobile-alt" 
                                    style={{fontSize:'24px', marginBottom:'.2em'}}
                                />
                                <div>Download Mobile App</div>
                            </span>
                            :
                            <span
                                style={{
                                    position:'absolute',
                                    top:'50%',
                                    left:'50%',
                                    transform:'translate(-50%,-50%)',
                                    fontSize:'17px'
                                }}
                            >
                                Visit Website
                                {/* <i 
                                    className="fas fa-long-arrow-alt-right"
                                    style={{
                                        marginLeft:'.5em',
                                        fontSize:'15px'
                                    }}    
                                /> */}
                            </span>
                        }
                    </a>
                </Project.component>
            )
        })
    }

    render() { 
        return ( 
            <Page {...this.props}>
                <div
                    style={{
                        fontSize:'55px',
                        fontWeight:'800',
                        fontFamily:'Lato, sans-serif',
                        maxWidth:'600px',
                        padding:'.25em 0 0'
                    }}
                    id='about'
                >
                    My Portfolios
                </div>
                <div
                    style={{
                        marginBottom:''
                    }}
                >
                    <div
                        style={{
                            display:'inline-block',
                            height:'8px',
                            width:'50px',
                            backgroundColor:'rgba(255,255,255,1)'
                        }}
                    />
                    <div
                        style={{
                            display:'inline-block',
                            fontFamily:'Roboto Slab,serif',
                            fontWeight:'300',
                            marginLeft:this.props.show?'1em':'0',
                            opacity:this.props.show?'1':'0',
                            transition:'opacity .5s ease .3s, margin .5s ease .3s',
                            color:style.primaryColor
                        }}
                    >
                        {/* View More */}
                    </div>
                </div>

                <div
                    style={{
                        fontFamily:'Roboto Slab,serif',
                        fontWeight:'300',
                        // marginTop:'.8em',
                        // transform:this.props.show?'':'translate(0,-.8em)',
                        // opacity:this.props.show?'1':'0',
                        // transition:'opacity .5s ease .55s, transform .5s ease .55s'
                    }}
                >
                    {this.renderPortfolios()}
                </div>

            </Page>

            
         );
    }
}
 
export default Portfolios;