import '../css/CommonLayout_New.css'
import { SelectLevel } from './SelectLevel'
// import { ReDoIncorrect } from './ReDoIncorrect'

type Props = {
  quizName: string,
  onUpdateState: () => void,
}

export const QuizStart = (props: Props) => {
  return (
    <div className='quizStartContainerStructure'>
      <div className='quizStartPullContainerStructure'>
        <SelectLevel pullArrowClass='quizStartPullArrowStructure' />
      </div>
      {/* <QuizStartButton name="スタート"></QuizStartButton> */}

      {/* <ReDoIncorrect /> */}
      <button className='neonButton neonButtonColor' onClick={props.onUpdateState}>
        {props.quizName}<br />
        スタート<br />
      </button>
    </div>
  );
}