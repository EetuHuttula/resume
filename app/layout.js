import  "bootstrap/dist/css/bootstrap.min.css"
import AddBootstrap from "./AddBootstrap";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'SoftaKoppi',
  description: 'Softakopin tarjoamat palvelut: Verkkosivut, Verkkoapplikaatiot, Ylläpito. Tutustu ja ota yhteyttä!',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <AddBootstrap />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
