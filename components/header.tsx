import Link from 'next/link';

const Header = () => {
  return (
    <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
      <div>
        <span className="Wild-Animals-TM xl:px-20"><Link href="/">My Animals TM</Link></span>
      </div>
      <div className="w-96 order-3 flex justify-center pt-3">
        <div className="flex gap-5">          
          <span className="Home-Shop-Blog"><Link href="/">Home</Link></span>
          <span className="Home-Shop-Blog">Shop</span>
          <span className="Home-Shop-Blog">Blog</span>
        </div>
      </div>
  </div>
  );
};

export default Header;
