import styled from 'styled-components';
import { colors } from 'shared/styles';

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

  & p:first-of-type {
    cursor: pointer;

    &:hover {
      color: ${colors.goblin};
      text-decoration: underline;
    }
  }
`;

export const Username = styled.p`
  color: ${colors.fern};
  font-size: 0.875rem;
  margin: 0;
`;

export const PublishDate = styled.p`
  color: ${colors.oFern};
  font-size: 0.75rem;
  margin: 0;
`;
