import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

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
    <span className="loader" style={{ marginBottom: "430px" }}>
      Load&nbsp;ng
    </span>
  ) : (
    <>
      <div class="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center py-20">
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {data.results.slice(0, 99)?.map((comics) => {
            const imagePath = comics.thumbnail.path + "/portrait_uncanny.jpg"; // Variable permettant d'afficher une image contenant une clé path et clé extension
            return (
              <div
                class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
                key={comics._id}
              >
                <div class="relative">
                  <img class="w-full rounded-xl" src={imagePath} alt="Colors" />
                </div>
                <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                  {comics.title}
                </h1>
                <div class="my-4">
                  <div class="flex space-x-1 items-center">
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
      <div className=" bg-gradient-to-r from-green-400 to-blue-500">
        {" "}
        <button onClick={() => setPage(page - 1)} className=" ml-10">
          Page précédente
        </button>
        <button onClick={() => setPage(page + 1)} className=" ml-10">
          Page suivante
        </button>
      </div>
    </>
  );
}

export default Comics;
