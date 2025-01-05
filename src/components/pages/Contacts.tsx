import { Button, Form, Input } from "antd";

const Contacts: React.FC = () => {
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
              <Form>
                <Form.Item label="Name">
                  <Input />
                </Form.Item>
                <Form.Item label="Subject">
                  <Input />
                </Form.Item>
                <Form.Item label="Message">
                  <Input />
                </Form.Item>
                <Form.Item label="Email">
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
