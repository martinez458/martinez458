export const FormImage = () => {
    const SiteNameImgPath = new URL('../assets/system/SiteName2.png', import.meta.url).href;

    return (
    <>
        <img className='formImgStructure' src={SiteNameImgPath} />
    </>
    );
};