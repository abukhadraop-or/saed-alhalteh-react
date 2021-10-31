import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import getTags from 'services/fake-tag-lists';
import Tags from '.';
import { Tag } from './tags.styles';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('services/fake-tag-lists');

const mockData = {
  tags: ['odd', 'even', 'only the first Article', '3/9/16/27'],
};

const mockOnClick = jest.fn();

describe('<Tags /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Tags selectedTags={[]} onClick={mockOnClick} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('sets the tags in the state after fetching them from the API', () => {
    getTags.mockReturnValue(mockData);
    const mountWrapper = mount(<Tags selectedTags={[]} onClick={mockOnClick} />);

    expect(mountWrapper.find(Tag).length).toBe(4);
  });

  it('calls onClick function when clicked', () => {
    getTags.mockReturnValue(mockData);
    const mountWrapper = mount(<Tags selectedTags={[]} onClick={mockOnClick} />);

    mountWrapper.find(Tag).at(0).simulate('click');

    expect(mockOnClick).toHaveBeenCalledWith('odd');
  });

  it('assigns isClicked props correctly', () => {
    getTags.mockReturnValue(mockData);
    const mountWrapper = mount(<Tags selectedTags={['odd']} onClick={mockOnClick} />);
    const { isClicked } = mountWrapper.find(Tag).at(0).props();

    expect(isClicked).toBeTruthy();
  });
});
