import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import logo from '../img/logo.jpeg';
import { Login } from './Login';



const Nav = styled.div`
  background: #ffffff;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 5px 3px 3px #d41d75;
`;

const NavIcon = styled(Link)`
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;  
`;

const SidebarNav = styled.nav`
  background: #ffffff;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  border-right: 1px solid  #d41d75;
`;

const SidebarWrap = styled.div`
  width: 100%;
  
`;

const SideBar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div >
      <IconContext.Provider 
        value={{ color:'#d41d75'}
    }
    >
        <Nav>
          <Login/>
          <NavIcon to='/newemployee'>
            <FaIcons.FaUserPlus/>
          </NavIcon> 
          <button    type='submit' className='btn btn-primary btn-background '>Salir</button> 
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <Link to="/about">
               <img   className='__logo_main' src={ logo } alt='fondo para la paz logo'/>
            </Link>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </div>
  );
};

export default SideBar;