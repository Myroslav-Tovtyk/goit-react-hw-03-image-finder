import { Li, Img } from './PictureItem.styled';

export const PictureItem = ({ items, onClick }) => {
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
