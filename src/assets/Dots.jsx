const Dots = ({ people, dotEvent, activeSlide }) => {
  return (
    <div className="dots-container">
      {people.map((_, index) => {
        const activeDot = index == activeSlide;
        return (
          <a
            key={index}
            className={activeDot ? "dot active-dot" : "dot"}
            onClick={() => {
              dotEvent(index);
            }}
          >
            •
          </a>
        );
      })}
    </div>
  );
};
export default Dots;
