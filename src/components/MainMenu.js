import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import 'bulma/css/bulma.css'
import SiteInfo from './SiteInfo'
import Logo from '../components/Logo'

fontawesome.library.add(solid)

// Styled div for Top menu
// const MainMenuWrapper = styled.div`
//     display: flex;
//     background-color: rgb(3, 27, 77);
// `

// Styled Link component
const MenuItem = styled(Link)`
    color: white;
    display: block;
    text-align: right;
    padding: 30px 16px;
`

// const MainMenuInner = styled.div`
//     max-width: 960px;
//     margin: 0 auto;
//     display: flex;
//     width: 960px;
//     height: 100%;
// `

const black = {
    backgroundColor: 'black'
};

const white = {
    color: 'white'
};

// Toggle for burger navbar
function toggleBurger() {
    let burger = document.querySelector(".navbar-burger");
    let menu = document.querySelector(".navbar-menu");
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

// MainMenu component with graphql query
const MainMenu = ({toggleNavbar, isActive}) => (
    <StaticQuery query={graphql`
        {
            allWordpressWpApiMenusMenusItems(filter:{
                name:{
                    eq: "Main menu"
                }
            }){
                edges{
                    node{
                        name
                        items{
                            title
                            object_slug
                        }
                    }
                }
            }
        }
    `} render={props => (
                <nav class="navbar" role="navigation" aria-label="main navigation" style={black}>
                    <div class="navbar-brand">
                    <Logo />
                    <SiteInfo />
                        <div id="burger" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
                        onClick={toggleBurger}>
                            <span style={white} aria-hidden="true"></span>
                            <span style={white} aria-hidden="true"></span>
                            <span style={white} aria-hidden="true"></span>
                        </div>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                            <MenuItem to={`/${item.object_slug}`} key={item.title}>
                                {item.title}
                            </MenuItem>                    
                        ))}
                        </div>
                    </div>
                    </nav>
    )} />
);

export default MainMenu;

/* <MainMenuWrapper>
            <MainMenuInner>
                <Logo />
                <SiteInfo />
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                    <MenuItem to={`/${item.object_slug}`} key={item.title}>
                        {item.title}
                    </MenuItem>                    
                ))}
            </MainMenuInner>
        </MainMenuWrapper> */

/* <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong>Gatsby Starter Business</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <Link className='navbar-item' to='/about'>
                            About
            </Link>
            <Link className='navbar-item' to='/pricing'>
                            Pricing
            </Link>
            <Link className='navbar-item' to='/blog'>
                            Blog
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button is-primary is-outlined'
                    to='/contact'>
                            Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav> */