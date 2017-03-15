import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Socket from '../../components/Socket';

import { getState } from '../ServerContainer/selectors';
import * as serverActions from '../ServerContainer/actions';
import * as statsActions from '../StatsContainer/actions';

const mapStateToProps = getState;

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...serverActions, ...statsActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Socket);
