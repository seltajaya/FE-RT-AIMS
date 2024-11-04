import { Link } from 'react-router-dom'
import { SignUpForm } from './components/sign-up-form'
import { banner } from '@/components/assets/images'
import { Button } from '@/components/custom/button'

export default function SignUp() {
  return (
    <>
      <div className='container grid max-h-screen w-full flex-col items-center justify-center lg:grid-cols-2'>
        <div className='flex h-full flex-col justify-center lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[360px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight text-black'>
                Create an account
              </h1>
              <p className='text-sm text-muted-foreground'>
                Create account now and get 30 minutes credit for free
              </p>
            </div>
            <SignUpForm />
            <div className='flex justify-center'>
              <p className='text-muted-foreground'>Already have an account?</p>
              <Link
                to={'/sign-in'}
                className='text-bold ml-2 font-medium text-black underline hover:opacity-75'
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className='hidden lg:block h-auto w-fit flex-col items-center justify-center relative'>
          <Button className='absolute mt-2 h-24 w-80 rounded-full border-4 border-[#8A3DFF] z-10'>
            Try now for free!
          </Button>
        
          <div className='absolute top-32 right-16 z-10 text-[#FFF9D4] font-bold text-4xl'
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
            Summarize in seconds
          </div>

          <div className='absolute top-56 left-16 z-10 p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-lg shadow-lg w-64'>
            <p className='text-[#FFF9D4] text-lg leading-tight' 
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Cut through the clutter and get instant meeting summaries to stay ahead effortlessly.
            </p>
          </div>

          <div className='absolute bottom-32 right-16 z-10 p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-lg shadow-lg w-64'>
            <p className='text-[#FFF9D4] text-lg leading-tight' 
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              Instant insights from every meeting, so you can focus on what matters.
            </p>
          </div>

          <img
            src={banner}
            alt=''
            className='max-h-screen rounded-3xl object-cover'
          />
        </div>
      </div>
    </>
  )
}
