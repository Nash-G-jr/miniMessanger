import preLoader from '../../../assets/images/loadingLogo.gif';

let Preloader = (props) => {
  return (
    <div style={{ backgroundColor: 'purple' }}>
      <img src={preLoader} />
    </div>
  );
};

export default Preloader;
