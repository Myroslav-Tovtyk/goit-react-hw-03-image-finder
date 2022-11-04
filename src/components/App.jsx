import { Component } from 'react';
import { PixabaySearch } from './PixabaySearch/PixabaySearch';
import { PixabayPictures } from 'services/api';
import { Pictures } from './Pictures/Pictures';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './Container/Container.styled';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    q: '',
    pictures: [],
    isLoading: false,
    page: 1,
    largeImage: '',
    modalShow: false,
  };

  getPics = async values => {
    if (values.query === '') {
      return toast.warning('Please, enter Your search query');
    }
    try {
      this.setState({ isLoading: true });
      const pix = await PixabayPictures(values);
      this.setState({ pictures: pix.hits, q: values.query });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  async componentDidUpdate(_, prevState) {
    const { page, q } = this.state;

    if (prevState.page !== page || prevState.q !== q) {
      this.setState({ isloading: true });
      try {
        const response = await PixabayPictures(q, page);
        if (response.hits.length === 0) {
          return toast.error('No match. Type new query');
        }

        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...response.hits],
        }));
      } catch (error) {
        return toast.error('Something goes wrong...');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  showModal = image => {
    this.setState({ largeImage: image });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ modalShow }) => ({
      modalShow: !modalShow,
    }));
  };

  render() {
    const { pictures, isLoading, modalShow, largeImage } = this.state;
    return (
      <Container>
        <PixabaySearch onSubmit={this.getPics} onClick={this.showModal} />
        <Pictures items={pictures} />
        {isLoading && <Loader dots={true} />}
        {modalShow && <Modal image={largeImage} onClose={this.toggleModal} />}
        <ToastContainer />
      </Container>
    );
  }
}
