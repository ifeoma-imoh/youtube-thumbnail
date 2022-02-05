import { uploadImage, downloadImage } from '../utility/api';
import { buildThumbnailUrl } from '../utility/urlBuilder';
import { message } from 'antd';

const useFormHelper = ({ image, setIsUploading }) => {
  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
    wrapperCol: {
      sm: { span: 18 },
    },
  };

  const onFailedSubmission = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values) => {
    if (image === null) {
      message.error('You need to upload an image first');
    } else {
      setIsUploading(true);
      uploadImage({
        file: image,
        successCallback: (data) => {
          setIsUploading(false);
          const { title } = values;
          const { public_id: publicId, version } = data;
          const url = buildThumbnailUrl({ publicId, version, title });
          downloadImage(url);
        },
      });
    }
  };

  return [formItemLayout, onFailedSubmission, onFinish];
};

export default useFormHelper;
