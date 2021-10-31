import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Pagination from '.';
import { PaginationButton } from './pagination.styles';

let wrapper;
const paginationButton = () => wrapper.find(PaginationButton);

describe('<Pagination /> tests', () => {
  it('matches the snapshot', () => {
    wrapper = shallow(<Pagination pageSize={5} onClick={jest.fn()} currentPage={1} count={25} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('displays no pagination buttons when count is less than pageSize  ', () => {
    wrapper = shallow(<Pagination pageSize={10} onClick={jest.fn()} currentPage={1} count={5} />);

    expect(paginationButton().length).toBe(0);
  });

  it('displays no pagination buttons when count is equal to pageSize  ', () => {
    wrapper = shallow(<Pagination pageSize={10} onClick={jest.fn()} currentPage={1} count={10} />);

    expect(paginationButton().length).toBe(0);
  });

  it('displays pagination buttons when count is larger than pageSize  ', () => {
    wrapper = shallow(<Pagination pageSize={5} onClick={jest.fn()} currentPage={1} count={10} />);

    expect(paginationButton().length).toBe(2);
  });

  it('calls onClick function when pagination button is clicked  ', () => {
    const mock = jest.fn();
    wrapper = shallow(<Pagination pageSize={5} onClick={mock} currentPage={1} count={10} />);

    paginationButton().at(1).simulate('click');

    expect(mock).toHaveBeenCalledWith(2);
  });
});
