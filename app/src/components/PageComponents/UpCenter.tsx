type Props = {
  body?: JSX.Element
}

export const UpCenter = (props: Props) => {

    return (
      <div className = 'upcenter area'>
        {props.body}
      </div>
    );
}