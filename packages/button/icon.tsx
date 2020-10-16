/**
 * desc: 图标动画效果增强。
 */

import React from 'react';
import { Button, Space } from 'antd';
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';
import './button.less';
import './icon.less';

export default () => (
  <Space size="large">
    <Button size="large" className="antd-colorful icon-right">
      向 右
      <ArrowRightOutlined />
    </Button>
    <Button
      size="large"
      icon={<ArrowLeftOutlined />}
      className="antd-colorful icon-left"
    >
      向 左
    </Button>
    <Button
      size="large"
      icon={<ArrowUpOutlined />}
      className="antd-colorful icon-up"
    >
      向 上
    </Button>
    <Button size="large" className="antd-colorful icon-down">
      向 下
      <ArrowDownOutlined />
    </Button>
    <Button size="large" className="antd-colorful icon-grow">
      扩 展
      <FullscreenOutlined />
    </Button>
    <Button size="large" className="antd-colorful icon-shrink">
      缩 小
      <FullscreenExitOutlined />
    </Button>
  </Space>
);
