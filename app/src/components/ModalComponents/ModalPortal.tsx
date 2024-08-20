import ReactDOM from 'react-dom';

type Props = {
  name:string,
  closeModalBtn:()=>void,
  children:JSX.Element,
};

export const ModalPortal = (props:Props) => {
  return (
    <>
    <div className='popup-Header'>
     <label>{props.name}</label>
        <button
          style={{
            position: 'absolute',
            top: '0',
            right:'0',
            width: '30px',
            height: '30px',
            color: 'white',
            zIndex: '50',
          }}
          onClick={()=>props.closeModalBtn()}>×
        </button>
      </div>
      <div 
      style={{
        position: 'absolute',
        top: '30px',
        width: '100%',
        height: '75vh',
        backgroundColor: 'rgba(0,0,0,0.9)',
        wordWrap: 'break-word',
        overflowX:'hidden',
        overflowY: 'scroll',
        overflow: 'scroll',
        zIndex: '20',
        // 枠線が表示できない
      }}>
        { props.children }
      </div>
    </>
  );
};