import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems'

const center = {
    textAlign: 'center'
};

export default ({pageContext}) => (
    <Layout>
        <h1 style={center} dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div style={center} dangerouslySetInnerHTML={{__html: pageContext.content}} />
        <PortfolioItems />
        <div style={center}>Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" rel="noopener noreferrer" target="_blank">CC 3.0 BY</a></div>
    </Layout>
);