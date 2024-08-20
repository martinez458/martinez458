import { useState } from "react";


type Props = {
  className: string,
  name: string,
  type: any,
  placeholder: string,
  pattern: string
  maxLength: number,
  handleValueChange: (value: string) => void
}


export const CommonInputBox = (props: Props) => {

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    props.handleValueChange(password);
  };


  return (
    <input
      className={props.className}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={inputValue}
      onChange={(e) => { setInputValue(e.target.value); handleInputChange(e); }}
      pattern={props.pattern}
      maxLength={props.maxLength}
      required
    />

  );
}