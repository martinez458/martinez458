import { useState } from "react";


type Props = {
  className: string,
  text: string,
  id: string,
  name: string,
  value: string,
  isChecked: boolean,
  handleCheckChange: (value: boolean) => void
}

export const CommonCheckBox = (props: Props) => {

  // const [isChecked, setIsChecked] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setIsChecked(event.target.checked);
    props.handleCheckChange(event.target.checked);
  };

    return (
      <div className={props.className}>
        <label htmlFor="incorrect">{props.text}</label>
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          value={props.value}
          required
          checked={props.isChecked}
          onChange={(e) => {handleInputChange(e);}}/>
      </div>
    );
}