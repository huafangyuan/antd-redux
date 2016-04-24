import React, { Component } from 'react';
import SiderMenu from './Menu';
import FormDemo from './Form';
import { Row, Col } from 'antd';

class Layout extends Component {
  getInitialState() {
    return {
      test: '',
    };
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
      <Row type="flex" justify="center" style={{ height: '100%' }}>
        <Col span="3" style={{ backgroundColor: '#fafafa', borderRight: '1px solid rgba(0,0,0,0.075)', boxShadow: ' 0 0' +
         ' 5px rgba(0,0,0,0.1)' }}
        >
          <SiderMenu />
        </Col>
        <Col span="21" style={{ borderRight: '1px solid #fafafa' }}>
          {this.props.children || <FormDemo /> }
        </Col>
      </Row>

    </div>
    );
  }
}

export default Layout;