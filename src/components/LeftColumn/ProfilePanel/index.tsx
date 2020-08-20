import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/zorasantos.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Zoranildo Santos</h1>
        <h2>Font End Develop</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="conexao">Conexões</span>
          <span className="value">87</span>
        </div>

        <span className="rede">Amplie sua rede</span>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
        <div className="separator"></div>
        <div>
          <span className="items">Items salvos</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
