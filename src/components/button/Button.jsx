import React from 'react';
import PropTypes from 'prop-types';
import './button.css'; // Add CSS for button styles
import AddIcon from '../../icons/add.svg';

const Button = ({ variant, size, backgroundColor, labelColor, label, icon, iconPosition, disabled, onClick }) => {
  const className = `btn ${variant} ${size}`;
  const styles = {
    backgroundColor: backgroundColor,
    color: labelColor,
    border: 'none',
  };

  return (
    <button className={className} style={styles} onClick={onClick} disabled={disabled}>
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      {label}
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}

    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'link', 'destructive', 'warning']),
  size: PropTypes.oneOf(['compact', 'default', 'emphasized']),
  backgroundColor: PropTypes.string,
  labelColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right', 'off']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'emphasized',
  backgroundColor: '#007BFF',
  labelColor: '#FFFFFF',
  icon: <img src={AddIcon} alt="Add Icon" style={{ width: '16px', height: '16px' }} />,
  iconPosition: 'right',
  onClick: undefined,
  disabled: false,
};

export default Button;