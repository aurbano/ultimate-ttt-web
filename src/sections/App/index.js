import React from 'react';
import { Container } from 'semantic-ui-react';

import Header from '../../components/Header';
import SocketContainer from '../../containers/SocketContainer';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <SocketContainer>
        <Header />
        <Container>
          { this.props.children }
        </Container>
      </SocketContainer>
    );
  }
}

export default App;
