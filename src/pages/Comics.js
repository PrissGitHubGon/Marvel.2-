import axios from "axios";
import React, { useEffect, useState } from "react";
// import { HashLink } from "react-router-hash-link";
import Hulk from "../assets/img/hulk-5959620_960_720.png";
import CardComponent from "../components/Card";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";

function Comics() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [searchComics, setSearchComics] = useState("");

  const [page, setPage] = useState(0);

  useEffect(() => {
    const callServer = async () => {
      // const skip = page * 100;

      // let nameComics = "";
      // if (searchComics) {
      //   nameComics = `&title=${searchComics}`;
      // }

      const response = await axios.get(
        // `https://marvel-students.herokuapp.com/comics?&skip=${skip}${nameComics}` // ${nameComics} (à rajouter lors de la mise en place de la search barre)
        `https://lereacteur-marvel-api.herokuapp.com/comics`
      );

      setData(response.data.results);

      setIsLoading(false);
    };
    callServer();
  }, [page, searchComics]); //rajouter dans le tableau, une fois la search barre faite -> searchComics

  return isLoading === true ? (
    <Spinner title="axiosError-repair in progress " />
  ) : (
    <>
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center py-20">
        <SearchBar
          placeholder={"Search your favorite comics"}
          value={searchComics}
          setValue={setSearchComics}
          setPage={setPage}
        />
        <div className="flex flex-wrap w-full justify-center">
          {" "}
          {data.results.map((comics) => {
            const imagePath = comics.thumbnail.path + "/portrait_uncanny.jpg";
            return (
              <CardComponent
                style={{
                  backgroundImage: `url(${imagePath ? imagePath : Hulk})`,
                }}
                title={comics.title}
                description={
                  comics.description
                    ? comics.description
                    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate sed doloribus, tenetur porro veniam numquam,pariatur sapiente eius eos fugit possimus omnis. "
                }
              />
            );
          })}
        </div>
      </div>
      <div className=" bg-gradient-to-r from-green-400 to-blue-500 text-center pb-5">
        {/* <button
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
        </button> */}
        {searchComics === "" && (
          <div className="Comics__paging">
            {page > 0 && (
              <>
                {page > 1 && (
                  <>
                    <i
                      className="fas fa-angle-left"
                      onClick={() => {
                        setPage(0);
                      }}
                    ></i>
                    <p>...</p>
                  </>
                )}
                <p
                  onClick={() => {
                    setPage(page - 1);
                  }}
                >
                  {page}
                </p>
              </>
            )}

            <div className="Comics__page__currentPage">
              <p>{page + 1}</p>
            </div>

            {page < 14 && (
              <>
                <p
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  {page + 2}
                </p>
                <p>...</p>
                <i
                  className="fas fa-angle-right"
                  onClick={() => {
                    setPage(14);
                  }}
                ></i>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Comics;
