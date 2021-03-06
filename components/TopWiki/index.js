import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Dropdown } from '../../components';
import Router from 'next/router';

import './topwiki.css';

export default class TopWiki extends React.Component {

  goTo = (item) => {
    const { data, query } = this.props;

    //Check changed version or language
    let isNum = !isNaN(item);
    Router.push(`/wiki/${query.article}/${isNum ? item : data.article_version}/${(isNum) ? query.lang : item.toLowerCase()}`);
  }

  render() {
    let versions = this.props.data.versions;
    let langs = this.props.data.langs;

    langs = langs.map((item) => {
      item = item.toUpperCase();
      return item;
    });

    return (
      <div id='topwiki-bg'>
        <div id='topwiki-container'>
          <span id='title'>{this.props.title}</span>
          <Box id='config-row'>
            <Button id='config'></Button>
            <Dropdown action={this.goTo} className='config-side' id='version' title={this.props.query.version}>
              {versions.map((item) => {
                return <>{item}</>
              })}
            </Dropdown>
            <Dropdown action={this.goTo} className='config-side' id='language' title={this.props.query.lang}>
              {langs.map((item) => {
                return <>{item}</>
              })}
            </Dropdown>
          </Box>
        </div>

        <Box id='feedback-col'>
          <span id='solutions-t'>Solução 1/3</span>
        </Box>
      </div>
    );
  }
}