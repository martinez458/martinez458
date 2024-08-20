import '../css/CommonLayout.css'
import '../css/kknock_New.css'
type Props = {
    updownButton: string[],
}

export const UpDownButton = (props: Props) => {
    return (
      <div className = 'updownContainerStructure'>
        <button className = 'upItemStructure upItemVisual'>{props.updownButton[0]}</button>
        <button className = 'downItemStructure downItemVisual'>{props.updownButton[1]}</button>
    　</div>
    );
};