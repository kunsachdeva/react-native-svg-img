import PropTypes from 'prop-types';
import { requireNativeComponent, ViewPropTypes } from 'react-native';

const iface = {
  name: 'ISvgImage',
  propTypes: {
    src: PropTypes.string,
    ...ViewPropTypes, // include the default view properties
  },
};

module.exports = requireNativeComponent('ISvgImage', iface);