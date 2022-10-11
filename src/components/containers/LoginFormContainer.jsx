import { connect } from 'react-redux';
import { httpRequest } from '../../store/actions/actionsAsync';
import LoginForm from '../pure/LoginForm';

const mapStateToProps = (state) => {
  return {
    logged: state.userState.logged,
    fetching: state.userState.fetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => {
      let data = {
        email: email,
        password: password,
      };

      dispatch(httpRequest('POST', 'https://reqres.in/api/login', data));
    },
  };
};

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
