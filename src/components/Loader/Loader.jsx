import { ThreeDots } from 'react-loader-spinner';
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.container}>
      <div className={s.spinner}>
      <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
    </div>
  );
};
export default Loader;