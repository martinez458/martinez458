import '../css/CommonTextBox.css'

type Props = {
  name: string,
  className: string,
  onClick: any,
}

export const CommonTextBox = (props: Props) => {

    return (
      <span className = {props.className} onClick={props.onClick}>
        {props.name}
      </span>
    );
}

