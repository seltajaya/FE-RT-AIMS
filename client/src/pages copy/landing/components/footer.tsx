import { imagetextIL } from '@/components/assets/images';
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <footer className='bg-black text-white py-8 mt-20'>
        <div className='container mx-auto grid grid-cols-1 gap-8 md:grid-cols-5'>
          <div className='flex flex-col sm:flex-row md:flex-col items-center md:items-start text-white'>
            <img className='h-16 w-auto sm:mr-4' src={imagetextIL} alt='Your Company' />
              <div className='text-center sm:text-left'>
                <p className='text-white'>Jl. Hang Lekui KM 2 Sambau,</p>
                <p className='text-white'>Kota Batam, Kepulauan Riau</p>
                <p className='text-white'>29466</p>
              </div>
          </div>


          {/* Membuat Program, Community, dan About selalu sejajar */}
          <div className='md:col-span-3 grid grid-cols-3 gap-4'>
            <div className='text-white'>
              <h3 className='text-lg font-bold mb-2'>Program</h3>
              <ul className='space-y-1'>
                <li><Link to='/community-program1' className='hover:underline'>Learning</Link></li>
                <li><Link to='/community-program2' className='hover:underline'>Bootcamp</Link></li>
                <li><Link to='/community-program3' className='hover:underline'>Event</Link></li>
                <li><Link to='/community-program3' className='hover:underline'>MSIB</Link></li>
              </ul>
            </div>

            <div className='text-white'>
              <h3 className='text-lg font-bold mb-2'>Community</h3>
              <ul className='space-y-1'>
                <li><Link to='/community-program1' className='hover:underline'>Blog</Link></li>
                <li><Link to='/community-program2' className='hover:underline'>News</Link></li>
              </ul>
            </div>

            <div className='text-white'>
              <h3 className='text-lg font-bold mb-2'>About</h3>
              <ul className='space-y-1'>
                <li><Link to='/community-program1' className='hover:underline'>About Us</Link></li>
                <li><Link to='/community-program2' className='hover:underline'>Career</Link></li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h3 className='text-lg font-bold mb-2'>Our Social Media</h3>
            <div className='flex space-x-4 mb-2'> 
              <Link to='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='text-white h-8 w-8' />
              </Link>
              <Link to='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-white h-8 w-8' />
              </Link>
              <Link to='https://tiktok.com' target='_blank' rel='noopener noreferrer'>
                <FaTiktok className='text-white h-8 w-8' />
              </Link>
            </div>
            <div className='text-center md:text-left mt-12'>
              <p className='text-white'>0896387111079</p>
              <p className='text-white'>csc@infinitelearning.id</p>
            </div>
          </div>
        </div>
      </footer>

    <div className='bg-gray-700 text-center py-4'>
      <p className='text-white'>Copyright &copy; {new Date().getFullYear()} | Infinite Learning Indonesia.</p>
    </div>
    </>
  );
}
