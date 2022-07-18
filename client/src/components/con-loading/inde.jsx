 import sty from './index.module.less'
 //全局loading样式
const ConLoading = (props) => {
  const { visable } = props
  return (
    <div className={[sty.container, visable || sty.unactive_container].join(' ')}>
       <div className={sty.loader}>
         <div className={sty.loader__dot}></div>
         <div className={sty.loader__dot}></div>
         <div className={sty.loader__dot}></div>
         <div className={sty.loader__dot}></div>
         <div className={sty.loader__dot}></div>
         <div className={sty.loader__dot}></div>
         <div className={sty.loader__text}></div>
       </div>
    </div>
  );
};

export default ConLoading;
