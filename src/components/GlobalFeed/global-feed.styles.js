import styled from 'styled-components';

export const NavLink = styled.ul`
  border-bottom: 2px solid #f3f3f3;
  list-style-type: none;
  margin: 50px 0 25px 0;
  min-height: 30px;
  padding: 0;
  position: relative;
  @media (min-width: 550px) and (max-width: 830px) {
    margin: 50px auto 25px auto;
    max-width: 600px;
  }
  @media (min-width: 830px) {
    margin: 50px 40px 25px 40px;
  }
  @media (min-width: 1400px) {
    margin: 50px 100px 25px 100px;
  }
`;

export const NavItem = styled.li`
  border-bottom: 2px solid #5cb85c;
  bottom: -2px;
  color: #5cb85c;
  display: inline-block;
  margin: 0;
  padding: 8px 16px;
  position: absolute;
`;

export const MainContainer = styled.div``;

export const TagsAndPostsContainer = styled.div`
  @media (min-width: 830px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
  @media (min-width: 1400px) {
    justify-content: space-between;
  }
`;

export const PostsDiv = styled.div`
  @media (min-width: 830px) {
    flex-basis: 900px;
  }
`;
