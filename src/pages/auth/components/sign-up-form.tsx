import { HTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/custom/button'
import { PasswordInput } from '@/components/custom/password-input'
import { cn } from '@/lib/utils'

interface SignUpFormProps extends HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
  name: z.string().min(1, { message: 'Please enter your name' }),
  email: z
    .string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(1, {
      message: 'Please enter your password',
    })
    .min(7, {
      message: 'Password must be at least 7 characters long',
    }),
})

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    console.log(data)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            {/* Input Name */}
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='text-textPrimary space-y-3'>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter your name'
                      {...field}
                      className='text-textPrimary bg-inputField'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Email */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='text-textPrimary space-y-2'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter your email address'
                      {...field}
                      className='text-textPrimary bg-inputField'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Password */}
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='text-textPrimary space-y-2'>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder='Enter your password'
                      {...field}
                      className='text-textPrimary bg-inputField'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Button SignUp */}
            <Button
              className='hover:text-textPrimary mt-5 bg-colorPrimary text-primary'
              loading={isLoading}
            >
              Sign Up
            </Button>

            <div className='relative my-2'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs'>
                <span className='bg-foreground px-2 text-muted-foreground'>
                  Or login with
                </span>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              {/* Google */}
              <Button
                className='w-full border hover:border-transparent hover:bg-colorPrimary '
                type='button'
                loading={isLoading}
                leftSection={<FcGoogle className='h-4 w-4' />}
              >
                Google
              </Button>

              {/* Apple */}
              <Button
                className='w-full border hover:border-transparent hover:bg-colorPrimary'
                type='button'
                loading={isLoading}
                leftSection={<FaApple className='h-4 w-4' />}
              >
                Apple
              </Button>
            </div>

            {/* to Login */}
            <div className='flex justify-center space-x-2'>
              <p className='text-muted-foreground'>Already have an account?</p>
              <Link
                to={'/sign-in'}
                className='text-textPrimary font-medium underline'
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
