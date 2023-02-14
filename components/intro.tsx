import Link from "next/link";

const Intro = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div>
          <h1 className="Wild-Animals-TM xl:px-20"><Link href="/">Wild Animals TM</Link></h1>
        </div>
          <div className="order-3 flex justify-center xl:px-20 py-3">
            <div className="flex gap-5">          
              <span className="Home-Shop-Blog"><Link href="/">Home</Link></span>
              <span className="Home-Shop-Blog">Shop</span>
              <span className="Home-Shop-Blog">Blog</span>
            </div>
          </div>
      </div>
      
      <div className="Rectangle-1 py-10">
        <div className="container mx-auto flex">
          <div className="grow xl:px-20"><span className='Blog'>Blog</span></div>
          <div className="xl:px-20 py-2 "><span className="HOME-BLOG uppercase">Home/Blog</span></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
