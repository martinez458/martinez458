import { useState } from "react";

export const Footer = () => {
  // const [phoneMode, setPhoneMode] = useState(false);

  // if(window.innerWidth < 900){
  //   setPhoneMode(!phoneMode)
  // }return;

    return (
      <div className = 'footer'>
        {
        window.innerWidth < 900?
        <>
        <a href="https://px.a8.net/svt/ejp?a8mat=3TLICZ+18NJ5E+1WP2+64JTD" rel="nofollow">
        <img
          style={{border:0,
          width:"100dvw",
          height:"auto"}}
          alt=""
          src="https://www28.a8.net/svt/bgt?aid=231110963075&wid=001&eno=01&mid=s00000008903001029000&mc=1"
        />
        </a>
        </>
        :
        <></>
        }
        {/* <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=3TLICZ+18NJ5E+1WP2+64JTD" alt=""></img> */}
      </div>
    );
}