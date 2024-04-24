import "./Container.css";

const Container = (props) => {
  return (
    // to do more than one element write them inside div or <>
    <div className="container">{props.children}</div>
  );
};
export default Container;
