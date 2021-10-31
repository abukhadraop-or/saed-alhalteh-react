import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import getTags from 'services/fake-tag-lists';
import Tags from '.';
import { Tag } from './tags.styles';

jest.mock('services/fake-tag-lists');

const mockData = {
  tags: ['odd', 'even', 'only the first Article', '3/9/16/27'],
};
const mockOnClick = jest.fn();

let mountWrapper;
const tag = () => mountWrapper.find(Tag);

describe('<Tags /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Tags selectedTags={[]} onClick={mockOnClick} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('sets the tags in the state after fetching them from the API', () => {
    getTags.mockReturnValue(mockData);
    mountWrapper = mount(<Tags selectedTags={[]} onClick={mockOnClick} />);

    expect(tag().length).toBe(4);
  });

  it('calls onClick function when clicked', () => {
    getTags.mockReturnValue(mockData);
    mountWrapper = mount(<Tags selectedTags={[]} onClick={mockOnClick} />);

    tag().at(0).simulate('click');

    expect(mockOnClick).toHaveBeenCalledWith('odd');
  });

  it('assigns isClicked props correctly', () => {
    getTags.mockReturnValue(mockData);
    mountWrapper = mount(<Tags selectedTags={['odd']} onClick={mockOnClick} />);
    const { isClicked } = tag().at(0).props();

    expect(isClicked).toBeTruthy();
  });
});
