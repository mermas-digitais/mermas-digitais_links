import './index.css'
import { Global, Whatsapp, Instagram, Youtube } from 'iconsax-react'

function SocialMedia() {
  return (
    <div className='social-media'>
      <ul>
        <li><a href="https://mermasdigitais.netlify.app"><Global /></a></li>
        <li><a href="/"><Whatsapp /></a></li>
        <li><a href="https://www.instagram.com/mermasdigitais/"><Instagram /></a></li>
        <li><a href="https://www.youtube.com/@mermasdigitais8008"><Youtube /></a></li>
      </ul>
    </div>
  )
}

export default SocialMedia

