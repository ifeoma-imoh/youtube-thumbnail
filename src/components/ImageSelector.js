import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ImageSelector = ({ setImage }) => {
  const props = {
    name: 'file',
    onRemove: () => {
      setImage(null);
    },
    beforeUpload: (selectedImage) => {
      setImage(selectedImage);
      return false;
    },
    showUploadList: false,
    maxCount: 1,
  };

  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Select Image</Button>
    </Upload>
  );
};

export default ImageSelector;
