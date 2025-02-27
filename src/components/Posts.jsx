import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "../App.css";
import { Form } from "./Form";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
    return res;
  };

  useEffect(() => {
    getPostData();
  }, []);

  //function to delete post
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const updatedData = data.filter((currData) => {
          return currData.id !== id;
        });
        setData(updatedData);
      } else {
        console.log(
          "Failed to delete the Post, Response status : ",
          res.status
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  //function to handleUpdatePost
  const handleUpdatePost = (currData) => {
    setUpdateDataApi(currData);
  };

  return (
    <>
      <section className="section-form">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>
      <section className="section-post">
        <ol>
          {data.map((currData) => {
            const { body, id, title } = currData;

            return (
              <li key={id}>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button onClick={() => handleUpdatePost(currData)}>Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeletePost(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
