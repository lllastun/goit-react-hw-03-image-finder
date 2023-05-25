import { Component } from 'react';
import SearchBar from '../Searchbar/Searchbar';
import { toast } from 'react-toastify';
import { getImages } from 'services/pixabayAPI';
import Loader from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
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
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchData();
    }
    if (prevState.page !== this.state.page) {
      this.fetchData();
    }
  }

  handleChangeQuery = query => {
    this.setState({ query });
  };

  fetchData = () => {
    const { query, page } = this.state;
    const { pending, fulfilled, rejected } = STATUS;
    this.setState({ status: pending });
    // console.log(query);
    setTimeout(() => {
      getImages(query, page)
        .then(res => {
          this.setState({ images: res.data.hits, status: fulfilled });
          // console.log(`res.data.hits`);
          // console.log(res.data.hits);
          toast.success('Images is ready!');
        })
        .catch(e => {
          toast.error('Smth went wrong!');
          this.setState({ status: rejected });
        });
    }, 1500);
  };

  getCurrentImages = images => {
    this.setState({ images });
    // this.toggleModal();
  };

  render() {
    const { status, isOpen, pictureUrl, images } = this.state;
    const { pending, fulfilled, rejected } = STATUS;
    // console.log(images);
    return (
      <div>
        <SearchBar onChangeQuery={this.handleChangeQuery} />
        {status === pending && <Loader />}
        <ImageGallery />
        {status === fulfilled && (
          <ImageGallery
            getCurrentImages={this.getCurrentImages}
            images={this.state.images}
          />
        )}
        {/* {isOpen && (
          <Modal onClose={this.toggleModal}>
            <img src={pictureUrl} alt="" />
          </Modal>
        )} */}
      </div>
    );
  }
}
