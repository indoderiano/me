import React, { useEffect, useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Popstore from './pages/Components/PreviewPopstore'
import TextLogo from './pages/Components/TextLogo'
import Logo from './pages/Components/Logo'
import Author from './pages/Author'
// import Author from './pages/Components/AuthorLogo'
import Pin from './pages/Pin'
import Menu from './pages/Menu'
import Intro from './pages/Intro'
import About from './pages/About'
import Portfolios from './pages/Portfolios'

const initialState = { isScroll: true }

const reducer = (state, action) => {
  switch (action.type) {
    case 'ON':
      return {isScroll: true}
    case 'OFF':
      return {isScroll: false}
    default:
      return state
  }
}


function App() {
  const [section,setSection] = useState(-1)
  const [maxSection,setMaxSection] = useState(2)
  const [isScroll,setIsScroll] = useState(true)
  const [state,dispatch] = useReducer(reducer,initialState)
  const [windowWidth,setWindowWidth] = useState(0)

  useEffect(()=>{

    setTimeout(()=>{
      document.getElementById("container").style.background='rgba(0,0,0,1)'
    }, 10)

    setTimeout(() => {
      setSection(state => state+1)
    }, 700);

    window.addEventListener('wheel',handleWheel)


    // responsive
    window.addEventListener('resize',updateWindowWidth)

    // componentwillunmount
    return ()=>{
      window.removeEventListener('resize',updateWindowWidth)
    }
  },[])


  const updateWindowWidth=()=>{
    setWindowWidth(typeof window !== undefined ? window.innerWidth : 0)
  }

  const freezeScroll=()=>{
    window.removeEventListener('wheel',handleWheel)
    setTimeout(() => {
      window.addEventListener('wheel',handleWheel)
    }, 300);
  }
  
  const changeSection=(index)=>{
    if(index!==section){
      setSection(index)
      animatePin()
    }
  }

  const animatePin=()=>{
    if(document.getElementById('pin')){
      var el=document.getElementById('pin')
      el.style.animation='none';
      
      var eltack=document.getElementById('tack')
      eltack.style.animation='none'
      
      var test = el.offsetWidth;
      
      el.style.animation='slide-up .4s ease';
  
      eltack.style.animation='tack-disappear .3s ease .05s'
    }
  }


  // REF
  // https://stackoverflow.com/questions/53845595/wrong-react-hooks-behaviour-with-event-listener
  const handleWheel=(e)=>{
    console.log(state.isScroll)

    // if(state.isScroll){
    //   // FREEZE SCROLL
    //   console.log('set isscroll')
    //   dispatch({type:'OFF'})
    //   // setIsScroll(false)
    //   setTimeout(() => {
    //     dispatch({type:'ON'})
    //     // setIsScroll(true)
    //   }, 1000);

    // CHANGE SECTION
    if(e.deltaY>0){
      setSection(state => {
        if(state>=maxSection){
          return maxSection // MAX PAGE
        }else{
          animatePin()
          freezeScroll()
          return state+1
        }
      })
    }else{
      setSection(state => {
        if(state<=0){
          return 0 // MIN PAGE
        }else{
          animatePin()
          freezeScroll()
          return state-1
        }
      })
    }
  }

  const smoothScroll=(element)=>{
    var duration=500

    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    
    // var el = document.getElementById('portfolios')
    var measure = element.getBoundingClientRect()
    // var fromTop = el.offsetTop

    // TOOL
    // https://www.desmos.com/calculator
    
    // FORMULA
    // distance = -(time-1)^4 + 1
    // or
    // distance = (time-1)^5 + 1
    // BETTER FORMULA
    // distance = -(time^4)+4time^3-6time^2+4time
    // speed = -10(time-1)^3
    


    for(let delay=0;delay<=duration;delay++){
        // distance
        var time=delay/duration
        // let distance = -Math.pow(time,4)+4*Math.pow(time,3)-6*Math.pow(time,2)+4*time
        // let distance = -Math.pow(time,6)+6*Math.pow(time,5)-15*Math.pow(time,4)+20*Math.pow(time,3)-15*Math.pow(time,2)+6*time
        let distance = Math.pow(time-1,3)+1

        // console.log(distance)
        // find distance in pixel
        let scroll=distance*measure.top
        console.log(scroll)

        setTimeout(()=>{
            window.scrollTo(0,scrollPos+scroll)
        },delay)

    }
  }

  const nextSection=()=>{
    if(section===maxSection){
      // changeSection(section)
    }else{
      changeSection(section+1)
    }
  }

  return (
    <div
      id='container'
      style={{
        height:'100vh',
        background:'rgba(0,0,0,0)',
        color:'white',
        overflow:'hidden',
        transition:'all .3s ease',
      }}
    >
      <Logo color='white' scale={.6}/>
      <Author show={section>=0} isIntro={section<=0}/>
      <Intro show={section===0}/>
      <About show={section===1}/>
      <Portfolios show={section===2}/>

      <Pin show={section>=0} nextSection={nextSection}/>
      <Menu show={section>=1} section={section} changeSection={changeSection}/>

      {/* <Popstore /> */}
      {/* <TextLogo/> */}
    </div>
  );
}

export default App;
