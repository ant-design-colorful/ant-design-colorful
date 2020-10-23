/**
 * desc: 交互效果一些扩展。注意对现有样式的影响。
 */

import React from 'react';
import { Radio, Divider } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio/interface';
import './type.less';

const App = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Divider plain orientation="left">
        Full
      </Divider>
      <Radio.Group onChange={onChange} value={value}>
        <Radio className="antd-colorful radio-type-full" value={1}>
          Apple
        </Radio>
        <Radio className="antd-colorful radio-type-full" value={2}>
          Banana
        </Radio>
      </Radio.Group>
      <Divider plain orientation="left">
        Background
      </Divider>
      <Radio.Group onChange={onChange} value={value}>
        <Radio className="antd-colorful radio-type-background" value={3}>
          Cherry
        </Radio>
        <Radio className="antd-colorful radio-type-background" value={4}>
          Durian
        </Radio>
      </Radio.Group>
    </>
  );
};

export default App;
