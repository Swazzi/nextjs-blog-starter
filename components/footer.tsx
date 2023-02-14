import Link from 'next/link';

const Footer = () => {
  return (
    <div className='container mx-auto xl:p-20 flex justify-between'>
        <div className='flex-col'>
          <div>
            <h2 className='Wild-Animals-TM'>Wild Animals TM</h2>
          </div>
          <div>
            <div>@ 2023 Teamgeek</div>
          </div>
        </div>
        <div className='flex-col'>
          <div>
            <h2 className='font-bold'>About us</h2>
          </div>
          <div>
            <div className='flex-col'>
              <div>Locations</div>
              <div>What we do</div>
              <div>How we do it</div>
              <div>Who we are</div>
            </div>
          </div>
        </div>
        <div className='flex-col'>
          <div>
            <h2 className='font-bold'>Product</h2>
          </div>
          <div>
            <div>Prints</div>
            <div>Lorem ipsum</div>
            <div>This is dummy test</div>
            <div>Hello World</div>
          </div>
        </div>
        <div className='flex-col'>
          <div>
          <h2 className='font-bold'>Contact us</h2>
          </div>
          <div>
            <div>work@teamgeek.io</div>
            <div>+27 64 891 2008</div>
          </div>
        </div>
    </div>
  );
};

export default Footer;
