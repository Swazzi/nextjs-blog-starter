import Meta from './meta';
import Footer from './footer';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>
          <div>
            {children}
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
