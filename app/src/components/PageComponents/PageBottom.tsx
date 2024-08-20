type Props = {
  body?: JSX.Element
}

export const PageBottom = (props: Props) => {

    return (
      <div className = 'pagebottom area'>
        {props.body}
      </div>
    );
}