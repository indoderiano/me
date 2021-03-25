import React, { Component } from 'react'
import {style} from './styles'

const MenuTitle=['Intro','About Me','Portfolios']

class Menu extends Component {
    state = { }

    renderLines=()=>{
        return MenuTitle.map((val,index)=>{
            return (
                <div></div>
            )
        })
    }

    renderMenu=()=>{
        return MenuTitle.map((val,index)=>{
            return (
                <div 
                    key={index}
                    style={{
                        marginTop:index===0?'':'1em',
                        paddingRight:'20px',
                        // position:'absolute',
                        // top:`${index*30}px`,
                        // right:'50px',
                        whiteSpace:'nowrap',
                        position:'relative',
                        // opacity:'.7',
                        color:this.props.section===index?style.primaryColor:'rgba(255,255,255,.5)',
                        transition:'all .3s ease',

                        cursor:'pointer',
                    }}
                    onClick={()=>{
                        this.props.changeSection(index)
                    }}
                >
                    {val}
                    <div
                        style={{
                            position:'absolute',
                            top:'55%',
                            right:'0',
                            transform:'translate(0,-50%)',
                            border:this.props.section===index?`1px solid ${style.primaryColor}`:'1px solid rgba(255,255,255,.5)',
                            transition:'all .3s ease',
                            backgroundColor:'black',
                            width:'8px',
                            height:'8px',
                            borderRadius:'2px',
                            transform:index===0?'translate(0,-50%)':'translate(0,-50%) rotate(45deg)',
                            transformOrigin:'50% 50%'
                        }}
                    >
                        <div
                            style={{
                                position:'absolute',
                                top:'50%',
                                left:'50%',
                                width:'60%',
                                height:'60%',
                                transform:'translate(calc(-50% - .25px),calc(-50% - .25px))',
                                backgroundColor:style.primaryColor,
                                opacity:this.props.section===index?'1':'0',
                                transition:'all .3s ease'
                            }}
                        />
                    </div>
                </div>
            )
        })
    }

    render() { 
        return ( 
            <div
                style={{
                    position:'absolute',
                    top:'50%',
                    right:'30px',
                    visibility:this.props.show?'visible':'hidden',

                    // ANIMATION
                    transform:this.props.show?'translate(0,-50%)':'translate(0,calc(-50% - 30px))',
                    opacity:this.props.show?'1':'0',
                    transition:`all .5s ease, opacity .3s ease ${this.props.show?'.2s':''}`,
                    animation:this.props.show?'appear .5s ease':'',
                }}
            >
                {/* MENU NAMEs */}
                <div
                    style={{
                        textAlign:'right',
                        position:'relative',
                        fontFamily:'Roboto Slab,serif',
                        fontWeight:'300'
                        // border:'1px solid white',
                        // height:'200px',
                        // overflow:'auto',
                        // transform:'translate(0,-50%)'
                    }}
                >
                    {this.renderMenu()}
                    <div
                        style={{
                            position:'absolute',
                            top:'10px',
                            right:'5px',
                            bottom:'10px',
                            width:'.5px',
                            backgroundColor:'white',
                            opacity:'.7',
                            transform:'translate(50%,0)',
                            zIndex:'-1'
                        }}
                    />

                </div>
                
            </div>
         );
    }
}
 
export default Menu;