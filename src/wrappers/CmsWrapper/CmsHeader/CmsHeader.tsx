import React from 'react';
import avatarImg from '@/assets/images/avatar.svg';
import { Layout } from 'antd';
const { Header } = Layout;
import cmsHeaderStyles from './CmsHeader.less';
import { QuestionCircleOutlined, BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

const CmsHeader = () => {
  return (
    <Header className={cmsHeaderStyles.headerLayout}>
      <div className={cmsHeaderStyles.headerContent}>
        <div>LOGO</div>
        <ul>
          <li>
            <QuestionCircleOutlined />
          </li>
          <li>
            <Badge count={5}>
              <BellOutlined />
            </Badge>
          </li>
          <li>
            <img className={cmsHeaderStyles.avatar} src={avatarImg} alt="" />
          </li>
        </ul>
      </div>
    </Header>
  );
};

export default CmsHeader;
