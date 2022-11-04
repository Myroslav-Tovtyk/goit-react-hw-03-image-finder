import { PictureItem } from 'components/PictureItem/PictureItem';
import { Ul } from './Pictures.styled';

export const Pictures = ({ items, onClick }) => {
  return (
    <>
      <Ul>
        <PictureItem items={items} onClick={onClick} />
      </Ul>
    </>
  );
};
