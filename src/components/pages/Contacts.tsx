import { Button, Form, Input } from "antd";

const Contacts: React.FC = () => {
  const [sendMessageForm] = Form.useForm();
  return (
    <>
      <div>
        <h2 className="font-semibold text-lg">Contacts</h2>
        <div className="flex items-center gap-4">
          <div className="border p-3 rounded-md">
            <figure>
              <img src="#" alt="" />
            </figure>
            <p>Rohit Ghatal</p>
          </div>
          <div className="border p-3 rounded-md">
            <h3 className="text-center font-semibold">Contact me</h3>
            <div>
              <Form form={sendMessageForm}>
                <Form.Item label="Name" name="name">
                  <Input />
                </Form.Item>
                <Form.Item label="Subject" name="subject">
                  <Input />
                </Form.Item>
                <Form.Item label="Message" name="message">
                  <Input />
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
