import './App.css';
import { Button, Card, Col, Form, Input } from 'antd';
import { useState } from 'react';
import ImageSelector from './components/ImageSelector';
import useFormHelper from './hooks/useFormHelper';

function App() {
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formItemLayout, onFailedSubmission, onFinish] = useFormHelper({
    image,
    setIsUploading,
  });

  return (
    <div style={{ margin: '1%' }}>
      <Card style={{ margin: 'auto', width: '50%' }}>
        <Form
          {...formItemLayout}
          onFinish={onFinish}
          onFinishFailed={onFailedSubmission}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please provide a title for the thumbnail',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Col span={8} offset={9} style={{ marginBottom: '10px' }}>
            <ImageSelector setImage={setImage} />
          </Col>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={isUploading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default App;
