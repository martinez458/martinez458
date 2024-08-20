type Props = {
  body?: JSX.Element
}

export const DownCenter = (props: Props) => {

    return (
      <div className = 'downcenter area'>
        {props.body}
      </div>
    );
}