/**
 * desc: 多彩的背景色。每种的 `hover` 略有不同哦~
 */

import React from 'react';
import { Button, Space } from 'antd';
import './button.less';
import './background.less';

export default () => (
  <Space size="large">
    <Button
      size="large"
      className="antd-colorful btn-hover-sweep sweep-to-right btn-bg-spring"
    >
      春天的风
    </Button>
    <Button
      size="large"
      className="antd-colorful btn-hover-sweep sweep-to-left btn-bg-summer"
    >
      夏天的雨
    </Button>
    <Button
      size="large"
      className="antd-colorful btn-hover-sweep sweep-to-bottom btn-bg-autumn"
    >
      秋天的月
    </Button>
    <Button
      size="large"
      className="antd-colorful btn-hover-sweep sweep-to-top btn-bg-winter"
    >
      冬天的雪
    </Button>
    <Button size="large" className="antd-colorful btn-bg-season">
      春夏秋冬
    </Button>
  </Space>
);
