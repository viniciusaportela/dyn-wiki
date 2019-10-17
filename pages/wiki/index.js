import React from 'react';
import Head from 'next/head';

import { PageRender } from '../../components';
//import Data from '../../services/MDReader/data';

import topBg from '../../assets/page/title-bg.png';
import './wiki.css';

export default class Wiki extends React.Component {
  static getInitialProps({query}){
    //Get content of requested article
    const reader = require('../../services/MDReader/MDReader');

    const userConfig = require('../../services/MDReader/userConfig.js');
    const file = `articles/${query.article}/${query.version}/article.${query.lang}.md`;
    
    const data = reader.convert(file, userConfig);
    //console.log(JSON.stringify(data));
    return{ data, query }
  }

  render(){
    const { data } = this.props;
    return(
      <>
        <Head>
          <title>{data.title}</title>
        </Head>
        <div id='bg'>
          <span id='project-name'>Dyn-Wiki</span>
          <img alt='' src={topBg} id='top-bg'/>
          <PageRender data={data}/>
        </div>
      </>
    );
  }
}
