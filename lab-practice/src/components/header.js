import {Component} from 'react'
import hamButton from '../images/Hamburger_icon.svg.png'

class Header extends Component {
    constructor() {
        super()
        // this.state = {
        //     toggleShow: false
        // } 
    }

    // toggleShowFunc = () => {
    //     this.setState((prevState) => {
    //         return {
    //             toggleShow: !prevState.toggleShow
    //         }
    //     })
    // }


render(){
    return(
        <header className='header'>
            <h1 className='logo'>Start Bootstrap</h1>
            <nav className='nav-bar'>
                <a className='nav-links'>Services</a>
                <a className='nav-links'>Portfolio</a>
                <a className='nav-links'>About</a>
                <a className='nav-links'>Team</a>
                <a className='nav-links'>Contact</a>
            </nav>
            <img className='ham-button' alt='Menu Icon' src={hamButton} onClick/>
            {/* <input> onClick = {this.toggleShowFunc}</input> */}
      </header>
    )
}
}
export default Header