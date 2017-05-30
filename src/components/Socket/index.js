import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

class Socket extends React.Component {
  constructor(props) {
    super(props);

    this.socket = null;

    if (localStorage.getItem('host') !== null) {
      this.props.actions.connect(
        localStorage.getItem('host')
      );
    }
  }

  componentDidUpdate() {
    if (this.props.status === 'connecting') {
      this.connect();
    }
    if (this.props.status === 'disconnecting') {
      this.disconnect();
    }
  }

  componentWillUnmount() {
    this.disconnect();
  }

  disconnect = () => {
    if (this.socket) {
      this.socket.close();
      this.props.actions.disconnected();
    }
  };

  connect = () => {
    this.socket = io(this.props.host, {
      reconnection: false,
      query: {
        client: true,
      }
    });

    this.socket.on('stats', (data) => {
      this.props.actions.updateStats(data);
    });

    this.socket.on('tournaments', (data) => {
      this.props.actions.updateTournaments(data);
    });

    this.socket.on('connect', () => {
      this.props.actions.connected();
      // persist the host to localStorage
      localStorage.setItem('host', this.props.host);
    });

    this.socket.on('disconnect', (data) => {
      this.props.actions.disconnected(data);
    });

    this.socket.on('reconnect_error', (data) => {
      this.props.actions.error({
        type: 'reconnect_error',
        message: data.message,
      });
    });

    this.socket.on('connect_error', (data) => {
      this.props.actions.error({
        type: 'connect_error',
        message: data.message,
      });
    });

    this.socket.on('error', (data) => {
      const message = (typeof data === 'string') ? data : data.message;
      this.props.actions.error({
        type: 'error',
        message,
      });

    });

    this.socket.connect();
  };

  render (){ return null; }
}


Socket.propTypes = {
host: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    connected: PropTypes.func.isRequired,
    disconnected: PropTypes.func.isRequired,
    error: PropTypes.func.isRequired,
    updateStats: PropTypes.func.isRequired,
    updateTournaments: PropTypes.func.isRequired,
  }).isRequired,
};

export default Socket;