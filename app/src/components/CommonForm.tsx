

type Props = {
    Name: string,
    type: string,
    placeholder: string,
}

export const CmnForm = (props:Props) => {
    return (
    <div className= {'form' + ' ' + props.Name}>        
          <label className={'input' + ' ' + props.Name}>name={props.Name}</label>
    </div>
    );
};