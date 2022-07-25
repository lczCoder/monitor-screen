import { IconSearch } from '@douyinfe/semi-icons';
import sty from './index.less';

// 搜索组件
const ConSearch = (props) => {
  const { placeholder = '', label = '搜索', size = ['315px', '50px'] } = props;
  return (
    <>
      <div style={{width:size[0], height: size[1] }} className={sty['search-box']}>
        <input
          style={{ width: size[0] }}
          className={sty['input-main']}
          type="text"
          placeholder={placeholder}
        />
        <p className={sty['label']}>{label}</p>
        <img width='25px' className={sty['search-icon']} src="https://wandu-fe.oss-cn-beijing.aliyuncs.com/xxxx/find.png" alt="" />
      </div>
      <img width='35px' className={sty['list-icon']} src="https://wandu-fe.oss-cn-beijing.aliyuncs.com/xxxx/more.png" alt="" />
    </>
  );
};

export default ConSearch;
