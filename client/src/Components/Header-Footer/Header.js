import React from 'react';
import './Header.scss';
import logo from '../../Assets/logo/TRU_Logo.png';
import menu_white from '../../Assets/icons/menu_white.svg';

class Header extends React.Component {
    state = {
        mobileMenu: false
    }
    displayMenu = () =>{
        if(this.state.mobileMenu) this.setState({mobileMenu: false});
        else  this.setState({mobileMenu: true});
    }
    render(){
        let pathname= window.location.href;
        let home = true;
        if(pathname.includes('awards') || pathname.includes('publications')) home= false;
        return (
            <header className='header'>
                <div className='header__logoContainer'>
                    <img src={logo} alt='logo' className='header__logo'/>
                </div>
                <div className='header__info'>
                    <div className='header__nameAndDesignation'>
                        <h2 className='header__name'>Jabed H. Tomal, Ph.D</h2>
                        <p className='header__designation'>Assistant Professor of Statistics</p>
                    </div>
                    <img src={menu_white} alt='menu' onClick={this.displayMenu} className='header__menu'/>
                </div>
                <nav className={`${this.state.mobileMenu? 'nav__mobile': 'nav__tablet'}`}>
                    <a href='/' className={`nav__link ${home? 'nav__link--active': ''}`}>Home  </a>
                    <a href='/publications' className={`nav__link ${pathname.includes('publications')? 'nav__link--active': ''}`}>Publications</a>
                    <a href='/awards' className={`nav__link ${pathname.includes('awards')? 'nav__link--active': ''}`}>Awards/Grants </a>
                    {/* <a href='/talks' className='nav__link'>Talks </a> */}
                    {/* <a href='/teaching' className='nav__link'>Teaching </a> */}
                    {/* <a href='/research' className='nav__link'>Research</a> */}
                    {/* <a href='/committee' className='nav__link'>Committee </a> */}
                    {/* <a href='/prospective-students' className='nav__link'>Prospective Students </a> */}
                </nav>
            </header>
        )
    }
}
export default Header;