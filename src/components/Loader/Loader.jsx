import { MutatingDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = dots => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#4fa94d"
      secondaryColor="#4fa94d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ margin: 'auto' }}
      wrapperClass="MutatingDots"
      visible={dots}
    />
  );
};

Loader.propTypes = {
  dots: PropTypes.bool.isRequired,
};
