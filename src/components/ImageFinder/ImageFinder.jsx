import { Component } from 'react';
import SearchBar from '../Searchbar/Searchbar';
import { toast } from 'react-toastify';
import { getImages } from 'services/pixabayAPI';
import Loader from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';

const STATUS = {
  idle: 'loading',
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

export class ImageFinder extends Component {
  state = {
    images: [],
    status: 'idle',
    query: '',
    page: 1,
    bigImage: '',
    isOpen: false,
    totalImg: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchData();
    }
  }

  toggleModal = () => {
    this.setState(({ isOpen }) => {
      return {
        isOpen: !isOpen,
      };
    });
  };

  fetchData = () => {
    const { query, page } = this.state;
    const { pending, fulfilled, rejected } = STATUS;
    this.setState({ status: pending });

    getImages(query, page)
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          totalImg: res.data.total,
          status: fulfilled,
        }));
        toast.success('Images is ready!');
      })
      .catch(e => {
        toast.error('Smth went wrong!');
        this.setState({ status: rejected });
      });
  };

  getCurrentImages = image => {
    this.setState({ bigImage: image });
    this.toggleModal();
  };

  handleChangeQuery = query => {
    this.setState({
      query,
      page: 1,
      images: [],
    });
  };

  handleClickMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { status, isOpen, bigImage, images, totalImg, page } = this.state;
    const { pending } = STATUS;
    return (
      <div>
        <SearchBar onSubmit={this.handleChangeQuery} />
        {status === pending && <Loader />}

        <>
          <ImageGallery
            getCurrentImages={this.getCurrentImages}
            images={images}
          />
        </>

        {totalImg > page * 12 && (
          <Button handleClickMore={this.handleClickMore}> </Button>
        )}
        {isOpen && (
          <Modal onClose={this.toggleModal}>
            <img
              src={bigImage}
              alt=""
              style={{
                maxHeight: '80vh',
                maxWidth: '50vw',
                objectFit: 'cover',
              }}
            />
          </Modal>
        )}
      </div>
    );
  }
}
