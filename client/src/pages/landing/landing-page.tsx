import { useState } from 'react';
import { Button } from '@/components/custom/button';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { microphone, wave, wave2, file, clock } from '@/components/assets/images';

export default function LandingPage() {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <>
      <main>
        <Navbar />
        
        {/* Main Landing */}
        <section className='flex flex-col h-screen w-full lg:flex-row lg:pl-20'>
          <div className='flex h-[80%] w-full lg:w-1/2 flex-col justify-center p-5 '>
            <h1 className='text-4xl md:text-5xl font-bold text-black '>
              Voice to Text Revolution Smart with Summarized AI
            </h1>
            <p className='mt-2 w-full md:w-[55%] text-xl md:text-2xl '>
              Transforming Speech into Clear Insights Effortlessly and Accurately
            </p>
            <div className='mt-5 flex flex-col md:flex-row'>
              <Button className='mb-2 md:mb-0 md:mr-2 rounded-full bg-colorPrimary p-5 text-white hover:text-black'>
                TRY FOR FREE
              </Button>
              <Button className='ml-2 rounded-full border p-5'>
                READ DOCUMENTATION
              </Button>
            </div>
          </div>
          <div className='hidden w-full lg:w-1/2 items-end justify-end lg:flex'>
            <img src={wave} alt='' className='w-[70%] object-cover' />
          </div>
        </section>

        {/* Our Advantage */}
        <section>
          <div className='relative flex flex-col lg:flex-row'>
            <img
              src={wave2}
              alt=''
              className='w-full lg:w-2/5 object-cover hidden lg:block'
            />
            <div className='flex w-full lg:w-3/5 flex-col items-center px-5'>
              <div className='flex flex-col items-center justify-center h-full lg:absolute lg:inset-0 lg:h-3/5 lg:justify-around py-5 -mt-20 sm:py-10 lg:py-0'>
                <h1 className='mb-5 text-3xl lg:text-5xl font-bold text-black text-center'>
                  Our Advantage
                </h1>
                <div className='flex w-full lg:w-1/2 flex-col justify-center'>
                  <Button className='h-16 lg:h-52 w-full rounded-lg bg-gradient-to-r from-[#8A3DFF] to-[#F8BA1C] text-xl lg:text-4xl text-white'>
                    FREE FOR USE!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>


       {/* Features Web */}
        <section>
          <div className='flex flex-col items-center justify-center space-y-8 max-w-7xl mx-auto px-4'>
            <h1 className='mt-10 mb-10 text-3xl md:text-5xl font-bold text-black text-center'>
              Simple Steps to Begin
            </h1>

            {/* Section 1 */}
            <div className='flex items-center justify-between w-full flex-col md:flex-row'>
              <img src={microphone} alt='' className='w-full md:w-1/4 mb-4 md:mb-0' />
              <div className='w-full md:w-3/4 space-y-5 md:ml-20 lg:ml-40'>
                <h2 className='text-2xl md:text-3xl font-bold text-black'>
                  Live Audio Recording in Real-Time
                </h2>
                <p className='text-lg md:text-xl w-full'>
                  Capture your meetings effortlessly with live audio recording,
                  enabling seamless real-time transcription and summaries for
                  enhanced collaboration.
                </p>
                <Button className='bg-[#000F37] p-4 text-white hover:text-black'>
                  Learn More
                </Button>
              </div>
            </div>

            {/* Section 2 */}
            <div className='flex items-center justify-between w-full flex-col md:flex-row'>
              <div className='w-full md:w-3/4 space-y-5 md:ml-10 lg:ml-30 mb-4 md:mb-0'>
                <h2 className='text-2xl md:text-3xl font-bold text-black'>
                  Drag and Drop Your Files to Upload
                </h2>
                <p className='text-lg md:text-xl w-full'>
                  Upload files instantly with our easy drag-and-drop feature, 
                  streamlining your workflow for faster meeting summaries.
                </p>
                <Button className='bg-[#000F37] p-4 text-white hover:text-black'>
                  Learn More
                </Button>
              </div>
              <img src={file} alt='' className='w-full md:w-1/4' />
            </div>

            {/* Section 3 */}
            <div className='flex items-center justify-between w-full flex-col md:flex-row'>
              <img src={clock} alt='' className='w-full md:w-1/4 mb-4 md:mb-0' />
              <div className='w-full md:w-3/4 space-y-5 md:ml-40 lg:ml-80'>
                <h2 className='text-2xl md:text-3xl font-bold text-black'>
                  Access Your Meeting History Anytime
                </h2>
                <p className='text-lg md:text-xl w-full'>
                  Keep track of all your past meetings effortlessly. 
                  Our history feature provides quick access to previous recordings and summaries, 
                  ensuring that important details are always at your fingertips. Review, revisit, and 
                  share meeting insights with ease.
                </p>
                <Button className='bg-[#000F37] p-4 text-white hover:text-black'>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* User Testimonials */}
        <section>
          <div className='flex flex-col items-center justify-center space-y-4 max-w-7xl mx-auto mt-20 px-4'>
            <h1 className='mt-10 mb-5 text-3xl md:text-5xl font-bold text-black text-center'>
              What Our Users Say
            </h1>

            <p className='text-lg md:text-xl w-full md:w-3/4 text-center'>
              The potential of our video translation service is vast, 
              and our users have shared numerous ways it has benefited them. 
              Here are a few testimonials highlighting their experiences.
            </p>

            <div className='flex space-x-4 overflow-x-auto w-full py-10'>
              {/* Review Box 1 */}
              <div className='min-w-[300px] md:min-w-[350px] p-5 bg-white rounded-lg shadow-md border-2 border-[#651FFF]'>
                <p className='text-lg font-semibold text-gray-800'>
                  “I love how easy it is to summarize my meetings using this website! The live audio recording feature captures every detail, 
                  and the summaries are concise and accurate. It saves me so much time!”
                </p>
                <span className='block mt-4 text-sm text-gray-600'>- User 1</span>
              </div>

              {/* Review Box 2 */}
              <div className='min-w-[300px] md:min-w-[350px] p-5 bg-white rounded-lg shadow-md border-2 border-[#651FFF]'>
                <p className='text-lg font-semibold text-gray-800'>
                  “The drag-and-drop upload feature is fantastic! I can quickly upload my meeting recordings, and the summaries are generated in no time. 
                  A great tool for busy professionals!”
                </p>
                <span className='block mt-4 text-sm text-gray-600'>- User 2</span>
              </div>

              {/* Review Box 3 */}
              <div className='min-w-[300px] md:min-w-[350px] p-5 bg-white rounded-lg shadow-md border-2 border-[#651FFF]'>
                <p className='text-lg font-semibold text-gray-800'>
                  “This website has transformed the way I document my meetings. The real-time audio transcription is impressive, 
                  and the summaries help me keep track of important discussions effortlessly.”
                </p>
                <span className='block mt-4 text-sm text-gray-600'>- User 3</span>
              </div>

              {/* Review Box 4 */}
              <div className='min-w-[300px] md:min-w-[350px] p-5 bg-white rounded-lg shadow-md border-2 border-[#651FFF]'>
                <p className='text-lg font-semibold text-gray-800'>
                  “Highly recommended for any business looking to expand its reach without language barriers, and website is very easy to application. I loved!”
                </p>
                <span className='block mt-4 text-sm text-gray-600'>- User 4</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className='flex flex-col items-center justify-center space-y-4 max-w-7xl mx-auto mt-20 px-4'>
            <h1 className='mt-20 mb-5 text-3xl md:text-5xl font-bold text-black text-center'>
              Frequently Asked Questions
            </h1>

            <div className='w-full max-w-3xl space-y-2'>
              {/* FAQ 1 */}
              <div className='border-b'>
                <button
                  className='flex justify-between items-center w-full py-4 text-lg md:text-xl font-medium text-left text-black focus:outline-none'
                  onClick={() => toggleFaq(1)}
                >
                  <span>What is summerized AI?</span>
                  <span>{open === 1 ? '-' : '+'}</span>
                </button>
                {open === 1 && (
                  <p className='pb-4 text-gray-600 text-sm md:text-base'>
                    Summerized AI is the process for replacing the original spoken language in an audio with a translated version by using artificial intelligence.                  
                  </p>
                )}
              </div>

              {/* FAQ 2 */}
              <div className='border-b'>
                <button
                  className='flex justify-between items-center w-full py-4 text-lg md:text-xl font-medium text-left text-black focus:outline-none'
                  onClick={() => toggleFaq(2)}
                >
                  <span>What languages do you currently support for audio translation?</span>
                  <span>{open === 2 ? '-' : '+'}</span>
                </button>
                {open === 2 && (
                  <p className='pb-4 text-gray-600 text-sm md:text-base'>
                    Currently only Indonesian and English, and in the future it will be expanded to other languages.
                  </p>
                )}
              </div>

              {/* FAQ 3 */}
              <div className='border-b'>
                <button
                  className='flex justify-between items-center w-full py-4 text-lg md:text-xl font-medium text-left text-black focus:outline-none'
                  onClick={() => toggleFaq(3)}
                >
                  <span>How long does the audio dubbing process take?</span>
                  <span>{open === 3 ? '-' : '+'}</span>
                </button>
                {open === 3 && (
                  <p className='pb-4 text-gray-600 text-sm md:text-base'>
                  for approximately 30 seconds
                  </p>
                )}
              </div>

              {/* FAQ 4 */}
              <div className='border-b'>
                <button
                  className='flex justify-between items-center w-full py-4 text-lg md:text-xl font-medium text-left text-black focus:outline-none'
                  onClick={() => toggleFaq(4)}
                >
                  <span>What does minute mean?</span>
                  <span>{open === 4 ? '-' : '+'}</span>
                </button>
                {open === 4 && (
                  <p className='pb-4 text-gray-600 text-sm md:text-base'>
                  ?
                  </p>
                )}
              </div>

              {/* FAQ 5 */}
              <div className='border-b'>
                <button
                  className='flex justify-between items-center w-full py-4 text-lg md:text-xl font-medium text-left text-black focus:outline-none'
                  onClick={() => toggleFaq(5)}
                >
                  <span>What types of content can I translate?</span>
                  <span>{open === 5 ? '-' : '+'}</span>
                </button>
                {open === 5 && (
                  <p className='pb-4 text-gray-600 text-sm md:text-base'>
                  Audio with mp3 and wav types
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/*footer*/}
        <Footer/>
      </main>
    </>
  );
}
