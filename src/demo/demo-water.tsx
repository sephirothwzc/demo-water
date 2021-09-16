import { FC, useRef } from 'react';
import { WingBlank, WhiteSpace, List, InputItem, Button, Icon, Toast } from 'antd-mobile';

import useForm from 'rc-form-hooks';
import Details from './details';
import { useImmer } from 'use-immer';
import { dropRight, get, keys } from 'lodash';
import './all.css';

const DemoWater: FC = () => {
  const [itemCount, setItemCount] = useImmer([{}]);
  const { getFieldDecorator, values, resetFields } = useForm<{
    phone: string;
    company: string;
    range: string;
    banner: string;
    brand: string;
    line: string;
    [k: string]: string;
  }>();
  const handleSubmit = (e: React.FormEvent) => {
    console.log(values);
    const list: any[] = [];
    keys(refs.current).forEach((p: string) => list.push(get(refs.current, p).getValues()));
    console.log(list);
    Toast.success('提交成功!');
    resetFields();
  };

  // const globalRef = useRef<IGlobalRef>() as MutableRefObject<IGlobalRef>;
  const refs = useRef({});

  // const inputRef = useRef() as any;
  return (
    <form onSubmit={handleSubmit}>
      <WingBlank size="lg">
        <div className="nav-view">
          <div className="nav">信息登记</div>
        </div>

        <List key="1">
          {getFieldDecorator('phone', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入">手机号</InputItem>)}
          {getFieldDecorator('company', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入">所属单位</InputItem>)}
          {getFieldDecorator('range', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入">管理范围</InputItem>)}
        </List>

        {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}

        <WhiteSpace size="lg" />
        <span className="title">警示宣传措施</span>

        <List key="2">
          {getFieldDecorator('banner', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(
            <InputItem key="banner" placeholder="请输入">
              条幅(条)
            </InputItem>
          )}
          {getFieldDecorator('brand', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(
            <InputItem key="brand" placeholder="请输入">
              警示牌(块)
            </InputItem>
          )}
          {getFieldDecorator('line', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入">警戒线(米)</InputItem>)}
          {getFieldDecorator('camera', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入"> 摄像头(处)</InputItem>)}
          {getFieldDecorator('radio', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入">广播(处)</InputItem>)}
          {getFieldDecorator('enclosure', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入">围挡(米)</InputItem>)}
          {getFieldDecorator('other', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入">其他</InputItem>)}
        </List>

        {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}

        <WhiteSpace size="lg" />
        <span className="title">当日巡查情况</span>

        <List key="3">
          {getFieldDecorator('second', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入">巡查人次</InputItem>)}
          {getFieldDecorator('num', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入">劝阻游人数量</InputItem>)}
        </List>

        {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}

        <WhiteSpace size="lg" />
        <span className="title">当日问题情况汇总</span>

        {itemCount.map((p, idx) => (
          <>
            <Details
              key={idx}
              item={p as any}
              ref={(el) => ((refs as any).current[idx] = el)}
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
              draft.push({ no: draft.length + 1 });
              return draft;
            })
          }
        >
          添加情况汇总
        </div>

        {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}

        <WhiteSpace size="lg" />
      </WingBlank>
      <Button type="primary" onClick={handleSubmit}>
        提交
      </Button>
      <div className="bom-view"></div>
    </form>
  );
};

export default DemoWater;
