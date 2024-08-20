import { useState } from 'react'

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChangeHamburgerMenu = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <div className='hamburger' onClick={handleChangeHamburgerMenu}>
        {isOpen ? 
          <div className='hamburger-contents'>
            <h2>&#215;</h2>
              <div className='hamburger-list'><br />
                {/* <a href='/account'>アカウント情報</a><br /> */}
                <a href='/kknock'>千本ノック</a><br />
                <a href='/termquiz'>用語クイズ</a><br />
                <a href='/fxterms'>用語集</a><br />
                <a href='/report'>成績</a><br />
                {/* <a href=''>設定</a><br /> */}
                <a href='mailto:team.trading104@gmail.com?subject=%5B%E3%81%8A%E5%95%8F%E5%90%88%E3%81%9B%5D?body=%E3%81%8A%E5%90%8D%E5%89%8D%E3%81%A8%E3%81%94%E7%94%A8%E4%BB%B6%E3%81%AE%E5%85%A5%E5%8A%9B%E3%82%92%E3%81%8A%E9%A1%98%E3%81%84%E8%87%B4%E3%81%97%E3%81%BE%E3%81%99%E3%80%82'>お問い合わせ</a><br />
              </div>
          </div>
          :
          <div className='hamburger-contents'>
            <h2>&#x2261;</h2>
          </div>
        }
      </div>
    </>
  );
}
