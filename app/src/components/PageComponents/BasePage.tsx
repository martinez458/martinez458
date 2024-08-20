import { PageBottom } from './PageBottom'
import { PageCenter } from './PageCenter'
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';
import { PageTop } from './PageTop';
// import { AnswerImageBox } from '../AnswerImageBox';
import '../../css/pages/PageComponents.css';


function BasePage(){
  return (
    <>
      <div>
        <LeftSide/>
        <PageTop body={<>青上</>}/>
        <PageCenter body=
        {<>
            {/* <AnswerImageBox></AnswerImageBox> */}
        </>
        }
        />
        <PageBottom body={<>青下</>}/>
        <RightSide/>
      </div>
    </>
    
  );
}

export default BasePage