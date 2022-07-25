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
        <IconSearch className={sty['search-icon']} />
      </div>
    </>
  );
};

export default ConSearch;
