/**
 * desc: 与其他组件结合使用。
 */

import React from 'react';
import { Breadcrumb, Tag, Divider, Button } from 'antd';
import {
  AntDesignOutlined,
  AppstoreOutlined,
  SmileOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import './package.less';

export default () => (
  <>
    <Divider plain orientation="left">
      Tag
    </Divider>
    <Breadcrumb separator=">" className="antd-colorful">
      <Breadcrumb.Item>
        <Tag icon={<AntDesignOutlined />} color="geekblue">
          Ant Design
        </Tag>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Tag icon={<AppstoreOutlined />} color="green">
          Component
        </Tag>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Tag icon={<SmileOutlined />} color="magenta">
          Breadcrumb
        </Tag>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Tag icon={<HeartOutlined />} color="purple">
          Colorful
        </Tag>
      </Breadcrumb.Item>
    </Breadcrumb>
    <Divider plain orientation="left">
      Button
    </Divider>
    <Breadcrumb separator=">" className="antd-colorful">
      <Breadcrumb.Item>
        <Button icon={<AntDesignOutlined />} size="small">
          Ant Design
        </Button>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Button icon={<AppstoreOutlined />} size="small">
          Component
        </Button>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Button icon={<SmileOutlined />} size="small">
          Breadcrumb
        </Button>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Button icon={<HeartOutlined />} size="small" type="primary">
          Colorful
        </Button>
      </Breadcrumb.Item>
    </Breadcrumb>
  </>
);
