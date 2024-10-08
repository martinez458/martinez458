// 以下のように当該 tsx ファイルのディレクトリを参照し、インポートしておく
import { MainButton } from "../components/MainButton"
import { FormImage } from "../components/FormImage";

// import { Header } from '../components/PageComponents/Header.tsx'
// import { PageTop } from "../components/PageComponents/PageTop"
import { PageCenter } from "../components/PageComponents/PageCenter"
// import { PageBottom } from "../components/PageComponents/PageBottom"
// import { Footer } from '../components/PageComponents/Footer.tsx'

import "../css/CommonLayout.css"

function TOPPAGE() {
  const menuNames: string[] = [
    "千本ノック",
    "用語クイズ",
    "用語集",
    "成績",
    ];
    const menuEndpoint: string[] = [
      "/kknock",
      "/termquiz",
      "/fxterms",
      "/report",
    ];
    const menuEndpoints: { [key: string]: string; } = {
      "千本ノック": "/kknock",
      "用語クイズ":"/termquiz",
      "用語集":"/fxterm",
      "成績":"/report"
    };
}

export const TOP = () => {
  return (
    <>
      <PageCenter body={
        <>
          <FormImage />
          <div className='titleStructure titleVisual'>
            メインメニュー
          </div>
          <MainButton menuNames={menuNames} menuEndpoint={menuEndpoint}/>
        </>
        }
      />
        {
          menuEndpoints.map
        }
    </>
  );
}

export default TOPPAGE
