import './index.css'
import { Global, Whatsapp, Instagram, Youtube } from 'iconsax-react'

function SocialMedia() {
  return (
    <div className='social-media'>
      <ul>
        <li><a href="https://mermasdigitais.netlify.app"><Global size={40}/></a></li>
        <li><a href="https://wa.me/559981453598?text=Ol%C3%A1%21+Eu+gostaria+de+falar+com+a+equipe+do+Merm%C3%A3s+Digitais."><Whatsapp size={40}/></a></li>
        <li><a href="https://www.instagram.com/mermasdigitais/"><Instagram size={40}/></a></li>
        <li><a href="https://www.youtube.com/@mermasdigitais8008"><Youtube size={40}/></a></li>
      </ul>
    </div>
  )
}

export default SocialMedia

