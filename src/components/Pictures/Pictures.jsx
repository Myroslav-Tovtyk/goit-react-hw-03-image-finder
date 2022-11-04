import { PictureItem } from 'components/PictureItem/PictureItem';
import { Ul } from './Pictures.styled';

export const Pictures = ({ items, onClick }) => {
  if (items.length > 0) {
    console.log(items);
    return (
      <>
        <Ul>
          <PictureItem items={items} onClick={onClick} />
        </Ul>
      </>
    );
  }
};
