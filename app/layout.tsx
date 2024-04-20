import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  // newly added code
  title: 'Green World | Home of Nature Scenes', // newly added code
  description: 'Find the coolest nature images and videos', // newly added code
  keywords: 'nature animals trees fields', // newly added code
}; // newly added code

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
