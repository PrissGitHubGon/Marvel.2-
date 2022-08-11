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
    <section class="text-blueGray-700 bg-white mt-20">
      {data.results.slice(0, 99)?.map((comics) => {
        const imagePath = comics.thumbnail.path + "/portrait_uncanny.jpg"; // Variable permettant d'afficher une image contenant une clé path et clé extension
        return (
          <div
            class="container flex flex-col items-center px-5 py-16 mx-auto  md:flex-row lg:px-28"
            key={comics._id}
          >
            <div class="flex flex-col items-start w-full pt-0 mb-16 text-left  lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
              <h1 class="mb-8 text-2xl font-black tracking-tighter text-black  md:text-5xl title-font">
                {comics.title}
              </h1>
              <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600">
                {comics.description
                  ? comics.description
                  : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate sed doloribus, tenetur porro veniam numquam,pariatur sapiente eius eos fugit possimus omnis. "}
              </p>
            </div>
            <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                class="object-cover object-center rounded-lg"
                alt="hero"
                src={imagePath}
              />
            </div>
          </div>
        );
      })}
      <div className="paginate">
        {" "}
        <button onClick={() => setPage(page - 1)}>Page précédente</button>
        <button onClick={() => setPage(page + 1)}>Page suivante</button>
      </div>
    </section>
  );
}

export default Comics;
