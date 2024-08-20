import '../css/CommonLayout_New.css'

export const ReDoIncorrect = () => {

    return (
      <div className={'checkboxItem1Structure checkboxItem1Visual'}>
        {/* <label htmlFor="incorrect">間違えた<br />
          問題のみにする<br />
        </label>
        <input type="checkbox" id="incorrect" name="incorrect" /> */}
        <label htmlFor="incorrect">間違えた問題のみにする</label>
        <input type="checkbox" id="incorrect" name="incorrect" disabled={true}/>
      </div>
    );
}