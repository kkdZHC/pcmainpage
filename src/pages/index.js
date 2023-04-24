import { Collapse, request, Space, Carousel, Card } from 'antd'
import { Layout, Menu, theme, Button, DatePicker, Form, TimePicker} from 'antd';
import React from 'react';
import styles from './index.module.css';
const { Header, Content, Sider } = Layout;
import { Input } from 'antd';
import HotelRecommendation from './HotelRecommendation';
import HotelReputation from './HotelReputation';
import HotelReservation from './HotelReservation';
import MarketAdvert from './MarketAdvert';







const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_content}>
        <HotelReservation/>
        <MarketAdvert />
        <HotelRecommendation />
      </div>
      <div className={styles.right_content}>
        <HotelReputation />
      </div>
    </div>
    
  );
};
export default App;