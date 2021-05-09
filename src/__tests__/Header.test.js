import React from "react";
import Header from "../components/Header";
import { shallow, configure } from "enzyme";

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


// case1 测试组件是否正常渲染
// 通过查找存在 input 和 button,测试组件正常渲染
describe("HeaderView", () => {
  it("HeaderView Component should be render", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("header").exists()).toBeTruthy();
    expect(wrapper.find("h2").exists()).toBeTruthy();
  });
});

