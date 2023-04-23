import { Layout, Menu, Button } from 'antd';
const { Footer, Sider, Content } = Layout;
import * as IconMap from './IconMap';
import { useMemo } from 'react';
import styles from './layouts.module.css';
import Header from '/src/components/Header';
//import { getRoutes } from '@/services/layout';
import { useState, useEffect } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

export default (props) => {
  const { children, location, history } = props;
  const [routeList, setRouteList] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  


//   const init = async () => {
//     const { success, data } = await getRoutes();
//     if (success) {
//       setRouteList(data);
//       setOpenKeys(data?.map((item) => item.path));
//     }
//   };




  // useEffect(() => {
  //   init();
  // }, []);

  const items = useMemo(() => {
    const handleRoute = (routeList) => {
      return routeList.map((routeItem) => {
        const route = {
          key: routeItem.path,
          label: routeItem.name,
        };
        if (
          routeItem.icon &&
          typeof routeItem.icon === 'string' &&
          IconMap[routeItem.icon]
        ) {
          const Icon = IconMap[routeItem.icon];
          console.log(Icon, 'Icon');
          route.icon = <Icon />;
        }
        if (routeItem?.routes?.length > 0) {
          route.children = handleRoute(routeItem.routes);
        }
        return route;
      });
    };
    return handleRoute(routeList);
  }, [routeList]);

  const handleSelect = ({ key }) => history.push(key);

  return (
    <Layout className={styles.wrapper}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          openKeys={openKeys}
          theme="light"
          mode="inline"
          items={items}
          selectedKeys={[location?.pathname]}
          onSelect={handleSelect}
          onOpenChange={(values) => setOpenKeys(values)}
          inlineCollapsed={true}
        />
      </Sider>
      <Layout>
        <div
          style={{
            height: '100% ',
            width: '100%',
            padding: '0 24px',
            overflow: 'auto',
          }}
        >
          <Header />
          
          {children}
        </div>
      </Layout>
    </Layout>
  );
};
