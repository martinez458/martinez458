import { CommonInputBox } from '../../src/components/CommonInputBox';


type Props = {
  handleMailAddressChange: (value: string) => void
}

export const Mail = (props: Props) => {
  const img = new URL('../assets/system/Mail.png', import.meta.url).href;

  return (
    <div className='login-Item'>
      <img src={img} />
      <CommonInputBox
        className='form-length'
        name='email'
        type='email'
        placeholder='E-mail'
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
        maxLength={254}
        handleValueChange={props.handleMailAddressChange}
      />
    </div>
  );
};