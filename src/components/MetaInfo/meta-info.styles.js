import styled from 'styled-components';

export const MetaInfoContainer = styled.div`
  display: flex;
`;

export const ProfileImg = styled.img`
  align-self: center;
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  width: 40px;
`;

export const NameAndDateContainer = styled.div`
  align-self: center;
  padding: 0 0 0 5px;
  & p:first-of-type {
    cursor: pointer;
    &:hover {
      color: #337433;
      text-decoration: underline;
    }
  }
`;

export const Username = styled.p`
  color: #5cb85c;
  font-size: 0.875rem;
  margin: 0;
`;

export const PublishDate = styled.p`
  color: rgb(92, 184, 92, 0.5);
  font-size: 0.75rem;
  margin: 0;
`;
