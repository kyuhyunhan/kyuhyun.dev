const Button = ({ text }: any) => {
  return (
    <button
      className="btn btn-primary"
      onClick={(event) => {
        window.alert('clicked');
      }}
    >
      {text}
    </button>
  );
};

export default Button;
