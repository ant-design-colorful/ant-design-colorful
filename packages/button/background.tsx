/**
 * desc: 多彩的背景色
 */

import React from 'react';
import { Button, Space } from 'antd';
import './button.less';
import './background.less';

export default () => (
  <Space size="large">
    <Button size="large" className="antd-colorful btn-hover btn-bg-spring">
      春天的风
    </Button>
    <Button size="large" className="antd-colorful btn-hover btn-bg-summer">
      夏天的雨
    </Button>
    <Button size="large" className="antd-colorful btn-hover btn-bg-autumn">
      秋天的月
    </Button>
    <Button size="large" className="antd-colorful btn-hover btn-bg-winter">
      冬天的雪
    </Button>
  </Space>
);
