import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Pagination from '.';
import { PaginationButton } from './pagination.styles';

describe('<Pagination /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(
      <Pagination pageSize={5} onClick={jest.fn()} currentPage={1} count={25} />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('displays no pagination buttons when count is less than pageSize  ', () => {
    const wrapper = shallow(
      <Pagination pageSize={10} onClick={jest.fn()} currentPage={1} count={5} />
    );

    expect(wrapper.find(PaginationButton).length).toBe(0);
  });

  it('displays no pagination buttons when count is equal to pageSize  ', () => {
    const wrapper = shallow(
      <Pagination pageSize={10} onClick={jest.fn()} currentPage={1} count={10} />
    );

    expect(wrapper.find(PaginationButton).length).toBe(0);
  });

  it('displays pagination buttons when count is larger than pageSize  ', () => {
    const wrapper = shallow(
      <Pagination pageSize={5} onClick={jest.fn()} currentPage={1} count={10} />
    );

    expect(wrapper.find(PaginationButton).length).toBe(2);
  });

  it('calls onClick function when pagination button is clicked  ', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Pagination pageSize={5} onClick={mock} currentPage={1} count={10} />);

    wrapper.find(PaginationButton).at(1).simulate('click');

    expect(mock).toHaveBeenCalledWith(2);
  });
});
