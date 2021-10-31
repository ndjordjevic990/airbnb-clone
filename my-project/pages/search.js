import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Search() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section>
          <p className="text-xs">300+ stays for 5 number of guests</p>
          <h1 className="text-4xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation flexibility</p>
            <p className="button">Type of places</p>
            <p className="button">Price</p>
            <p className="button">Cancelation flexibility</p>
            <p className="button">Cancelation flexibility</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
