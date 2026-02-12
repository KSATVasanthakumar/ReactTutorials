import axios from "axios";
import React, { useEffect, useState } from "react";

function useEffectTut1() {
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [post, setPost] = useState("");
  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos`
        );
        console.log("response", response.data);
        setPost(response.data);
      } catch (error) {
        setError(`Failed to load the Data:${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="flex justify-center py-3 flex-col">
      <h1 className="text-md font-bold text-gray-800 ">useEffect Tutorials</h1>
      <div className="flex justify-center py-4 m-3">
        {loading ? (
          <span>Loading...</span>
        ) : (
          <> {post && post.length > 0 && <span>{post.length}</span>}</>
        )}
        {/* <button
          className="bg-yellow-400 px-4 border-2 border-amber-900 border-r-2"
          onClick={() => setId((prev) => prev + 1)}
          type="button"
        >
          Increment
        </button> */}
      </div>
    </div>
  );
}

export default useEffectTut1;
