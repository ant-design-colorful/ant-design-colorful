/**
 * desc: 一些简单的 `hover` 效果。
 */

import React from 'react';
import { Button, Space } from 'antd';
import './button.less';
import './text.less';

export default () => (
  <Space size="large">
    <Button
      size="large"
      type="text"
      className="antd-colorful btn-up btn-text-spring"
    >
      春天的风
    </Button>
    <Button size="large" type="text" className="antd-colorful btn-border">
      夏天的雨
    </Button>
    <Button
      size="large"
      type="text"
      className="antd-colorful btn-curl btn-text-autumn"
    >
      秋天的月
    </Button>
    <Button
      size="large"
      type="text"
      className="antd-colorful btn-flow btn-text-winter"
    >
      冬天的雪
    </Button>
  </Space>
);
