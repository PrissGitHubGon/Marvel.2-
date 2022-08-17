import axios from "axios";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import Hulk from "../assets/img/hulk-5959620_960_720.png";
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
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {data.results.slice(0, 18)?.map((comics) => {
            const imagePath = comics.thumbnail.path + "/portrait_uncanny.jpg"; // Variable permettant d'afficher une image contenant une clé path et clé extension
            return (
              <div
                className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform md:hover:scale-105 transition duration-500"
                key={comics._id}
              >
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src={imagePath ? imagePath : Hulk}
                    alt="Colors"
                  />
                </div>
                <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                  {comics.title}
                </h1>
                <div className="my-4">
                  <div className="flex space-x-1 items-center">
                    <p>
                      {comics.description
                        ? comics.description
                        : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate sed doloribus, tenetur porro veniam numquam,pariatur sapiente eius eos fugit possimus omnis. "}
                    </p>
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
