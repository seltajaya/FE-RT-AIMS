// import { imageIL } from '@/components/assets/images'
import { Link } from 'react-router-dom'
import { UserAuthForm } from './components/user-auth-form'
import { banner } from '@/components/assets/images'
import { Button } from '@/components/custom/button'

export default function SignIn() {
  return (
    <>
      <div className='container grid w-full h-full flex-col items-center justify-center lg:grid-cols-2'>
        <div className='hidden lg:block h-auto w-fit flex-col items-center justify-center'>
          <Button className='absolute mt-2 h-24 w-80 rounded-full border-4 border-[#8A3DFF]'>
            Try now for free !
          </Button>
          <img
            src={banner}
            alt=''
            className='max-h-screen rounded-3xl object-cover'
          />
        </div>
        <div className='flex h-full flex-col justify-center lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[360px]'>
            {/* <img src={imageIL} alt="" className='rounded-full' /> */}
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight text-black'>
                Welcome Back to Infinite Learning
              </h1>
              <p className='text-sm text-muted-foreground'>
                Enter your email and password to continue
              </p>
            </div>
            <UserAuthForm />
            <div className='flex justify-center'>
              <p className='text-muted-foreground'>Don't have an account?</p>
              <Link
                to={'/sign-up'}
                className='text-bold ml-2 font-medium text-black underline hover:opacity-75'
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
