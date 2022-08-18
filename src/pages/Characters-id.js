import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
function CharactersId() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-students.herokuapp.com/character/${params.characterId}`
        );
        console.log(params.characterId);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.characterId]);

  return isLoading === true ? (
    <Spinner />
  ) : (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div class="flex justify-center md:pt-20 " key={params.characterId}>
        <div class="flex flex-col md:flex-row md:max-w-1xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt=""
          />
          <div class="p-6 flex flex-col justify-start ">
            <h5 class="text-gray-900 text-3xl font-medium mb-2 fontFamily text-center font-bold">
              {data.name}
            </h5>
            <div class="text-gray-700 text-base mb-4">
              <ul className="detail overflow-y-auto h-80 lg:w-80 ">
                {data.comics.map((comic, index) => {
                  return (
                    <li key={index}>
                      {" "}
                      🔹{" "}
                      {comic.title
                        ? comic.title
                        : "Lorem ipsum dolor sit amet consectetur "}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gradient-to-r from-green-400 to-blue-500 text-center pb-5 pt-5">
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
          onClick={() => navigate("/characters")}
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default CharactersId;
