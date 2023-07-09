import './index.css'
import { Global, Whatsapp, Instagram, Youtube } from 'iconsax-react'

function SocialMedia() {
  return (
    <div className='social-media'>
      <ul>
        <li><a href="https://mermasdigitais.netlify.app"><Global size={40}/></a></li>
        <li><a href="/"><Whatsapp size={40}/></a></li>
        <li><a href="https://www.instagram.com/mermasdigitais/"><Instagram size={40}/></a></li>
        <li><a href="https://www.youtube.com/@mermasdigitais8008"><Youtube size={40}/></a></li>
      </ul>
    </div>
  )
}

export default SocialMedia

