import React from 'react';

function Footer() {
    return (
        <footer className='bg-primary text-light py-3'>
            <div className='container'>
                <ul className='list-unstyled d-flex flex-column flex-sm-row justify-content-center'>
                    <li>
                        <a href="#header" className='text-light text-decoration-none'>Home</a>
                    </li>
                    <li className='mx-0 mx-sm-3 my-2 my-sm-0'>
                        <a href="#about" className='text-light text-decoration-none'>About</a>
                    </li>
                    <li className='me-0 me-sm-3 mb-2 md-sm-0'>
                        <a href="#projects" className='text-light text-decoration-none'>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className='text-light text-decoration-none'>Contact</a>
                    </li>
                </ul>
                <hr className='w-50 mx-auto' />
                <p className='mb-0'>
                    Copyright
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-c-circle mx-1" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
                    </svg>
                    John Smith
                </p>
            </div>
        </footer>
    )
}

export default Footer;