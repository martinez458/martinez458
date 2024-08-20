import '../css/CommonLayout_New.css'
import '../css/QuitNextButton.css'
type Props = {
    quitnextButton: string[],
}

export const QuitNextButton = (props: Props) => {
    return (
    <div className = 'quitnextContainerStructure'>
        <button className = 'quitItemStructure quitItemVisual'>{props.quitnextButton[0]}</button>
        <button className = 'nextItemStructure nextItemVisual'>{props.quitnextButton[1]}</button>
    </div>
    );
};