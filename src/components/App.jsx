import { Container } from './Container/Container.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { PixabaySearch } from './PixabaySearch/PixabaySearch';
import { PixabayPictures } from 'services/api';
import { Pictures } from './Pictures/Pictures';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { BtnLoadMore } from './BtnLoadMore/BtnLoadMore';

export class App extends Component {
  state = {
    q: '',
    pictures: [],
    isLoading: false,
    page: 1,
    largeImage: '',
    modalActive: false,
    totalHits: 0,
  };

  getPics = async values => {
    if (values.query === '') {
      return toast.warning('Please, enter Your search query');
    }
    try {
      this.setState({
        q: values.query,
        pictures: [],
        isLoading: true,
        page: 1,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  async componentDidUpdate(_, prevState) {
    const { page, q } = this.state;

    if (prevState.page !== page || prevState.q !== q) {
      this.setState({ isLoading: true });

      try {
        const response = await PixabayPictures(q, page);
        this.setState({ totalHits: response.totalHits });

        if (response.hits.length === 0) {
          return toast.error('No match. Type new query');
        }

        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...response.hits],
        }));
      } catch (error) {
        return toast.error('Something goes wrong...');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  showModal = image => {
    this.setState({ largeImage: image });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ modalActive }) => ({
      modalActive: !modalActive,
    }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { pictures, isLoading, modalActive, largeImage, totalHits } =
      this.state;
    return (
      <Container>
        <PixabaySearch onSubmit={this.getPics} />
        <Pictures items={pictures} onClick={this.showModal} />
        {isLoading && <Loader dots={true} />}
        {modalActive && (
          <Modal bigImage={largeImage} onClose={this.toggleModal} />
        )}
        {pictures.length !== 0 && pictures.length < totalHits && (
          <BtnLoadMore onClick={this.loadMore} />
        )}
        <ToastContainer />
      </Container>
    );
  }
}
