import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

/* const FeaturedImage = styled.img`
    display: flex;
    justify-content: center;
    max-width: 300px;
    margin: 16px 0;
` 
<FeaturedImage src={pageContext.featured_media.source_url}/>
*/

const PortfolioItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const PortfolioItem = styled.div`
    width: 300px;
    padding: 16px;
    margin: 16px;
`

const PortfolioImage = styled.img`
    max-width: 100%
`

let centerStyle = {
    textAlign: 'center'
};

export default ({pageContext}) => (
    <Layout>
        <h1 style={centerStyle}>
            {pageContext.title}
        </h1>
        <PortfolioItemsWrapper>
                <PortfolioItem>
                    <PortfolioImage src={pageContext.featured_media.source_url} alt="Thumbnail" />
                </PortfolioItem>
        </PortfolioItemsWrapper>
        
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        <strong>
            Website url:
        </strong>
        <a href={pageContext.acf.portfolio_url} rel="noopener noreferrer" target="_blank">
            {pageContext.acf.portfolio_url}
        </a>
    </Layout>
);