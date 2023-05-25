import { Component } from 'react';
import SearchBar from '../Searchbar/Searchbar';
import { toast } from 'react-toastify';
import { getImages } from 'services/pixabayAPI';
import Loader from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';
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
    setTimeout(() => {
      getImages(query, page)
        .then(res => {
          this.setState({ images: res.data.items, status: fulfilled });
          toast.success('Images is ready!');
        })
        .catch(e => {
          toast.error('Smth went wrong!');
          this.setState({ status: rejected });
        });
    }, 50);
  };

  render() {
    const { status, isOpen, pictureUrl } = this.state;
    const { pending, fulfilled, rejected } = STATUS;
    return (
      <div>
        <SearchBar onChangeQuery={this.handleChangeQuery} />
        {status === pending && <Loader />}
        <ImageGallery />
        {/* {status === fulfilled && <GitReposList getCurrentPicture={this.getCurrentPicture} repos={this.state.repos} />} */}
      </div>
    );
  }
}
