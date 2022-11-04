import PropTypes from 'prop-types';
import { Li, Img } from './PictureItem.styled';

export const PictureItem = ({ items, onClick }) => {
  // console.log(items);
  return (
    <>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <Li key={id}>
          <Img
            src={webformatURL}
            alt={tags}
            onClick={() => onClick(largeImageURL)}
          />
        </Li>
      ))}
    </>
  );
};

PictureItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
