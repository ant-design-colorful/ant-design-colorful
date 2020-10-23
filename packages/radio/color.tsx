/**
 * desc: 多彩的颜色，支持 `antd` Radio 所有类型。
 */

import React from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio/interface';
import './color.less';

const App = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>Apple</Radio>
        <Radio className="antd-colorful radio-color-magenta" value={2}>
          Banana
        </Radio>
        <Radio className="antd-colorful radio-color-red" value={3}>
          Cherry
        </Radio>
        <Radio className="antd-colorful radio-color-volcano" value={4}>
          Durian
        </Radio>
      </Radio.Group>
      <Radio.Group onChange={onChange} value={value}>
        <Radio.Button value={1}>Apple</Radio.Button>
        <Radio.Button className="antd-colorful radio-color-red" value={2}>
          Banana
        </Radio.Button>
        <Radio.Button className="antd-colorful radio-color-magenta" value={3}>
          Cherry
        </Radio.Button>
        <Radio.Button className="antd-colorful radio-color-volcano" value={4}>
          Durian
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Radio.Group onChange={onChange} value={value}>
        <Radio className="antd-colorful radio-color-orange" value={1}>
          Apple
        </Radio>
        <Radio className="antd-colorful radio-color-gold" value={2}>
          Banana
        </Radio>
        <Radio className="antd-colorful radio-color-lime" value={3}>
          Cherry
        </Radio>
        <Radio className="antd-colorful radio-color-green" value={4}>
          Durian
        </Radio>
      </Radio.Group>
      <Radio.Group onChange={onChange} value={value}>
        <Radio.Button className="antd-colorful radio-color-orange" value={1}>
          Apple
        </Radio.Button>
        <Radio.Button className="antd-colorful radio-color-gold" value={2}>
          Banana
        </Radio.Button>
        <Radio.Button className="antd-colorful radio-color-lime" value={3}>
          Cherry
        </Radio.Button>
        <Radio.Button className="antd-colorful radio-color-green" value={4}>
          Durian
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Radio.Group onChange={onChange} value={value}>
        <Radio className="antd-colorful radio-color-cyan" value={1}>
          Apple
        </Radio>
        <Radio className="antd-colorful radio-color-blue" value={2}>
          Banana
        </Radio>
        <Radio className="antd-colorful radio-color-geekblue" value={3}>
          Cherry
        </Radio>
        <Radio className="antd-colorful radio-color-purple" value={4}>
          Durian
        </Radio>
      </Radio.Group>
      <Radio.Group buttonStyle="solid" onChange={onChange} value={value}>
        <Radio.Button className="antd-colorful radio-color-cyan" value={1}>
          Apple
        </Radio.Button>
        <Radio.Button className="antd-colorful radio-color-blue" value={2}>
          Banana
        </Radio.Button>
        <Radio.Button className="antd-colorful radio-color-geekblue" value={3}>
          Cherry
        </Radio.Button>
        <Radio.Button className="antd-colorful radio-color-purple" value={4}>
          Durian
        </Radio.Button>
      </Radio.Group>
    </>
  );
};

export default App;
