import Navbar from '@/features/navbarMain';
import Footer from '@/features/footerMain';

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
