/**
 * desc: 键盘按键样式，点击预览。
 */

import React from 'react';
import { Button, Space } from 'antd';
import './button.less';
import './keyboard.less';

export default () => (
  <Space size="large">
    <Button size="large" className="antd-colorful btn-key btn-key-spring">
      春天的风
    </Button>
    <Button size="large" className="antd-colorful btn-key btn-key-summer">
      夏天的雨
    </Button>
    <Button size="large" className="antd-colorful btn-key btn-key-autumn">
      秋天的月
    </Button>
    <Button size="large" className="antd-colorful btn-key btn-key-winter">
      冬天的雪
    </Button>
    <Button size="large" className="antd-colorful btn-key btn-key-white">
      我想静静
    </Button>
  </Space>
);
