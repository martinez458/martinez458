import '../css/CommonLayout.css'
import { useNavigate } from 'react-router-dom';

type Props = {
    menuNames: string[],
    menuEndpoint: string[],
}

export const MainButton = (props: Props) => {
  const navigate = useNavigate();
  const handleToOtherPage = (endpoint: string) => {
    console.log(endpoint);
    navigate(endpoint); // 画面遷移
  }

  return (
    <div className = 'gridContainerStructure'>
      <button className = 'neonButton neonButtonColor' onClick={() => handleToOtherPage(props.menuEndpoint[0])}>{props.menuNames[0]}</button>
      <button className = 'neonButton neonButtonColor' onClick={() => handleToOtherPage(props.menuEndpoint[1])}>{props.menuNames[1]}</button>
      <button className = 'neonButton neonButtonColor' onClick={() => handleToOtherPage(props.menuEndpoint[2])}>{props.menuNames[2]}</button>
      <button className = 'neonButton neonButtonColor' onClick={() => handleToOtherPage(props.menuEndpoint[3])}>{props.menuNames[3]}</button>
    </div>
  );
}
