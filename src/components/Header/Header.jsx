
import Mermazinha from '../../assets/mermazinha.svg'
import TitleDescription from "../TitleDescription/TitleDescription"
import SocialMedia from "../SocialMedia/SocialMedia"
import './index.css'

function Header() {
  return (
    <div className='header'>
        <img src={Mermazinha} alt="Logo Mermãs Digitais"/>
        <TitleDescription />
        <SocialMedia />
    </div>
  )
}

export default Header