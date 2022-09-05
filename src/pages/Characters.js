// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { HashLink } from "react-router-hash-link";
import Hulk from "../assets/img/hulk-5959620_960_720.png";
import CardComponent from "../components/Card";
// import Spinner from "../components/Spinner";
//********************************************* */
// En attendant la réparation de l'erreur CORS --- blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
import characters from "../assets/data/characters.json";
//********************************************* */

function Characters() {
  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://marvel-students.herokuapp.com/characters?page=${page}`
  //       );
  //       setData(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [page]);

  // return isLoading === true ? (
  //   <Spinner title="axiosError-repair in progress " />
  // ) :
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center py-20">
        <div className="flex flex-wrap w-full justify-center">
          {" "}
          {characters.results.slice(0, 18)?.map((character) => {
            const imagePath =
              character.thumbnail.path + "/portrait_uncanny.jpg";
            return (
              <CardComponent
                style={{
                  backgroundImage: `url(${imagePath ? imagePath : Hulk})`,
                }}
                title={character.name}
                description={
                  character.description
                    ? character.description
                    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate sed doloribus, tenetur porro veniam numquam,pariatur sapiente eius eos fugit possimus omnis. "
                }
              />
            );
          })}
        </div>
      </div>
      {/* <div className=" bg-gradient-to-r from-green-400 to-blue-500 text-center pb-5">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          // onClick={() => setPage(page - 1)}
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
          // onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div> */}
    </>
  );
}

export default Characters;
