const Loading = ({ animate }) => {
  //   const progress = document.getElementsByClassName(value);
  //   console.log(progress);
  return (
    <div className="progress">
      <div
        className={animate ? "box animate" : "box"}
        // style={{ animation: animate ? "anima 4s infinite linear" : "" }}
      ></div>
      ;
    </div>
  );
};
export default Loading;
