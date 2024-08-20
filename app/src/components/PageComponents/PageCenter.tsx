type Props = {
  body: JSX.Element
}

export const PageCenter = (props: Props) => {

    return (
      <div className = 'pagecenter area'>
        {props.body}
      </div>
    );
}