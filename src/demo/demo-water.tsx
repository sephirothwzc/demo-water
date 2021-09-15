import { FC } from 'react';
import { Card, WingBlank, WhiteSpace, List, InputItem, Button } from 'antd-mobile';
import useForm from 'rc-form-hooks';
import Details from './details';
import { useImmer } from 'use-immer';
import { dropRight } from 'lodash';

const DemoWater: FC = () => {
  const [itemCount, setItemCount] = useImmer([{ item: 0 }]);
  const { getFieldDecorator, validateFields } = useForm<{
    username: string;
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
        <Card>
          <Card.Header
            title="信息登记"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>信息登记</span>}
          />
          <Card.Body>
            <List renderHeader={() => 'Customize to focus'}>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>手机号</InputItem>)}
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>所属单位</InputItem>)}
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>管理范围</InputItem>)}
            </List>
          </Card.Body>
          {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
        </Card>
        <WhiteSpace size="lg" />
        <span>警示宣传措施</span>
        <Card>
          <Card.Body>
            <List>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>条幅(条)</InputItem>)}
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>警示牌(块)</InputItem>)}
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>警戒线(米)</InputItem>)}
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>摄像头(处)</InputItem>)}
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>广播(处)</InputItem>)}
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>围挡(米)</InputItem>)}
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>其他</InputItem>)}
            </List>
          </Card.Body>
          {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
        </Card>
        <WhiteSpace size="lg" />
        <span>当日巡查情况</span>
        <Card>
          <Card.Body>
            <List>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>巡查人次</InputItem>)}
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input username!' }],
              })(<InputItem>劝阻游人数量</InputItem>)}
            </List>
          </Card.Body>
          {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
        </Card>
        <WhiteSpace size="lg" />
        <span>当日问题情况汇总</span>
        <Card>
          <Card.Body>
            {itemCount.map((p) => (
              <>
                <Details key={p.item} getFieldDecorator={getFieldDecorator}></Details>
                <WhiteSpace size="lg" />
              </>
            ))}
            <List.Item>
              <Button
                type="warning"
                onClick={() =>
                  setItemCount((draft) => {
                    return dropRight(draft);
                  })
                }
              >
                删除
              </Button>
            </List.Item>
            <List.Item>
              <Button
                type="ghost"
                onClick={() =>
                  setItemCount((draft) => {
                    draft.push({ item: draft.length + 1 });
                    return draft;
                  })
                }
              >
                添加情况汇总
              </Button>
            </List.Item>
          </Card.Body>
          {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
      <Button type="primary">提交</Button>
    </form>
  );
};

export default DemoWater;
