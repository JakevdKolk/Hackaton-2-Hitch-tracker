type InputBoxProps = {
  name: string;
  value: string | number;
  type?: "text" | "number";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputBox({ name, value, onChange, type = "text" }: InputBoxProps) {
  return (
    <>
      <div id="wrapper">
        <label htmlFor={name}>{name}</label>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default InputBox;
