import '../css/kknock_New.css'

type Props = {
  imgPath: string,
  indexName?: string,
  explanationSentence?: string
}

export const AnswerImageBox = (props: Props) => {
    return (
      <div className={'answerimgBoxStructure answerimgBoxVisual'}>
        <div className='answerContantsStructure'>
          <div className='imgBoxStructure'>

            {props.indexName}
          </div>
        </div>
        <div className={'answerContantsStructure'}>
            <p className='explanationSentenceStructure explanationSentenceVisual'>
              {props.explanationSentence}
            </p>
        </div>
      </div>
    );
};