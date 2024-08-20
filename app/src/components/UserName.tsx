import { CommonInputBox } from './CommonInputBox';

type Props = {
  handleUserNameChange: (value: string) => void
}

export const UserName = (props: Props) => {
  const img = new URL('../assets/system/UserIcon.png', import.meta.url).href;

  return (
    <div className='login-Item'>
      <img src={img} />
      <CommonInputBox
        className='form-length'
        name='userName'
        type='userName'
        placeholder='UserName'
        pattern='.{3,}'
        maxLength={60}
        handleValueChange={props.handleUserNameChange}
      />
    </div>
  );
};