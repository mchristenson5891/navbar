import React, { useState } from 'react'

import { routes } from '../const/routes'
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

const NavBar = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  console.log(isOpen)
  return (
    <NavContainer color={"white"}>
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
      <Overlay className={isOpen ? "show" : "hide"}/>
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