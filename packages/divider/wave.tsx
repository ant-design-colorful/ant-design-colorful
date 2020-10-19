/**
 * desc: 在原有基础上，新增波浪线类型。
 */

import React from 'react';
import { Divider } from 'antd';
import './wave.less';

export default () => (
  <>
    <Divider className="antd-colorful divider-wave-primary" />
    <Divider className="antd-colorful divider-wave-success" />
    <Divider className="antd-colorful divider-wave-warning" />
    <Divider className="antd-colorful divider-wave-danger" />
  </>
);
