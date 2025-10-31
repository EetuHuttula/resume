import  "bootstrap/dist/css/bootstrap.min.css"
import AddBootstrap from "./AddBootstrap";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/about/page';
import References from "./pages/references/page";
import ContactForm from "./pages/contact/page";
export const metadata = {
  title: 'EetuHuttula',
  description: 'Softakopin tarjoamat palvelut: Verkkosivut, Verkkoapplikaatiot, Ylläpito. Tutustu ja ota yhteyttä!',
};

{/* Root layout component */}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <AddBootstrap />
        {children}
        <About />
        <References />
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
