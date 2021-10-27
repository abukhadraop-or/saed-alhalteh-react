import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'styles/colors-and-breaking-points';

export const MetaInfoContainer = styled.div`
  display: flex;
`;

export const ProfileImg = styled.img`
  align-self: center;
  border-radius: 50%;
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
`;

export const NameAndDateContainer = styled.div`
  align-self: center;
  padding: 0 0 0 0.3125rem;
`;

export const Username = styled(Link)`
  color: ${colors.fern};
  font-size: 0.875rem;
  text-decoration: none;
  &:hover {
    color: ${colors.goblin};
    text-decoration: underline;
  }
`;

export const PublishDate = styled.div`
  color: ${colors.oFern};
  font-size: 0.75rem;
  margin: 0;
`;
