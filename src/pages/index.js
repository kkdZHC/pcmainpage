import { Collapse, request, Space, Carousel, Card } from 'antd'
import { Layout, Menu, theme, Button, DatePicker, Form, TimePicker} from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import items2 from '@/components/Sider'
import { useState } from 'react';
const { Header, Content, Sider } = Layout;
import { Input } from 'antd';
const { RangePicker } = DatePicker;


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please select time!',
    },
  ],
};



const { Search } = Input;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


// This gets called on every request
const getData = async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`/api/init`)
  console.log(res);
  const data = await res.json()
  
  console.log(data);
  // Pass data to the page via props

  return { props: { data } }
}


const onSearch = (value) => console.log(value);

const onFinish = (fieldsValue) => {
  // Should format date value before submit.
  const rangeValue = fieldsValue['range-picker'];
  const rangeTimeValue = fieldsValue['range-time-picker'];
  const values = {
    ...fieldsValue,
    'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
    'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
    'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
    'range-time-picker': [
      rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
      rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
    ],
    'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
  };
  console.log('Received values of form: ', values);
};

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const tabListNoTitle = [
  {
    key: '北京',
    tab: '北京',
  },
  {
    key: '上海',
    tab: '上海',
  },
  {
    key: '广州',
    tab: '广州',
  },
];
const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState('app');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };
  return (
    <Layout>
      <Header className="header">
      <Space align="center">
        <a href='/'>
          携程旅行
        </a>
        
      <Search  
        placeholder="input search text"
        enterButton="Search"
        size="middle"
        allowClear
        onSearch={onSearch}
        style={{
          width: 500,
          align: "center"
      }}/>
      
        <text>请登录</text>
        <text>注册</text>
        <text>我的订单</text>
        {React.createElement(UserOutlined)}
      </Space>
      </Header>
      
      <Layout>
        <Sider
          collapsible 
          collapsed={false} 
          
          width={200}
          style={{
            background: colorBgContainer,
          }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <div>
            <text>预定酒店</text>
            <Form
              name="time_related_controls"
              {...formItemLayout}
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
            >
              <Input placeholder="目的地/酒店名称" />
              <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
                <RangePicker />
              </Form.Item>
              
              
              <Form.Item
                wrapperCol={{
                  xs: {
                    span: 24,
                    offset: 0,
                  },
                  sm: {
                    span: 16,
                    offset: 8,
                  },
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>

          </div>
          <div>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>


          <div>
            <br />
            <br />
            <Card
              style={{
                width: '100%',
              }}
              title="酒店推荐"
              tabList={tabListNoTitle}
              activeTabKey={activeTabKey2}
              tabBarExtraContent={<a href="/">More</a>}
              onTabChange={onTab2Change}
            >
              {contentListNoTitle[activeTabKey2]}
            </Card>
          </div>





          <Button onClick={getData}>获取数据</Button>


        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;