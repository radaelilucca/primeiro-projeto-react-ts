/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, User, RepoInfo, IssuesContainer } from './styles';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  html_url: string;
  forks_count: number;
  stargazers_count: number;
  open_issues: number;
  owner: {
    avatar_url: string;
  };
}

interface Issue {
  title: string;
  html_url: string;

  user: {
    avatar_url: string;
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[] | null>(null);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`/repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });
  }, [params.repository]);
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <>
          <User>
            <img src={repository.owner.avatar_url} alt="adasd" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </User>
          <RepoInfo>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <p>Stars</p>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <p>Forks</p>
            </li>
            <li>
              <strong>{repository.open_issues}</strong>
              <p>Issues Abertas</p>
            </li>
          </RepoInfo>
          <IssuesContainer>
            {issues &&
              issues.map(issue => (
                <a href={issue.html_url} target="blank" key={issue.title}>
                  <img src={issue.user.avatar_url} alt={issue.user.login} />
                  <div>
                    <strong>{issue.title}</strong>
                    <p>{issue.user.login}</p>
                  </div>
                  <FiChevronRight size={20} />
                </a>
              ))}
          </IssuesContainer>
        </>
      )}
    </>
  );
};

export default Repository;
