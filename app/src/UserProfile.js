import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = (props) => {
  return (
    <div>
      {props.avatarUrl ? <img src={props.avatarUrl} /> : 'No image'}
      <div>{props.name}</div>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string
};

export default UserProfile;