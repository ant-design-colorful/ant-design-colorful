/**
 * desc: 多彩的颜色。
 */

import React from 'react';
import { Breadcrumb } from 'antd';
import {
  AntDesignOutlined,
  AppstoreOutlined,
  SmileOutlined,
  HeartOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import './color.less';

export default () => (
  <>
    <Breadcrumb className="antd-colorful breadcrumb-color-primary">
      <Breadcrumb.Item>
        <AntDesignOutlined />
        <span>Ant Design</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <AppstoreOutlined />
        <span>Component</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <SmileOutlined />
        <span>Breadcrumb</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <HeartOutlined />
        <span>Colorful</span>
      </Breadcrumb.Item>
    </Breadcrumb>
    <div style={{ marginTop: 10 }} />
    <Breadcrumb
      separator=">"
      className="antd-colorful breadcrumb-color-success"
    >
      <Breadcrumb.Item>
        <AntDesignOutlined />
        <span>Ant Design</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <AppstoreOutlined />
        <span>Component</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <SmileOutlined />
        <span>Breadcrumb</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <HeartOutlined />
        <span>Colorful</span>
      </Breadcrumb.Item>
    </Breadcrumb>
    <div style={{ marginTop: 10 }} />
    <Breadcrumb
      separator={<ArrowRightOutlined />}
      className="antd-colorful breadcrumb-color-danger"
    >
      <Breadcrumb.Item>
        <AntDesignOutlined />
        <span>Ant Design</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <AppstoreOutlined />
        <span>Component</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <SmileOutlined />
        <span>Breadcrumb</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <HeartOutlined />
        <span>Colorful</span>
      </Breadcrumb.Item>
    </Breadcrumb>
    <div style={{ marginTop: 10 }} />
    <Breadcrumb className="antd-colorful breadcrumb-colorful">
      <Breadcrumb.Item>
        <AntDesignOutlined style={{ color: '#1890ff' }} />
        <span style={{ color: '#1890ff' }}>Ant Design</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <AppstoreOutlined style={{ color: '#52c41a' }} />
        <span style={{ color: '#52c41a' }}>Component</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <SmileOutlined style={{ color: '#eb2f96' }} />
        <span style={{ color: '#eb2f96' }}>Breadcrumb</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <HeartOutlined style={{ color: '#9254de' }} />
        <span style={{ color: '#9254de' }}>Colorful</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  </>
);
