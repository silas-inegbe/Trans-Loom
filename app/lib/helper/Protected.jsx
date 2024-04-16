import PropTypes from 'prop-types';
import { userContext } from './userContext';

const ProtectedRoute = ({ children }) => {

    return (
    <div>
        <userContext.Provider value={{ user }}>
        {children}
        </userContext.Provider>
    </div>
    )
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
