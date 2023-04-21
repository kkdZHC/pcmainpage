import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
const siderData = [{key:'酒店', value: UserOutlined},
                {key:'机票', value: LaptopOutlined},
                {key:'火车票', value: NotificationOutlined},
                {key:'旅游', value: NotificationOutlined},
                {key:'攻略·景点', value: NotificationOutlined},
                {key:'汽车·船票', value: NotificationOutlined},
                {key:'门票·活动', value: NotificationOutlined},
                {key:'用车', value: NotificationOutlined},
                {key:'全球购', value: NotificationOutlined},
                {key:'礼品卡', value: NotificationOutlined},
            
            ]
                
const items2 = siderData.map((ind, index) => {
    
    return {
      key: `${index}`,
      icon: React.createElement(ind.value),
      label: ind.key,
    //   children: new Array(4).fill(null).map((_, j) => {
    //     const subKey = index * 4 + j + 1;
    //     return {
    //       key: subKey,
    //       label: `option${subKey}`,
    //     };
    //   }),
    };
  });
  export default items2;