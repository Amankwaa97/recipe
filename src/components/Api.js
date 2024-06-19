import React, { useState, useEffect } from 'react';

function Api() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      try {
        const response = await fetch(`https://api.edamam.com/search?q=random&app_id=0ab56e8f&app_key=482cb919137ed0ad24b576ecce8bbdc2&from=0&to=${itemsPerPage}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data.hits);
        setTotalPages(Math.ceil(data.count / itemsPerPage));
      } catch (error) {
        console.error('Fetch error: ', error);
      }
    };

    fetchRandomRecipes();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=0ab56e8f&app_key=482cb919137ed0ad24b576ecce8bbdc2&from=${(currentPage - 1) * itemsPerPage}&to=${currentPage * itemsPerPage}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecipes(data.hits);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    handleSearch();
  };

  const maxPageButtons = 10;
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search recipes..."
            className="px-4 py-2 rounded-md shadow-md w-full max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <button
            className="bg-[#558db5] hover:bg-blue-400 text-white rounded-md px-4 py-2 ml-4"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 mx-8 ">
          {recipes.map((recipe) => (
            <div key={recipe.recipe.uri} className="bg-white rounded-md shadow-md overflow-hidden">
              <img src={recipe.recipe.image} alt={recipe.recipe.label} className="w-full h-48 object-cover" />
              <div className="p-4 text-center ">
                <h3 className="text-lg font-bold truncate">{recipe.recipe.label}</h3>
                <p className="text-gray-600 mt-2">{recipe.recipe.source}</p>
                <a
                  href={recipe.recipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#558db5] hover:bg-blue-300 text-white rounded-md px-4 py-2 mt-4 inline-block"
                >
                  View Recipe
                </a>
              </div>
            </div>
          ))}
        </div>

        {recipes.length > 0 && (
          <div className="flex justify-center mt-8">
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((pageNumber) => (
              <button
                key={pageNumber}
                className={`bg-[#558db5] hover:bg-blue-600 text-white rounded-md px-4 py-2 mx-2 ${currentPage === pageNumber ? 'bg-blue-600' : ''}`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Api;
