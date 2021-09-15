import { FC } from "react";
import {
  WingBlank,
  WhiteSpace,
  List,
  InputItem,
  Button,
  Icon,
} from "antd-mobile";

import useForm from "rc-form-hooks";
import Details from "./details";
import { useImmer } from "use-immer";
import { dropRight } from "lodash";
import "./all.css";

const DemoWater: FC = () => {
  const [itemCount, setItemCount] = useImmer([{ item: 0 }]);
  const { getFieldDecorator, validateFields } = useForm<{
    phone: string;
    company: string;
    range: string;
    banner: string;
    brand: string;
    line: string;
    [k: string]: string;
  }>();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateFields()
      .then(console.log)
      .catch((e) => console.error(e.message));
  };
  return (
    <form onSubmit={handleSubmit}>
      <WingBlank size="lg">
        <div className="nav-view">
          <div className="nav">信息登记</div>
        </div>

        <List>
          {getFieldDecorator("phone", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入">手机号</InputItem>)}
          {getFieldDecorator("company", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入">所属单位</InputItem>)}
          {getFieldDecorator("range", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入">管理范围</InputItem>)}
        </List>

        {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}

        <WhiteSpace size="lg" />
        <span className="title">警示宣传措施</span>

        <List>
          {getFieldDecorator("banner", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入">条幅(条)</InputItem>)}
          {getFieldDecorator("brand", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入">警示牌(块)</InputItem>)}
          {getFieldDecorator("line", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入">警戒线(米)</InputItem>)}
          {getFieldDecorator("camera", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入"> 摄像头(处)</InputItem>)}
          {getFieldDecorator("radio", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入">广播(处)</InputItem>)}
          {getFieldDecorator("enclosure", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入">围挡(米)</InputItem>)}
          {getFieldDecorator("other", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入">其他</InputItem>)}
        </List>

        {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}

        <WhiteSpace size="lg" />
        <span className="title">当日巡查情况</span>

        <List>
          {getFieldDecorator("second", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入">巡查人次</InputItem>)}
          {getFieldDecorator("num", {
            rules: [{ required: true, message: "Please input username!" }],
          })(<InputItem placeholder="请输入">劝阻游人数量</InputItem>)}
        </List>

        {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}

        <WhiteSpace size="lg" />
        <span className="title">当日问题情况汇总</span>

        {itemCount.map((p) => (
          <>
            <Details
              key={p.item}
              getFieldDecorator={getFieldDecorator}
            ></Details>
            <WhiteSpace size="lg" />
          </>
        ))}
        <List.Item>
          <div
            className="delBtn"
            onClick={() =>
              setItemCount((draft) => {
                return dropRight(draft);
              })
            }
          >
            <Icon type="cross-circle-o" />
            <span className="del-margin">删除</span>
          </div>
        </List.Item>

        <div
          className="add-btn"
          onClick={() =>
            setItemCount((draft) => {
              draft.push({ item: draft.length + 1 });
              return draft;
            })
          }
        >
          添加情况汇总
        </div>

        {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}

        <WhiteSpace size="lg" />
      </WingBlank>
      <Button type="primary">提交</Button>
      <div className="bom-view"></div>
    </form>
  );
};

export default DemoWater;
