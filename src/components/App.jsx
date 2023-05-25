import { ToastContainer } from 'react-toastify';
import { ImageFinder } from './ImageFinder/ImageFinder';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ImageFinder />
      <ToastContainer />
    </div>
  );
};
