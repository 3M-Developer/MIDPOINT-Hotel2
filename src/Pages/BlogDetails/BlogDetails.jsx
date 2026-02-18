import React, { useContext, useEffect, useState } from "react";
import { ApiAuthContext } from "../../Context/AuthContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import he from "he";
import { IoArrowBack } from "react-icons/io5";
import AppImage from "../../Components/AppImage";
import Loader from "../../Components/Loader";

const BlogDetails = () => {
  const [blog, setBlog] = useState();
  const { t, i18n } = useTranslation();

  const { baseUrl, XApiKey, XTenantID, defaultLang } =
    useContext(ApiAuthContext);
  const params = useParams();

  const lang = i18n.language;
  function DecodedText({ text }) {
    const safeText = typeof text === "string" ? text : "";
    const decodedHtml = he.decode(safeText);

    const truncatedHtml = decodedHtml;

    return <span dangerouslySetInnerHTML={{ __html: truncatedHtml }} />;
  }

  async function getBlogDetails() {
    const response = await axios.get(`${baseUrl}/blog/${params.slug}`, {
      headers: {
        "X-API-KEY": XApiKey,
        "X-Tenant-ID": XTenantID,
      },
    });
    return response.data.data;
  }

  let { data, isError, error, isLoading, isFetching } = useQuery({
    queryKey: ["BlogDetails"],
    queryFn: getBlogDetails,
  });

  useEffect(() => {
    if (data) {
      console.log(data);

      setBlog(data);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <>
        {blog ? (
          <Helmet>
            <title>
              {(blog[`meta_title_${lang}`] ??
                blog[`meta_title_${defaultLang}`] ??
                "") ||
                "Blog"}
            </title>
            {blog?.metaDesc ? (
              <meta
                name="description"
                content={
                  blog[`meta_description_${lang}`] ??
                  blog[`meta_description_${defaultLang}`] ??
                  ""
                }
              />
            ) : null}
            {blog?.metaKeywords ? (
              <meta
                name="keywords"
                content={
                  blog[`meta_keywords_${lang}`] ??
                  blog[`meta_keywords_${defaultLang}`] ??
                  ""
                }
              />
            ) : null}
            {blog?.metaImage ? (
              <meta property="og:image" content={blog[`meta_img`] ?? ""} />
            ) : null}
            <meta property="og:title" content={blog?.metaTitle || "Blog"} />
            {blog?.metaDesc ? (
              <meta
                property="og:description"
                content={
                  blog[`meta_title_${lang}`] ??
                  blog[`meta_title_${defaultLang}`] ??
                  ""
                }
              />
            ) : null}
          </Helmet>
        ) : null}

        <div className="max-w-5xl mx-auto px-5 md:px-6 py-25">
          {isLoading ? (
            <div className="space-y-4">
              <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
              <div className="w-full h-64 bg-gray-200 rounded-xl animate-pulse" />
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-700 border border-red-200 rounded-xl p-6 text-center">
              {error}
            </div>
          ) : !blog ? (
            <div className="bg-gray-50 text-gray-600 border border-gray-200 rounded-xl p-6 text-center">
              {lang === "ar" ? "المقال غير موجود" : "Blog not found"}
            </div>
          ) : (
            <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {blog[`banner_${lang}`] ?? blog[`banner_${defaultLang}`] ? (
                // <img
                //   src={blog[`banner_${lang}`] ?? blog[`banner_${defaultLang}`]}
                //   alt={blog[`title_${lang}`] ?? blog[`title_${defaultLang}`]}
                //   className="w-full h-72 object-cover"
                // />
                <AppImage
                  src={blog[`banner_${lang}`] ?? blog[`banner_${defaultLang}`]}
                  alt={blog[`title_${lang}`] ?? blog[`title_${defaultLang}`]}
                  className="w-full h-72 object-cover"
                />
              ) : null}
              <div className="p-5 md:p-8">
                {blog.category ? (
                  <div className="text-xs text-gray-500 mb-2">
                    {blog[`category_${lang}`] ??
                      blog[`category_${defaultLang}`]}
                  </div>
                ) : null}
                <h1 className="text-2xl md:text-3xl font-extrabold text-secondary mb-4">
                  {blog[`title_${lang}`] ?? blog[`title_${defaultLang}`]}
                </h1>
                <div className="prose max-w-none prose-p:leading-7 prose-img:rounded-xl">
                  <p className="text-gray-700 whitespace-pre-line">
                    <DecodedText
                      text={
                        blog[`description_${lang}`] ??
                        blog[`description_${defaultLang}`]
                      }
                    />
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    to="/blogs"
                    className="text-sm flex items-center gap-2 font-semibold text-secondary hover:underline"
                  >
                    {lang === "ar" ? "العودة للمدونة" : "Back to Blogs"}
                    <IoArrowBack />
                  </Link>
                </div>
              </div>
            </article>
          )}
        </div>
      </>
    </>
  );
};

export default BlogDetails;
