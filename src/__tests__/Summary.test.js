import React from "react";
import SummaryItem from "../components/SummaryItem";
import Summary from "../components/Summary";
import { shallow, mount, configure } from "enzyme";

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Summary", () => {

  it("SummaryItem Component should be render", () => {
    const wrapper = shallow(<SummaryItem />);
    expect(wrapper.find("div").exists()).toBeTruthy();
    expect(wrapper.find("p").length).toBe(2)
  });
});




