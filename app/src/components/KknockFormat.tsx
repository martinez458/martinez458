import '../css/CommonLayout.css'
import '../css/kknock_New.css'

type Props = {
  correctAnswerRate: number
  timeFrameUnit?: string
  timeFrame?: number
  currencyUnit?: string
  restTime: number
  isCorrect?: boolean
  enableMsking?: boolean
  chartImagePath: string | null
  kknockState: number
  kknockResultstate: boolean
}

function TimeFrameFormat(timeFrame?: number, timeFrameUnit?: string){
  var timeFrameUnitJp = ""
  timeFrame ? "" : timeFrame
  switch (timeFrameUnit) {
    case "m":
      timeFrameUnitJp = "分"
      break;
    case "h":
      timeFrameUnitJp = "時間"
      break;
    default:
      timeFrameUnitJp = "分"
      break;
  }

  return `${timeFrame}${timeFrameUnitJp}足`
}


export const KknockFormat = (props: Props) => {
    var restTime = props.restTime < 0 ? 0 : props.restTime.toFixed(1);
    var formattedTimeFrameStr = TimeFrameFormat(props.timeFrame, props.timeFrameUnit);
    var formattedAnswerRate = Number(props.correctAnswerRate).toFixed(2);

    const maskingImage = new URL('../assets/system/black_masking.png', import.meta.url).href;
    const correctImg = new URL('../assets/system/blue_circle.png', import.meta.url).href;
    const incorrectImg = new URL('../assets/system/red_cross.png', import.meta.url).href;
    

    return (
      <div className={'overlayStructure'}>
        { props.chartImagePath &&
          <img className={'chartImgStructure'} src={props.chartImagePath} alt="チャート画像" />
        }
        { props.enableMsking ? 
        <div className='mkssPositionStructure'>
          <img
            className={props.kknockState == 2 ? 'mkss maskingAnimeStructure' : 'mkss'}
            src={maskingImage}
            alt="黒塗り画像"
          />
          </div>
          :
          <></>
        }
        
        <div className={'testTextboxesStructure testTextboxesVisual'}>
          <div className={'testTextboxStructure testTextboxVisual'}>正解率：{formattedAnswerRate}</div>
          <div className={'testTextboxStructure testTextboxVisual'}>{props.currencyUnit} {formattedTimeFrameStr}</div>
          <div className={'testTextboxStructure testTextboxVisual'}>残り{restTime}秒</div>
        </div>

        {/* 〇×表示 */}
        {
        props.kknockState == 3 ?
        <div className='resultImgContainerStructure'>
          {props.kknockResultstate ?
            <img className='resultImgStructure' src={correctImg}></img>
           :
            <img className='resultImgStructure' src={incorrectImg}></img>
          }
          </div>
          :
          <></>
        }
      </div>
    );
};