import { CommonTextBox } from './CommonTextBox.tsx';
import { ScoreDisplay } from './ScoreDisplay.tsx';
import { SelectLevel } from './SelectLevel.tsx';
import { PieChart } from './PieChart.tsx';


type Props = {
  name: string,
  totalAnswerCount: number,
  totalCorrectCount: number,
  answerAvgTimeMs: number,
}

export const Score = (props: Props) => {

  // データが無い場合は-1
  const correctAnswerRate = props.totalAnswerCount > 0
    ? (props.totalCorrectCount / props.totalAnswerCount) * 100
    : -1;
  const answerAvgTimeSec = props.answerAvgTimeMs / 1000;

  const convertCount = (value: number) => {
    if(value >= 1000 && value < 1000000){
      return Math.round(value) / 1000;
    }else if(value >= 1000000){
      return Math.round(value) / 1000000;
    }
    return value;
  }
  const converCountUnit = (value: number) => {
    if(value >= 1000 && value < 1000000){
      return "K";
    }else if(value >= 1000000){
      return "M";
    }
    return "";
  }

  return (
    <div className='scr'>
      <CommonTextBox className={'scr-ttl'} name={props.name} onClick={''} />
      <div className='score-pullContainer'>
        <SelectLevel pullArrowClass='score-pullArrow' />
      </div>
      <table className='score-container'>
        <tbody>
          <tr className='table-border'>
            <td>通算回答数</td>
            <td>
              <ScoreDisplay
                className='score-display'
                num={convertCount(props.totalAnswerCount)}
                digit={0}
                unit={converCountUnit(props.totalAnswerCount)}
              />
            </td>
          </tr>
          <tr className='table-border'>
            <td>通算正解数</td>
            <td>
              <ScoreDisplay
                className='score-display'
                num={convertCount(props.totalCorrectCount)}
                digit={0}
                unit={converCountUnit(props.totalCorrectCount)} />
            </td>
          </tr>
          <tr className='table-border'>
            <td>平均回答時間</td>
            <td>
              <ScoreDisplay
                className='score-display'
                num={answerAvgTimeSec}
                digit={1}
                unit={'s'} />
            </td>
          </tr>
        </tbody>
      </table>
      <PieChart r={55} strokeWidth={7} value={correctAnswerRate} />
      
    </div>
  );
};