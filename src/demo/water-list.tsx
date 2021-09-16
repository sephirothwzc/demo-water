import { FC } from 'react';
import { ActivityIndicator, List } from 'antd-mobile';
import { useFindDemoWaterQuery } from 'generator/auth-center.operation';
import { DemoWaterFragment } from 'generator/auth-center';
import { useHistory } from 'react-router-dom';

const Item = List.Item;
const Brief = Item.Brief;

const WaterList: FC = () => {
  const history = useHistory();
  const { data, loading } = useFindDemoWaterQuery();
  const handleToDetails = (item: DemoWaterFragment) => {
    history.push(`/item?id=${item.id}`);
  };
  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <>
      <div className="nav-view">
        <div className="nav">信息管理</div>
      </div>
      <List renderHeader={() => '登记信息'} className="my-list">
        {data?.demoWaterAll?.map((p) => {
          return (
            <Item
              key={p?.id}
              arrow="horizontal"
              multipleLine
              onClick={() => handleToDetails(p as any)}
              platform="android"
            >
              {p?.createdAt} （{p?.phone}）<Brief>当日巡查情况:{p?.jsonValue.second}</Brief>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default WaterList;
