/**
 * desc: 更加多彩的背景色
 */

import React from 'react';
import { Button, Space } from 'antd';
import './button.less';

export default () => (
  <Space size="large">
    <Button size="large" className="antd-colorful btn-color-spring">
      春天的风
    </Button>
    <Button size="large" className="antd-colorful btn-color-summer">
      夏天的雨
    </Button>
    <Button size="large" className="antd-colorful btn-color-autumn">
      秋天的月
    </Button>
    <Button size="large" className="antd-colorful btn-color-winter">
      冬天的雪
    </Button>
  </Space>
);
