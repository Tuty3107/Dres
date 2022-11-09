import Class from "../layouts/components/Class";
import EntryContent from "../layouts/components/EntryContent";
import Gallery from "../components/Gallery";
import InnerHeader from "../layouts/components/InnerHeader";
import RecentPost from "../layouts/components/RecentPost";
import Service from "../layouts/components/Service/Service";

function Home() {
  return (
    <>
      <article className="lg:relative lg:h-[200px] absolute top-0 w-full -z-[200]">
        <video autoPlay loop muted
          className="absolute max-w-full max-h-auto -z-[200]">
          <source src="headerVid.mp4" type="video/mp4" />
        </video>
      </article>
      <div className="lg:w-[1180px] mx-auto lg:relative lg:top-40">
        <div className="sm:hidden lg:block">
          <InnerHeader />
        </div>
        <EntryContent />
      </div>
      <Service />
      <Class />
      <Gallery />
      <RecentPost />
    </>
  );
}

export default Home;
