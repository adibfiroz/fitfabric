import Footer from "@/components/footer";
import Header from "@/components/header";


const LandingLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {

  return (
    <main >
      <div>
        <div className="mx-auto  h-full w-full">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default LandingLayout;