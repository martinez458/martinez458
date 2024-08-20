
export const Register = () => {
    const img = new URL('../assets/system/CreateUser.png', import.meta.url).href;

    return (
    <div className='login-Item'>
        <img className='registerImg' src={img} />
        <a className='linkFontSize' href='/registerpagetest'>新規アカウント作成</a>
    </div>
    );
};