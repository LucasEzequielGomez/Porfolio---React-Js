import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-info'>
            <h2>Lucas Gomez</h2>
            <p>Buenos Aires, Argentina</p>
        </div>
        <div className='footer-contact'>
            <h2>Contratame</h2>
            <p>dale, que tengo hambre</p>
        </div>
        <div className='footer-sns'>
            <div className='design-by'>
                <h2>viejo petero</h2>
            </div>
            <div className='sns-links'>
                <a href='' target='_blank' rel='noreferrer'>
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='' target='_blank' rel='noreferrer'>
                    <i className='fab fa-telegram telegram'></i>
                </a>
                <a href='' target='_blank' rel='noreferrer'>
                    <i className='fab fa-whatsapp whatsapp'></i>
                </a>
                <a href='' target='_blank' rel='noreferrer'>
                    <i className='fab fa-gihub github'></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer;