import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    color: #737380;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const User = styled.div`
  margin-top: 80px;

  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 32px;

    strong {
      font-size: 36px;
      line-height: 42px;
      color: #3d3d4d;
    }

    p {
      font-size: 20px;
      line-height: 23px;
      color: #737380;
      margin-top: 12px;
    }
  }
`;

export const RepoInfo = styled.ul`
  margin-top: 40px;
  display: flex;
  list-style: none;

  li {
    strong {
      font-size: 36px;
      line-height: 42px;
      color: #3d3d4d;
    }

    p {
      font-size: 20px;
      line-height: 23px;
      color: #6c6c80;
    }

    & + li {
      margin-left: 80px;
    }
  }
`;

export const IssuesContainer = styled.div`
  margin-top: 80px;

  max-width: 700px;

  a {
    background: #fff;
    border-radius: 8px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);

      img {
        border-radius: 20%;
        transform: scale(1.4);
        margin-right: 8px;
      }
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      transition: 0.3s;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
