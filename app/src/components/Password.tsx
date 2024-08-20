import { useState } from "react";
import { CommonInputBox } from './CommonInputBox';


type Props = {
  handlePasswordChange: (value: string) => void
}

export const Password = (props: Props) => {
  const openedEyeImgPath = new URL('../assets/system/open-eyes.png', import.meta.url).href;
  const closedEyeImgPath = new URL('../assets/system/close-eyes.png', import.meta.url).href;
  const keyImgPath = new URL('../assets/system/key.png', import.meta.url).href;

  const [visible, setVisible] = useState(false);

  const pwvisible = () => {
    setVisible(!visible)
    console.log("click");

    if (visible) {
      console.log("text");
    }
    else {
      console.log("password");
    } return
  }


  return (
    <div className='login-Item'>
      <img src={keyImgPath} />
      <div className='pw-Container'>
        <button className="pwVisible" onClick={() => pwvisible()}>
          {visible ?
            <img className='close eye' src={closedEyeImgPath} /> :
            <img className='open eye' src={openedEyeImgPath} />
          }

        </button>
        <CommonInputBox
          className='form-length'
          name='password'
          type={visible ? 'text' : 'password'}
          placeholder='Password(半角英数8~16文字)'
          pattern='^([a-zA-Z0-9]{8,})$'
          maxLength={16}
          handleValueChange={props.handlePasswordChange}
        />
      </div>
    </div>

  );
};