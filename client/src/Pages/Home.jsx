import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:5000/all-jobs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //jobs based on query paramters and job title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //filtering radio buttons category
  const handleRadioButtonChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //filtering selected button category
  const handleSelectedButtonChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //calculating the pagination page range
  const pageRange = () => {
    const startingindex = (currentPage - 1) * itemsPerPage;
    const endingIndex = startingindex + itemsPerPage;
    return { startingindex, endingIndex };
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //main filtering function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredItems;
    }
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          maxPrice,
          jobLocation,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) === parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          postingDate >= selected
      );
      console.log(filteredJobs);
    }

    const { startingindex, endingIndex } = pageRange();
    filteredJobs = filteredJobs.slice(startingindex, endingIndex);

    return filteredJobs.map((data, i) => <Cards key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
        <div className="bg-white p-4 rounded">
          <Sidebar
            handleRadioButtonChange={handleRadioButtonChange}
            handleSelectedButtonChange={handleSelectedButtonChange}
          />
        </div>

        {/* jobs section */}
        <div className="bg-white p-4 rounded-sm col-span-2">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data found!</p>
            </>
          )}

          {/* pagination section */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                className="hover:underline"
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <span className="mx-2">
                Page - {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* right side */}
        <div className="bg-white p-4 rounded">
          <Newsletter/>
        </div>
      </div>
    </>
  );
};

export default Home;
