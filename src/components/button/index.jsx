import "./button.css";

const Button = ({ texto }) => {
  return (
    <button className="button_general">
      <span className="button2_general">{texto}</span>
    </button>
  );
};

export default Button;
