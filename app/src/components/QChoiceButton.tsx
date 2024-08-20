import '../css/CommonLayout_New.css'
type Props = {
    QChoiceNames: string[],
}

export const QChoiceButton = (props: Props) => {

    return (
      <div className = 'gridSectionStructure'>
        <button className = 'gridItemChoiceStructure gridItemChoiceVisual'>{props.QChoiceNames[0]}</button>
        <button className = 'gridItemChoiceStructure gridItemChoiceVisual'>{props.QChoiceNames[1]}</button>
        <button className = 'gridItemChoiceStructure gridItemChoiceVisual'>{props.QChoiceNames[2]}</button>
        <button className = 'gridItemChoiceStructure gridItemChoiceVisual'>{props.QChoiceNames[3]}</button>
      </div>
    );
}