
import "../styles/base/null.scss";
import "../styles/base/global.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../styles/layout.module.scss";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.mainWrapper}>
      <head>
      <title>Arhitect</title>
      <link rel="icon" href="/favicon.ico"/> 
      </head>
      <body >
    <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
