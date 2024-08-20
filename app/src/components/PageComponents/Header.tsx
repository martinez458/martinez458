import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'
import { auth } from '../../auth/firebase';
import { AuthContext } from '../../auth/AuthProvider';
import { HamburgerMenu } from '../HamburgerMenu';
import '../../css/pages/PageComponents.css'


export const Header = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  
 const goLogin = () =>{
  navigate("/loginpage");
 };

 const goRegister = () =>{
  navigate('/registerpagetest');
 };

 const goTOP = () => {
  navigate('/');
 };

  //ログアウトのステート
  const [logoutState,setLogoutState] = useState(false);

   // ログアウト
   const handleLogOut = () => {
    setLogoutState(!logoutState)
    auth.signOut().then(() => {
    // メッセージを表示してからログアウト
    setTimeout(() => {
      navigate("/loginpage");
    }, 1000)
      console.log('ログアウト');
    })
    .catch((error) => {
      console.error('ログアウト', error);
    });
  }
 
  const LogoImgPath = new URL('../../assets/system/SiteLogo8.png', import.meta.url).href;
  const SiteNameImgPath = new URL('../../assets/system/SiteName2.png', import.meta.url).href;

    return (
      <div className = 'header'>
        {
          logoutState ? 
            <div className='login-state-message'>
              <span>ログアウト！</span>
            </div>
            :
            <></>
        }
        <img className='logoimg' src={LogoImgPath} onClick={goTOP}/>
        <img className='sitename' src={SiteNameImgPath} onClick={goTOP}/>
        <div className='headerBtnComponent'>
          {
          user ?
            <>
              <button className='headerBtn' onClick={handleLogOut}>ログアウト</button>
            </>
          :
            <>
              <button className='headerBtn' onClick={goLogin}>ログイン</button>
              <button className='headerBtn' onClick={goRegister}>登録</button>
            </>
          }
        </div>
        <HamburgerMenu/>
      </div>
    );
}