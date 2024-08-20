// import '../css/CommonLayout.css'
// import '../css/SelectLevel.css'

// react-selectのインポート
// import Select from "react-select";

// const levels = ["初級", "中級", "上級"];
// const levelOptions = [
//   { value: "low", label: "初級" },
//   { value: "middle", label: "中級" },
//   { value: "high", label: "上級" },
// ];

type Props = {
  pullArrowClass: string,
}

export const SelectLevel = (props:Props) => {
  const downArrowImgPath = new URL('../assets/system/down-arrow.svg', import.meta.url).href;
    return (
      // <div className='buttonItem1'>
      //   <select>
      //     {levels.map((level) => {
      //       return <option key={level}>{level}</option>;
      //     })}
      //   </select>
      //   <Select options={levelOptions} className='buttonItem1'></Select>
      // </div>
      <>
        <select className="neonPull neonButtonColor" name="level">
          <option value="low">初級</option>
        </select>
        <div className={props.pullArrowClass}>
          <img className="downArrowSize" src={downArrowImgPath} />
        </div>
      </>
    );
};

// 以下、一時的にコメントアウトのため、移動中（後で戻す）
{/* <option value="middle">中級</option>
<option value="high">上級</option> */}