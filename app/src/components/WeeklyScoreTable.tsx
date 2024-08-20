import { CommonTextBox } from './CommonTextBox.tsx';
import { Report } from '../types/Report.ts';

type Props = {
  reports: Report[],
}

type WeeklyTableItem = {
  date: string,
  answerCount: number,
  correctRate: string,
}

export const WeeklyScoreTable = (props: Props) => {
  let weeklyTableItems : WeeklyTableItem[] = [];

  // 過去7日間のレポートデータを集計しweeklyTableItemsへ格納
  for (let i = 0; i < 7; i++) {
    let aDate = new Date();
    aDate.setDate(aDate.getDate() - i);
    const dateStr = `${aDate.getFullYear()}/${aDate.getMonth() + 1}/${aDate.getDate()}`;
    const reportMonthStr = dateStr.split('/')[1];
    const reportDayStr = dateStr.split('/')[2];
    
    let answerCountInDay = 0;
    let correctCountInDay = 0;
    let correctRateIndDay = 0;
    for (let j = 0; j < props.reports.length; j++) {
      const report = props.reports[j];
      const currentMonth = report.createdDate.toString().split('-')[1];
      const currentDay = Number(report.createdDate.toString().split('-')[2].split('T')[0]).toString();
      
      
      // 日付の比較（年をまたいで月日が一致することは無いため月と日だけの比較）
      if(currentMonth == reportMonthStr && currentDay == reportDayStr){
        // 当該年月日の回答回数をカウント
        answerCountInDay++;

        // 当該年月日の正答数をカウント
        if(report.result){
          correctCountInDay++;
        }
      }
    }

    // 当該年月日の正答率を算出
    if(answerCountInDay <= 0){
      correctRateIndDay = 0.0;
    }else{
      correctRateIndDay = correctCountInDay / answerCountInDay;
    }

    const weeklyTableItem: WeeklyTableItem = {
      date: dateStr,
      answerCount: answerCountInDay,
      correctRate: correctRateIndDay.toFixed(2),
    }
    weeklyTableItems.push(weeklyTableItem);
  }

  // 7日間成績のテーブル作成
  const weeklyTable = weeklyTableItems.map((item) => 
    <tbody>
      <tr className='table-border'>
        <td>{item.date}</td>
        <td>{item.answerCount}</td>
        <td>{item.correctRate}</td>
      </tr>
    </tbody>
  );


  return (
      <div className='weeklyScr'>
        <CommonTextBox className={'scr-ttl'} name={'週間成績'} onClick={''} />
          {props.reports.length > 0 ?
          <div style={{padding: '0 15px',}}>
            <table className='weeklyScrTable'>
              <thead>
                <tr className='table-border'>
                  <th>日付</th>
                  <th>回答数</th>
                  <th>正解率</th>
                </tr>
              </thead>
              {weeklyTable}
            </table>
          </div>
          :
          <>データなし</>
        }
      </div>
  );
};
