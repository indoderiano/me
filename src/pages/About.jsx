import React, { Component } from 'react'
import Page from './Components/PageTemplate'
import {style} from './styles'

class Intro extends Component {
    state = { 
        // display:false,
        showContent:false
     }

    componentDidMount=()=>{
        window.addEventListener('scroll',this.handleScroll)
    }

    // componentDidUpdate=()=>{
    //     if(this.props.show && this.state.display!==true){
    //         this.setState({display:true})
    //     }
    // }
    
    handleScroll=()=>{
        console.log('onscroll')
        var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
        var pageHeight = window.innerHeight != null? window.innerHeight : document.documentElement && document.documentElement.clientHeight ?  document.documentElement.clientHeight : document.body != null? document.body.clientHeight : null;

        // SECTION PORTFOLIOS
        var elAbout = document.getElementById('about').getBoundingClientRect()
    
        var elAboutPos = scrollPos+elAbout.top

        // console.log('position about',elAboutPos)
        // console.log('position bottom screen',scrollPos+pageHeight)
    
        if(scrollPos+pageHeight>=elAboutPos+.2*pageHeight){
            this.setState({showContent:true})
        }
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
                        padding:'.25em 0 0',
                    }}
                    id='about'
                >
                    About Me
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
                    <a
                        style={{
                            // display:'inline-block',
                            fontFamily:'Roboto Slab,serif',
                            fontWeight:'300',
                            marginLeft:this.props.show?'1em':'0',
                            opacity:this.props.show?'1':'0',
                            transition:'opacity .5s ease .3s, margin .5s ease .3s',
                            color:style.primaryColor,
                            textDecoration:'none'
                        }}
                        href='/data/CV%20Indo%20Halim.pdf'
                        download
                    >
                        Download CV
                    </a>
                </div>

                <div
                    style={{
                        fontFamily:'Roboto Slab,serif',
                        fontWeight:'300',
                        marginTop:'.8em',
                        transform:this.props.show?'':'translate(0,-.8em)',
                        opacity:this.props.show?'1':'0',
                        transition:'opacity .5s ease .55s, transform .5s ease .55s'
                    }}
                >
                    I have a lot of passion for problem solving with logical and analytical thinking because it has taught me how to think. So, I want to improve myself by pursuing a career in programming.
                    Currently I am in bootcamp training for Web Development called Hacktiv8 which is based in Jakarta. 
                    I will be looking for job placement in April 2021.
                </div>

            </Page>

            
         );
    }
}
 
export default Intro;