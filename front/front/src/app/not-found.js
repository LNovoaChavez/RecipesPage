const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h3 className="text-2xl mb-2">Oops! This page doesn&apos;t exist.</h3>
          <p className="text-lg mb-6">But we have more products for you...</p>
          <Link href={Pathroutes.PRODUCTS} className="bg-pink-500 text-black px-6 py-3 rounded-lg text-lg hover:bg-pink-700 transition duration-300">
              See products
          </Link>
        </div>
      </div>
    );
  };
  
  export default NotFound;