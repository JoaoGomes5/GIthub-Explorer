import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #A8a8a3;
      transition: color 0.2s;

      &:hover { 
        color: #666;
      }

    }

    svg { 
      margin-right: 3px;
    }
`;

export const RepositoryInfo = styled.div`
    margin-top: 80px;
    
    header{
        display: flex;
        align-items:center;

        img {
          width: 120px;
          height: 120px;
          border-radius: 50%50%;
        }

        div {
          margin-left: 24px;
          
          strong {
            font-size: 36px;
            color: #3d3d4d;
          }
          p {
            font-size: 1 8px;
            color: #737380;
            margin-top: 4px;
          }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
          & + li {
            margin-left: 80px;
          }
          strong {
            display: block;
            font-size: 36px;

            color: #3d3d4d;
          }

          span {
            display: block;
            margin-top:4px;
            color: #6c6c80;
          }
        }
    }
`;

export const Issues = styled.ul`

  margin-top: 80px;
    div{
      flex: 1;
      margin: 0 16px;
      strong {
        font-size: 20px;
        color: #3D3D4D;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
        text-overflow: ellipsis;
      }
    }
 
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%100px;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition:  transform 0.3s;

    & + a {
        margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
  }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

