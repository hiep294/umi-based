import React, { useState, useEffect, useMemo } from 'react';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
import { HomeOutlined, FunctionOutlined } from '@ant-design/icons';
import { useHistory } from 'umi';

interface ICustomMenuItem {
  key: string; // as url for detach pathname
  children: string; // as title
  icon?: JSX.Element;
}

interface ISubMenus {
  key?: string;
  icon?: JSX.Element;
  title?: string;
  items: Array<ICustomMenuItem>;
}

const subMenus: Array<ISubMenus> = [
  {
    items: [
      {
        key: '/', // like URL
        children: 'Home',
        icon: <HomeOutlined />,
      },
    ],
  },
  {
    items: [
      {
        key: '/products',
        children: 'Product',
        icon: <HomeOutlined />,
      },
    ],
  },
  {
    key: 'Functions',
    icon: <FunctionOutlined />,
    title: 'Functions',
    items: [
      {
        key: '/todos',
        children: 'Todos',
      },
    ],
  },
  {
    key: 'Functions2',
    icon: <FunctionOutlined />,
    title: 'Functions2',
    items: [
      {
        key: '/todos2',
        children: 'Todos2',
      },
    ],
  },
];

const AppSider = () => {
  const history = useHistory();

  const [state, setState] = useState({
    openKeys: [''],
    selectedKeys: [''],
  });

  const onOpenChange = (openKeys: Array<any>) => {
    setState({ ...state, openKeys });
  };

  useEffect(() => {
    try {
      const pathname = location.pathname;
      const pathnameParts = pathname.split('/');
      let selectedKey = '';
      const newOpenKey =
        subMenus.find(subMenu => {
          const menuItem = subMenu.items.find(
            item => `/${pathnameParts[1]}` === item.key,
          );
          if (menuItem) {
            selectedKey = menuItem.key;
            return true;
          }
          return false;
        })?.key || '';
      const newOpenKeys =
        state.openKeys.indexOf(newOpenKey) >= 0
          ? [...state.openKeys]
          : [...state.openKeys, newOpenKey];
      setState({
        openKeys: newOpenKeys,
        selectedKeys: [selectedKey],
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [location.pathname]);

  return useMemo(
    () => (
      <Sider
        width={200}
        className="site-layout-background"
        breakpoint="lg"
        collapsedWidth="0"
      >
        <Menu
          mode="inline"
          selectedKeys={state.selectedKeys}
          onOpenChange={(openKeys: any) => onOpenChange(openKeys)}
          openKeys={state.openKeys}
          style={{ height: '100%', borderRight: 0 }}
        >
          {subMenus.map(({ items, ...otherProps }) => {
            const MenuItemList = items.map(item => {
              return (
                <Menu.Item
                  {...item}
                  onClick={() => {
                    history.push(item.key);
                  }}
                />
              );
            });
            if (!otherProps.title) return MenuItemList;
            return <SubMenu {...otherProps}>{MenuItemList}</SubMenu>;
          })}
        </Menu>
      </Sider>
    ),
    [state.openKeys.length, state.selectedKeys[0]],
  );
};

export default AppSider;
