import Footer from '../components/Footer';
import Header from '../components/Header';

function Search() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex ">
        <section className="flex-grow pt-14 px-6">
          <p>300+ Stays - 10 August </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
