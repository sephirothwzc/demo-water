import { InputItem, List } from 'antd-mobile';
import { FC } from 'react';

const Details: FC<any> = ({ getFieldDecorator }: { getFieldDecorator: any }) => {
  return (
    <List>
      {getFieldDecorator('username', {
        rules: [{ required: true, message: 'Please input username!' }],
      })(<InputItem>问题名称</InputItem>)}
      {getFieldDecorator('username', {
        rules: [{ required: true, message: 'Please input username!' }],
      })(<InputItem>问题位置</InputItem>)}
      {getFieldDecorator('username', {
        rules: [{ required: true, message: 'Please input username!' }],
      })(<InputItem>情况概述</InputItem>)}
      {getFieldDecorator('username', {
        rules: [{ required: true, message: 'Please input username!' }],
      })(<InputItem>是否解决</InputItem>)}
    </List>
  );
};

export default Details;
