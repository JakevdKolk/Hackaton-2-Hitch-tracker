type InputBoxProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputBox({ name, value, onChange }: InputBoxProps) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default InputBox;
