

export default function Button({ color, text, ...otherProps }) {
    const buttonColor = color === "primary" ? "buttonPrimary" : "buttonAccent";
  
    return (
      <div {...otherProps} className={`button ${buttonColor}`}>
        {" "}
        {text}{" "}
      </div>
    );
  }

