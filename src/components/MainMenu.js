import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import SiteInfo from './SiteInfo'
import Logo from '../components/Logo'

// Styled div for Top menu
const MainMenuWrapper = styled.div`
    display: flex;
    background-color: rgb(3, 27, 77);
`

// Styled Link component
const MenuItem = styled(Link)`
    color: white;
    display: block;
    padding: 25px 16px;
`

const MainMenuInner = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    width: 960px;
    height: 100%;
`

// MainMenu component with graphql query
const MainMenu = () => (
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
        <MainMenuWrapper>
            <MainMenuInner>
                <Logo />
                <SiteInfo />
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                    <MenuItem to={`/${item.object_slug}`} key={item.title}>
                        {item.title}
                    </MenuItem>                    
                ))}
            </MainMenuInner>
        </MainMenuWrapper>
    )} />
);

export default MainMenu;