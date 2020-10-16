/**
 * desc: 多彩的文字显示。
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
    <Button
      size="large"
      type="text"
      className="antd-colorful btn-up btn-text-summer"
    >
      夏天的雨
    </Button>
    <Button
      size="large"
      type="text"
      className="antd-colorful btn-up btn-text-autumn"
    >
      秋天的月
    </Button>
    <Button
      size="large"
      type="text"
      className="antd-colorful btn-up btn-text-winter"
    >
      冬天的雪
    </Button>
  </Space>
);
