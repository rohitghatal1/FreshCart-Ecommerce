import { Button, Form, Input } from "antd";
import profilePhoto from "../../assets/photos/profilePic.jpg";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";

const Contacts: React.FC = () => {
  const [sendMessageForm] = Form.useForm();
  const submitSendMessageForm = async (values: any) => {
    try {
      console.log(values);
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <h2 className="font-semibold text-lg border-b border-b-gray-600 py-3">
          Contacts
          {moment.now()}
        </h2>
        <div className="flex items-center gap-4">
          <div className="border p-3 rounded-md">
            <figure>
              <img src={profilePhoto} alt="Rohit Ghatal" />
            </figure>
            <p className="py-2 font-semibold text-lg">Rohit Ghatal</p>
          </div>
          <div className="border p-3 rounded-md">
            <h3 className="text-center font-semibold py-3 text-lg">
              Contact me:
            </h3>
            <div className="mt-3 px-2">
              <Form form={sendMessageForm} onFinish={submitSendMessageForm}>
                <Form.Item label="Name" name="name">
                  <Input />
                </Form.Item>
                <Form.Item label="Subject" name="subject">
                  <Input />
                </Form.Item>
                <Form.Item label="Message" name="message">
                  <TextArea />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" size="large">
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
