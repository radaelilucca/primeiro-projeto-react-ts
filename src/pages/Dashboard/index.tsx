import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img src="https://github.com/radaelilucca.png" alt="Lukita" />

          <div>
            <strong>radaelilucca/GoStackRepos</strong>
            <p>Hackintosh Dell G5 5590 / i7-9750H</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img src="https://github.com/radaelilucca.png" alt="Lukita" />

          <div>
            <strong>radaelilucca/GoStackRepos</strong>
            <p>Hackintosh Dell G5 5590 / i7-9750H</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img src="https://github.com/radaelilucca.png" alt="Lukita" />

          <div>
            <strong>radaelilucca/GoStackRepos</strong>
            <p>Hackintosh Dell G5 5590 / i7-9750H</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
