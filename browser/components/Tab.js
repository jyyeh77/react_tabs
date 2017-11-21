import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({label}) => {
    return (
        <div className="tab">
            <div>{`This is ${label} content`}</div>
        </div>
    );
};

Tab.propTypes = {
    label: PropTypes.string.isRequired
};
export default Tab;