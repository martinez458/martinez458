// import '../css/Score.css'

type Props = {
  className:string,
  num:number,
  unit:string,
  digit: number,
}

export const ScoreDisplay = (props: Props) => {

    return (
      <p className = {props.className}>
        {props.num.toFixed(props.digit)}{props.unit}
      </p>
    );
}