'use client';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, Zoom } from 'react-toastify';

const ToastStyle = () => {
  return (
    <ToastContainer
      limit={2}
      position="top-center"
      autoClose={3000}
      newestOnTop={true}
      hideProgressBar={false}
      transition={Zoom}
      draggable
      pauseOnHover
      pauseOnFocusLoss
    />
  );
};

export default ToastStyle;
