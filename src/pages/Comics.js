import axios from "axios";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import Spinner from "../components/Spinner";

function Comics() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-students.herokuapp.com/comics?page=${page}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("console log error =>", error);
      }
    };
    fetchData();
  }, [page]);
  return isLoading === true ? (
    <Spinner />
  ) : (
    <>
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center py-20">
        <div className="flex flex-wrap w-full justify-center">
          {" "}
          {data.results.slice(0, 18)?.map((comics) => {
            const imagePath = comics.thumbnail.path + "/portrait_uncanny.jpg";
            return (
              <div
                style={{ backgroundImage: `url(${imagePath})` }}
                class=" card   bg-cover bg-no-repeat bg-center relative overflow-hidden h-96  m-4 rounded-2xl max-w-xs w-full bg-slate-300"
              >
                <div class="card-body bg-black/75 absolute box-border w-full duration-1000 bottom-0 h-8">
                  <div class="card-content p-8">
                    <h2 class="card-title text-white text-xl">
                      {comics.title}
                    </h2>
                    <p class="card-text text-white ">
                      {comics.description
                        ? comics.description
                        : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate sed doloribus, tenetur porro veniam numquam,pariatur sapiente eius eos fugit possimus omnis. "}
                    </p>

                    {/* <button className="bg-slate-300 text-teal-800 border-0 rounded-md p-2">
                      Learn more{" "}
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" bg-gradient-to-r from-green-400 to-blue-500 text-center pb-5">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ">
          <HashLink to="#top">
            <i className="fa  fa-arrow-circle-up"></i>
          </HashLink>
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Comics;
