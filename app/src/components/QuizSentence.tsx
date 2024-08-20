import '../css/kknock.css'
import '../css/CommonLayout_New.css'

type Props = {
  quizNum: number
}

export const QuizSentence = (props: Props) => {
    return (
      <div className={'questionStructure'}>
        <div className={'questionSentenceStructure'}>
          <p className= {'questionNumberStructure questionNumberVisual'}>
            Q{props.quizNum}
          </p>
          <p className= {'questionSentenceMainStructure questionSentenceMainVisual'}>
            このあと相場は？
          </p>
        </div>
      </div>
    );
};