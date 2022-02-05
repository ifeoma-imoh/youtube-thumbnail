import axios from 'axios';
import { cloudName, uploadPreset } from './cloudinaryConfig';

export const uploadImage = ({ file, successCallback }) => {
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', uploadPreset);

  axios
    .post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => successCallback(response.data));
};

export const downloadImage = (imageUrl) => {
  fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'youtube_thumbnail';
      link.click();
    });
};
