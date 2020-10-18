/**
 * desc: 引入插件 [react-ripples](https://github.com/rwu823/react-ripples)，点击预览。
 */

import React from 'react';
import { createRipples } from 'react-ripples';
import { Button, Space } from 'antd';
import './button.less';
import './background.less';

const MyRipples = createRipples({
  during: 600,
  color: 'rgba(255, 255, 255, .4)',
});

export default () => (
  <Space size="large">
    <MyRipples>
      <Button
        size="large"
        className="antd-colorful btn-hover-shallow btn-bg-spring"
      >
        春天的风
      </Button>
    </MyRipples>
    <MyRipples>
      <Button
        size="large"
        className="antd-colorful btn-hover-shallow btn-bg-summer"
      >
        夏天的雨
      </Button>
    </MyRipples>
    <MyRipples>
      <Button
        size="large"
        className="antd-colorful btn-hover-shallow btn-bg-autumn"
      >
        秋天的月
      </Button>
    </MyRipples>
    <MyRipples>
      <Button
        size="large"
        className="antd-colorful btn-hover-shallow btn-bg-winter"
      >
        冬天的雪
      </Button>
    </MyRipples>
  </Space>
);
