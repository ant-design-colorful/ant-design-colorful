/**
 * desc: 多重分割线一起使用。
 */

import React from 'react';
import { Divider } from 'antd';
import './multiple.less';
import './color.less';
import './wave.less';

export default () => (
  <>
    <Divider className="antd-colorful divider-multiple divider-color-primary" />
    <Divider className="antd-colorful divider-multiple divider-color-primary" />
    <br />
    <Divider
      dashed
      className="antd-colorful divider-multiple divider-color-success"
    />
    <Divider
      dashed
      className="antd-colorful divider-multiple divider-color-success"
    />
    <Divider
      dashed
      className="antd-colorful divider-multiple divider-color-success"
    />
    <br />
    <Divider
      dashed
      style={{ borderStyle: 'dotted' }}
      className="antd-colorful divider-multiple divider-color-warning"
    />
    <Divider
      dashed
      style={{ borderStyle: 'dotted' }}
      className="antd-colorful divider-multiple divider-color-warning"
    />
    <Divider
      dashed
      style={{ borderStyle: 'dotted' }}
      className="antd-colorful divider-multiple divider-color-warning"
    />
    <br />
    <Divider className="antd-colorful divider-multiple divider-wave-danger" />
    <Divider className="antd-colorful divider-multiple divider-wave-danger" />
    <Divider className="antd-colorful divider-multiple divider-wave-danger" />
    <Divider className="antd-colorful divider-multiple divider-wave-danger" />
    <Divider className="antd-colorful divider-multiple divider-wave-danger" />
  </>
);
