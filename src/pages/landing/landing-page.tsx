import { Button } from '@/components/custom/button'
import { Navbar } from './components/navbar'
import { microphone, wave, wave2 } from '@/components/assets/images'

export default function landingPage() {
  return (
    <>
      <main>
        <Navbar />

        {/* Main Landing */}
        <section className='flex h-screen w-full'>
          <div className='flex h-[80%] w-1/2 flex-col justify-center p-5'>
            <h1 className='text-5xl font-bold text-black'>
              Voice to Text Revolution Smart with Summarized AI
            </h1>
            <p className='mt-2 w-[55%] text-2xl'>
              Transforming Speech into Clear Insights Effortlessly and
              Accurately
            </p>
            <div className='mt-5 flex'>
              <Button className='mr-2 rounded-full bg-colorPrimary p-5 text-white'>
                TRY FOR FREE
              </Button>
              <Button className='ml-2 rounded-full border p-5'>
                READ DOCUMENTATION
              </Button>
            </div>
          </div>
          <div className='hidden w-1/2 items-end justify-end lg:flex'>
            <img src={wave} alt='' className='w-[70%] object-cover' />
          </div>
        </section>

        {/* Our Advantage */}
        <section>
          <div className='relative flex'>
            <img src={wave2} alt='' className='w-2/5 object-cover' />
            <div className='flex w-3/5 flex-col items-center px-5'>
              <div className='absolute inset-0 flex h-3/5 flex-col items-center justify-around'>
                <h1 className='mb-5 text-5xl font-bold text-black'>
                  Our Advantage
                </h1>
                <div className='flex w-1/2 flex-col justify-center'>
                  <Button className='h-52 w-full rounded-lg bg-gradient-to-r from-[#8A3DFF] to-[#F8BA1C] text-4xl text-white'>
                    FREE FOR USE!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Features Web  */}
        <section>
          <div className='flex flex-col items-center justify-center space-y-32'>
            <h1 className='mb-5 text-5xl font-bold text-black'>
              Simple Steps to Begin
            </h1>
            <div className='flex justify-between'>
              <img src={microphone} alt='' />
              <div className='w-1/2 space-y-5'>
                <h2 className='w-[55%] text-4xl font-bold text-black'>
                  Live Audio Recording in Real-Time
                </h2>
                <p className='w-1/2'>
                  Capture your meetings effortlessly with live audio recording,
                  enabling seamless real-time transcription and summaries for
                  enhanced collaboration
                </p>
                <Button className='bg-[#000F37] p-5 text-white'>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
