import PropTypes from 'prop-types';
import { LoadMore } from './BtnLoadMore.styled';

export const BtnLoadMore = ({ onClick }) => {
  return (
    <>
      <LoadMore type="button" onClick={onClick}>
        Load more
      </LoadMore>
    </>
  );
};

BtnLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
