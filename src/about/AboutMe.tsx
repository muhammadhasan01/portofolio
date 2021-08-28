import { DatePicker, Row, Col, Button, Layout } from 'antd';

const { Header, Content, Sider } = Layout;

const AboutMe = () => (
  <>
    <Layout>
      <Sider>Picture of myself</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  </>
);

export default AboutMe;
