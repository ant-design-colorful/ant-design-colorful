/**
 * desc: 多彩的颜色。
 */

import React from 'react';
import { Divider } from 'antd';
import './color.less';

export default () => (
  <>
    <Divider plain orientation="left" className="antd-colorful">
      Default
    </Divider>
    <Divider
      plain
      orientation="left"
      className="antd-colorful divider-color-primary"
    >
      Primary
    </Divider>
    <Divider
      plain
      orientation="left"
      className="antd-colorful divider-color-success"
    >
      Success
    </Divider>
    <Divider
      plain
      orientation="left"
      className="antd-colorful divider-color-warning"
    >
      Warning
    </Divider>
    <Divider
      plain
      orientation="left"
      className="antd-colorful divider-color-danger"
    >
      Danger
    </Divider>
  </>
);
