type Props = {
  body?: JSX.Element
}

export const PageTop = (props: Props) => {

    return (
      <div className = 'pagetop area'>
        {props.body}
      </div>
    );
}