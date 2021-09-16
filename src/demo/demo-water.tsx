import { FC, useEffect, useRef } from 'react';
import {
  WingBlank,
  WhiteSpace,
  List,
  InputItem,
  Button,
  Icon,
  Toast,
  ActivityIndicator,
} from 'antd-mobile';

import useForm from 'rc-form-hooks';
import Details from './details';
import { useImmer } from 'use-immer';
import { dropRight, get, keys, result, toString } from 'lodash';
import './all.css';
import { useDemoWaterMutation, useFindDemoWaterByIdQuery } from 'generator/auth-center.operation';
import { useLocation } from 'react-router-dom';

const useParamQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const DemoWater: FC = () => {
  const query = useParamQuery();
  const { data, loading: itemLoading } = useFindDemoWaterByIdQuery({
    variables: { id: toString(query.get('id')) },
    skip: !query.get('id'),
  });

  const [itemCount, setItemCount] = useImmer([{}]);
  const [loading, setLoading] = useImmer(false);
  const { getFieldDecorator, validateFields, values, resetFields, setFieldsValue } = useForm<{
    phone: string;
    company: string;
    range: string;
    banner: string;
    brand: string;
    line: string;
    details: any;
    [k: string]: string;
  }>();
  const handleSubmit = async (e: React.FormEvent) => {
    setLoading((draft) => true);
    e.preventDefault();
    const formValue = validateFields().then((result) => {
      return result;
    });
    // .catch((e) => Toast.fail(e.message));
    console.log(formValue);
    console.log(values);
    const list: any[] = [];
    keys(refs.current).forEach((p: string) => list.push(get(refs.current, p)?.getValues?.()));
    console.log(list);
    values.details = list.map((p) => p);
    return save({
      variables: {
        param: {
          phone: values.phone,
          jsonValue: values,
        },
      },
    })
      .then((resut) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        Toast.success('提交成功!');
        resetFields();
        setLoading((draft) => false);
      });
  };

  const [save] = useDemoWaterMutation();

  const refs = useRef({});

  const handlePhoneChange = (value: string) => {
    if (value === '13683267277') {
      setFieldsValue({ company: '永定河管理处' });
    }
  };

  const showDel = () => {
    if (itemCount.length <= 1) {
      return undefined;
    }
    return (
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
    );
  };

  useEffect(() => {
    setFieldsValue({ ...data?.demoWater?.jsonValue });
    setItemCount((draft) => {
      return data?.demoWater?.jsonValue?.details;
    });
  }, [data, setFieldsValue, setItemCount]);

  if (itemLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <WingBlank size="lg">
        <div className="nav-view">
          <div className="nav">信息登记</div>
        </div>

        <List key="1">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入正确的手机号' }],
          })(
            <InputItem onChange={handlePhoneChange} placeholder="请输入">
              手机号
            </InputItem>
          )}
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
          {getFieldDecorator('numCar', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入">劝阻社会车辆</InputItem>)}
          {getFieldDecorator('orther', {
            rules: [{ required: false, message: 'Please input username!' }],
          })(<InputItem placeholder="请输入">其他</InputItem>)}
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
        {showDel()}
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
      <Button loading={loading} type="primary" onClick={handleSubmit}>
        提交
      </Button>
      <div className="bom-view"></div>
    </form>
  );
};

export default DemoWater;
