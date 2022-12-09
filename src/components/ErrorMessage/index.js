import PropTypes from 'prop-types';
import { ErrorContent } from './styles';

const ErrorMessage = ({ children }) => {
  return <ErrorContent tabIndex="0">{children}</ErrorContent>;
};

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorMessage;
