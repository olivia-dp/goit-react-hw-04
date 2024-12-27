import { FidgetSpinner } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='spinner'>
      <FidgetSpinner
        visible={true}
        height='80'
        width='80'
        ariaLabel='fidget-spinner-loading'
        wrapperStyle={{}}
        wrapperClass='fidget-spinner-wrapper'
      />
    </div>
  );
};
export default Loader;