function Footer(props) {
  const btnArr = [1, 2, 3, 4, 5];
  return (
    <div className="footer">
      <div className="button-box">
        {btnArr.map((element, index) => {
          return (
            <button
              key={index}
              id={props.rate == element ? "active" : ""}
              onClick={() => props.click(element)}
              className="button-varies"
            >
              {element}
            </button>
          );
        })}
      </div>
      <button onClick={props.change} className="submit">
        submit
      </button>
    </div>
  );
}
export default Footer;
