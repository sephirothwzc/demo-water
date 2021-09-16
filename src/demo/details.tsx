import { InputItem, List } from 'antd-mobile';
import useForm, { TypeValues } from 'rc-form-hooks';
import { FC, forwardRef, Ref, useImperativeHandle } from 'react';

export interface DetailsRef {
  getValues: () => TypeValues<{
    [k: string]: string;
  }>;
}

export interface DetailsProps {
  item: {
    name: string;
    pontions: string;
    describe: string;
    solve: string;
  };
  ref: Ref<DetailsRef>;
}

const Details: FC<DetailsProps> = forwardRef(({ item }, ref) => {
  const { getFieldDecorator, values, resetFields } = useForm<{
    [k: string]: string;
  }>(item as any);

  useImperativeHandle(ref, () => ({
    getValues: () => {
      resetFields();
      return values;
    },
  }));

  return (
    <List>
      {getFieldDecorator('name', {
        initialValue: item?.name,
        rules: [{ required: false, message: 'Please input username!' }],
      })(<InputItem placeholder="请输入">问题名称</InputItem>)}
      {getFieldDecorator('pontions', {
        initialValue: item?.pontions,
        rules: [{ required: false, message: 'Please input username!' }],
      })(<InputItem placeholder="请输入">问题位置</InputItem>)}
      {getFieldDecorator('describe', {
        initialValue: item?.describe,
        rules: [{ required: false, message: 'Please input username!' }],
      })(<InputItem placeholder="请输入">情况概述</InputItem>)}
      {getFieldDecorator('solve', {
        initialValue: item?.solve,
        rules: [{ required: false, message: 'Please input username!' }],
      })(<InputItem placeholder="请输入">是否解决</InputItem>)}
    </List>
  );
});

export default Details;
