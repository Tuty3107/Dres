import Footer from "../components/Footer/Footer";
import Header from "../components/Header";

export type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className=" w-full mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
