import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);
const findElement = (wrapper, value) => wrapper.find(`[data-test='${value}']`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findElement(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});


test("renders counter component", () => {
  const wrapper = setup();
  const counterComponent = findElement(wrapper, 'component-counter');
  expect(counterComponent.length).toBe(1);
});
test("renders button", () => {
  const wrapper = setup();
  const btnComponent = findElement(wrapper, 'component-btnContainer');


  expect(btnComponent.children().length).toBe(2);

});


test("counter starts at 0", () => {
  const wrapper = setup();
  const countComponent = findElement(wrapper, 'component-count');


  expect(countComponent.text()).toBe("0");
});

test("increment 버튼 클릭시 counter 증가", () => {

  const wrapper = setup();
  const btnIncrease = findElement(wrapper, 'component-btnIncrease');
  btnIncrease.simulate('click');
  const countComponent = findElement(wrapper, 'component-count').text();
  expect(countComponent).toBe("1");
});
