import ReactDOM from 'react-dom';

type Props = {
  closeModalBtn:any,
  children:any,
}

export const Modal = (props:Props) => {
  return ReactDOM.createPortal(
    <div>
      <div>
        <div>{ props.children }</div>
          <div>
            <button onClick={props.closeModalBtn}>Close</button>
          </div>
      </div>
    </div>,
    document.body
  );
};
