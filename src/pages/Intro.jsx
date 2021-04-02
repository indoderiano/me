import React, { Component } from 'react'
import Page from './Components/PageTemplate'
import {style} from './styles'

class Intro extends Component {
    state = { 
        // display:false
        isEmailCopied: false,
        email: 'mde50526@gmail.com'
     }

    // componentDidUpdate=()=>{
    //     if(this.props.show && this.state.display!==true){
    //         this.setState({display:true})
    //     }
    // }

    copyEmail = () => {

        // Notif
        this.setState({isEmailCopied: true})

        setTimeout(()=>{
            this.setState({isEmailCopied: false})
        },1000)

        // Copy email to clipboard
        var text = document.createElement('textarea')
        text.value = this.state.email
        document.body.appendChild(text)

        // text.focus()
        text.select()

        document.execCommand('copy')

        document.body.removeChild(text)

    }

    render() { 
        return ( 
            <Page 
                {...this.props} 
            >
                    
                <div
                    style={{
                        display:'flex',
                        maxWidth:'500px',
                        paddingTop: '1em',
                        justifyContent:'space-between',
                        fontFamily:'Roboto Slab,serif',
                        fontWeight:'300'
                    }}
                >
                    <span>
                        <a
                            href='https://www.instagram.com/mde50526'
                            target='_blank'
                            style={{
                                textDecoration:'none',
                                color:'white'
                            }}
                        >
                            instagram
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://wa.me/6281999041167"
                            target='_blank'
                            style={{
                                textDecoration:'none',
                                color:'white'
                            }}
                        >
                            whatsapp
                        </a>
                    </span>
                    <span>
                        <a
                            href='https://www.linkedin.com/in/indo-halim-8132971a5/'
                            target='_blank'
                            style={{
                                textDecoration:'none',
                                color:'white'
                            }}
                        >
                            linkedin
                        </a>
                    </span>
                    <span>
                        <a
                            href='https://github.com/indoderiano'
                            target='_blank'
                            style={{
                                textDecoration:'none',
                                color:'white'
                            }}
                        >
                            github
                        </a>
                    </span>
                    <span
                        style={{
                            position: 'relative'
                        }}
                        >
                        <span
                            style={{
                                cursor: 'pointer'
                            }}
                            onClick={this.copyEmail}
                        >
                            email
                        </span>
                        <span
                            style={{
                                position: 'absolute',
                                bottom: this.state.isEmailCopied?'140%':'100%',
                                left: '50%',
                                backgroundColor: 'white',
                                whiteSpace: 'nowrap',
                                color: 'rgba(0,0,0,1)',
                                padding: '.3em .6em',
                                borderRadius: '5px',
                                fontWeight: '400',
                                opacity: this.state.isEmailCopied?'1':'0',
                                visibility: this.state.isEmailCopied?'visible':'hidden',
                                transition: this.state.isEmailCopied?'all .4s ease':'all .4s ease, bottom .4s ease .4s'
                            }}
                        >
                            <i className="fas fa-check" style={{marginRight:'.4em'}}></i>
                            email address copied
                        </span>
                    </span>
                </div>

                <div
                    style={{
                        fontSize:'55px',
                        fontWeight:'800',
                        fontFamily:'Lato, sans-serif',
                        maxWidth:'600px',
                        padding:'.25em 0 0'
                    }}
                >
                    I am Frontend & Backend Developer
                </div>
                <div
                    style={{
                        marginTop:'0px'
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
                            display:'inline-block'
                        }}
                    >

                    </div>
                </div>

            </Page>
                
         );
    }
}
 
export default Intro;