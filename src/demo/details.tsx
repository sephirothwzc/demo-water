import { InputItem, List } from "antd-mobile";
import { FC } from "react";

const Details: FC<any> = ({
  getFieldDecorator,
}: {
  getFieldDecorator: any;
}) => {
  return (
    <List>
      {getFieldDecorator("name", {
        rules: [{ required: true, message: "Please input username!" }],
      })(<InputItem placeholder="请输入">问题名称</InputItem>)}
      {getFieldDecorator("pontions", {
        rules: [{ required: true, message: "Please input username!" }],
      })(<InputItem placeholder="请输入">问题位置</InputItem>)}
      {getFieldDecorator("describe", {
        rules: [{ required: true, message: "Please input username!" }],
      })(<InputItem placeholder="请输入">情况概述</InputItem>)}
      {getFieldDecorator("solve", {
        rules: [{ required: true, message: "Please input username!" }],
      })(<InputItem placeholder="请输入">是否解决</InputItem>)}
    </List>
  );
};

export default Details;
