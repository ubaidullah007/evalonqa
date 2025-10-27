import { Source_Sans_3, Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--heading-font',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--body-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Evalon QA - AI Powered QA Services',
    template: '%s | Evalon QA - AI Powered QA Services',
  },
  description: 'Evalon QA - AI Powered QA Services',
  openGraph: {
    title: 'Evalon QA - AI Powered QA Services',
    description: 'Evalon QA - AI Powered QA Services',
  },
};

export default function RootLayout({ children } : any ) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Evalon QA" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${source_sans.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
