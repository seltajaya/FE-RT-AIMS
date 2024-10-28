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
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
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

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-3 text-black'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your email address' {...field} className='bg-inputField text-black' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-4'>
                  <div className='flex items-center justify-between text-black'>
                    <FormLabel>Password</FormLabel>
                  </div>
                  <FormControl>
                    <PasswordInput
                      placeholder='Enter your password'
                      {...field}
                      className='bg-inputField text-black'
                    />
                  </FormControl>
                  <div className='flex justify-between'>
                    <div className='flex text-sm font-medium text-muted-foreground hover:opacity-75'>
                      <Checkbox className='bg-inputField' />
                      <Label className='ml-2'>Remember Me</Label>
                    </div>
                    <Link
                      to='/forgot-password'
                      className='text-sm font-medium text-black underline text-bold hover:opacity-75'
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='bg-btnPrimary' loading={isLoading}>
              Sign In
            </Button>

            <div className='relative my-2'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs'>
                <span className='bg-white px-2 text-muted-foreground'>
                  Or login with
                </span>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <Button
                className='w-full border hover:bg-btnPrimary '
                type='button'
                loading={isLoading}
                leftSection={<FcGoogle className='h-4 w-4' />}
              >
                Google
              </Button>
              <Button
                className='w-full border hover:bg-btnPrimary'
                type='button'
                loading={isLoading}
                leftSection={<FaApple className='h-4 w-4' />}
              >
                Apple
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
