import React, { useContext } from "react";
import AppImage from "./AppImage";
import { useTranslation } from "react-i18next";
import { ApiAuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { defaultLang } = useContext(ApiAuthContext);
  return (
    <>
      <div
        className="  shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 flex flex-col h-[50vh] pb-3 group"
        key={blog.id}
      >
        <div className="h-[750px]! relative flex justify-center rounded-tr-lg rounded-tl-lg overflow-hidden">
          {/* <img
                  className="h-[200px] w-[320px] rounded-lg"
                  src={blog[`banner_${lang}`] ?? blog[`banner_${defaultLang}`]}
                  alt=""
                /> */}
          <AppImage
            className="h-full  w-full     bg-primary rounded-tr-lg rounded-tl-lg transform group-hover:scale-110 transition duration-500"
            src={blog[`banner_${lang}`] ?? blog[`banner_${defaultLang}`]}
            alt={blog[`title_${lang}`] ?? blog[`title_${defaultLang}`]}
          />
          <div className="absolute bottom-3 backdrop-blur-md bg-primary/60 p-2 rounded-xl">
            {blog.category[`name_${lang}`] ?? blog.category[`name_${defaultLang}`]}
          </div>
        </div>
        <div className="text-secondary px-3 py-3 flex flex-col justify-between  h-full">
          <div className=" flex flex-col gap-2">
            <p className="text-xl font-bold">
              {blog[`title_${lang}`] ?? blog[`title_${defaultLang}`]}
            </p>
            <p className="text-md">
              {blog[`short_description_${lang}`] ??
                blog[`short_description_${defaultLang}`]}
            </p>
          </div>

          <div className="flex items-end justify-end ">
            <Link
              className="bg-secondary/80  text-primary font-bold p-2 rounded-md hover:bg-primary/20 hover:text-secondary shadow-sm shadow-third transition duration-300"
              to={`/blogs/${
                blog[`slug_${lang}`] ?? blog[`slug_${defaultLang}`]
              }`}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
