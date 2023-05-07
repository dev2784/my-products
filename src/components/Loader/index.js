import LoadingIcon from "../../assets/img/loader.gif";
import "./style.scss";
const Loader = () => {
  return (
    <div className="loading-screen">
      <img src={LoadingIcon} alt="loading..." />
      <p>Loading...</p>
    </div>
  );
};
export default Loader;
