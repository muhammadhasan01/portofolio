import { DatePicker, Row, Col, Button, Layout, Space } from 'antd';
import Image from 'next/image';
import ProfilePic from '../../public/images/mhasan01.jpg';

const { Header, Content, Sider } = Layout;

const AboutMe = () => (
  <div>
    <Layout>
      <Sider className="bg">
        <Image src={ProfilePic} alt="Muhammad Hasan" />
      </Sider>
      <Layout>
        <Header className="bg-blue-700 text-white">About Me</Header>
        <Content className="container mx-auto px-3">
          Hello World! My name is Muhammad Hasan, I am a Final Year Informatics
          Student, I like doing programming stuff and learning software
          engineering :D
        </Content>
      </Layout>
    </Layout>
  </div>
);

export default AboutMe;
