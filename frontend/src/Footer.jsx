import morilabsLogo from './assets/morilabs.png'

function Footer(){
    return(
        <div className="footer">
            <img src={morilabsLogo} alt="Mori Labs Logo" style={{ height: '2rem' }} className='footer-logo'/>
            <p> Created by Mori Labs </p>
        </div>
    )
}

export default Footer;
