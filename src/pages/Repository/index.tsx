import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, User, RepoInfo, IssuesContainer } from './styles';

import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <User>
        <img src="https://github.com/radaelilucca.png" alt="adasd" />
        <div>
          <strong>nome do repo</strong>
          <p>descricao do repo</p>
        </div>
      </User>
      <RepoInfo>
        <li>
          <strong>1808</strong>
          <p>Stars</p>
        </li>
        <li>
          <strong>48</strong>
          <p>Forks</p>
        </li>
        <li>
          <strong>71</strong>
          <p>Issues Abertas</p>
        </li>
      </RepoInfo>
      <IssuesContainer>
        <Link to="asdasd" key="22">
          <div>
            <strong>nome da issue</strong>
            <p>autor da issue</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </IssuesContainer>
    </>
  );
};

export default Repository;
