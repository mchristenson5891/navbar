import React, { useState } from 'react'

// import { routes } from '../const/routes'
import { 
  NavContainer,
  NavRow,
  NavRight,
  NavMiddle,
  NavLeft,
  Link,
  HamburgerContainer,
  HamburgerBar,
  Overlay
 } from './style'

const NavBar = ({ routes = [] }) => {

  const [ isOpen, setIsOpen ] = useState(false)

  window.onresize =() => (window.innerWidth > 900 && isOpen) && setIsOpen(false)
  //state = {
  //   isOpen: false
  // }
// const setIsOpen = (boolean) =>
//   this.setState({
//     isOpen: boolean
//   })
  console.log(NavContainer)
  return (
    <NavContainer color={"pink"}>
      <button className='btn'>btn</button>
      <NavRow>
        <NavLeft>
          <p>hello</p>
        </NavLeft>
        <NavMiddle></NavMiddle>
        <NavRight>
          {
            routes.map(route =>
              <Link exact to={`/${route}`}>{route}</Link>
            )
          }
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen}/>
        </NavRight>
      </NavRow>
      <Overlay className={isOpen ? "show" : "hide"}>
      {
        routes.map(route =>
          <Link exact to={`/${route}`}>{route}</Link>
        )
        }
      </Overlay>
    </NavContainer> 
  )
}


const Hamburger  = ({ setIsOpen, isOpen }) =>
<HamburgerContainer className={isOpen ? "open" : "closed"}onClick={() => setIsOpen(!isOpen)}>
  <HamburgerBar></HamburgerBar>
  <HamburgerBar></HamburgerBar>
  <HamburgerBar></HamburgerBar>
</HamburgerContainer>


export default NavBar