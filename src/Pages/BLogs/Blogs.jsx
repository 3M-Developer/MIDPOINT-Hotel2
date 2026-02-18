import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ApiAuthContext } from "../../Context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import AppImage from "../../Components/AppImage";
import Loader from "../../Components/Loader";
import BlogCard from "../../Components/BlogCard";
import styled from "styled-components";
import { MdOutlineSearchOff } from "react-icons/md";

const BLogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(1);
  const [categoryId, setCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);
  const lang = i18n.language;

  const { baseUrl, XApiKey, XTenantID, defaultLang } =
    useContext(ApiAuthContext);

  async function getBlogs() {
    const response = await axios.get(`${baseUrl}/blogs?page=${page}`, {
      headers: {
        "X-API-KEY": XApiKey,
        "X-Tenant-ID": XTenantID,
      },
    });
    return response.data.data.blogs;
  }
  async function getBlogsByCategory() {
    const response = await axios.get(
      `${baseUrl}/category-blogs/${categoryId}?page=${page}`,
      {
        headers: {
          "X-API-KEY": XApiKey,
          "X-Tenant-ID": XTenantID,
        },
      }
    );

    return response.data.data;
  }

  let { data, isError, error, isLoading, isFetching } = useQuery({
    queryKey: ["Blogs", page, categoryId],
    queryFn: getBlogs,
    enabled: !categoryId,
  });
  async function getCategories() {
    const response = await axios.get(`${baseUrl}/categories`, {
      headers: {
        "X-API-KEY": XApiKey,
        "X-Tenant-ID": XTenantID,
      },
    });

    return response.data;
  }

  let {
    data: categoriesData,
    isError: CategoriesIsError,
    error: CategoriesError,
    isLoading: CategoriesIsLoading,
    isFetching: categoriesIsFetching,
  } = useQuery({
    queryKey: ["BlogsCategories"],
    queryFn: getCategories,
  });

  let {
    data: categoryData,
    isError: categoryIsError,
    error: categoryError,
    isLoading: categoryIsLoading,
  } = useQuery({
    queryKey: ["categoryDatabyID", categoryId],
    queryFn: getBlogsByCategory,
    enabled: !!categoryId,
  });

  useEffect(() => {
    if (data) {
      setBlogs(data.data);
      setAllPages(data.last_page);
    }
  }, [data]);

  useEffect(() => {
    if (categoryData) {
      setBlogs(categoryData.blogs.data);
      setAllPages(categoryData.blogs.last_page);
    }
  }, [categoryData]);

  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData.data.data);
    } else {
      console.log(categoriesData);
    }
  }, [categoriesData]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="py-5 lg:px-30 w-full">
        <div className="  w-full">
          <StyledWrapper>
            <div className="container  flex justify-center w-full">
              <div className="tabs flex-col rounded-xl   lg:flex-row w-4xl">
                <input
                  onChange={() => {
                    setCategoryId(null);
                  }}
                  type="radio"
                  id="radio-1"
                  name="tabs"
                  defaultChecked
                />
                <label
                  className="tab rounded-lg text-xl! w-2xl! py-5!"
                  htmlFor="radio-1"
                >
                  All
                </label>

                {categories?.map((category) => (
                  <>
                    <input
                      onChange={() => {
                        setCategoryId(category.id);
                      }}
                      type="radio"
                      id={`category_${category.id}`}
                      name="tabs"
                    />
                    <label
                      className="tab rounded-lg text-xl! w-2xl! py-5! transition-all! duration-300!"
                      htmlFor={`category_${category.id}`}
                    >
                      {category?.[`name_${lang}`] ??
                        category?.[`name_${defaultLang}`]}
                    </label>
                  </>
                ))}
              </div>
            </div>
          </StyledWrapper>
        </div>

        {blogs.length == 0 ? (
          <section className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8    flex items-center justify-center">
            <div className="w-full max-w-3xl mx-auto text-center relative">
              <div className="relative w-64 h-64 mx-auto mb-10">
                <div className="absolute inset-0 border border-dashed border-gray-300   rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-8 border border-gray-200   rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-green/40 rounded-full blur-xl animate-pulse-slow" />
                    <span className="material-symbols-outlined text-6xl text-navy-dark/80 relative z-10 animate-float">
                      <MdOutlineSearchOff />
                    </span>
                  </div>
                </div>
                <div
                  className="absolute top-0 right-10 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="w-3 h-3 bg-third rounded-full opacity-60" />
                </div>
                <div
                  className="absolute bottom-10 left-10 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="w-4 h-4 border border-navy-dark  rounded-sm opacity-40 rotate-12" />
                </div>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-navy-dark   mb-6">
                Silence on the{" "}
                <span className="italic text-gray-400">Airwaves</span>
              </h2>
              <p className="text-lg text-gray-500   max-w-lg mx-auto mb-12 leading-relaxed">
                We couldn't find any articles matching your criteria yet. The
                future is unwritten, but for now, let's get you back to the good
                stuff.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"></div>
            </div>
          </section>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-10 py-4">
            {blogs?.map((blog) => (
              <BlogCard blog={blog} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="pt-3 flex justify-center items-center gap-5">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page <= 1}
            className="border py-2 px-5 rounded-lg disabled:cursor-not-allowed! disabled:bg-gray-200"
          >
            Prev
          </button>
          page {page} of {allPages}
          <button
            onClick={() => setPage((prev) => Math.max(prev + 1, 1))}
            disabled={page >= allPages}
            className="border py-2 px-5 rounded-lg disabled:cursor-not-allowed! disabled:bg-gray-200"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const StyledWrapper = styled.div`
  .tabs {
    display: flex;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15),
      0 6px 12px 0 rgba(24, 94, 224, 0.15);
    padding: 0.75rem;
    // border-radius: 99px;
  }

  .tabs * {
    z-index: 2;
  }

  .container input[type="radio"] {
    display: none;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 110px;
    font-size: 0.8rem;
    color: black;
    font-weight: 500;
    // border-radius: 99px;
    cursor: pointer;
    transition: color 0.15s ease-in;
  }

  .container input[type="radio"]:checked + label {
    color: white;

    background-color: #18e200;
  }

  .container input[id="radio-1"]:checked ~ .glider {
    transform: translateX(0);
  }

  .container input[id="radio-2"]:checked ~ .glider {
    transform: translateX(100%);
  }

  .container input[id="radio-3"]:checked ~ .glider {
    transform: translateX(200%);
  }

  .glider {
    position: absolute;
    display: flex;
    height: 30px;
    width: 50px;
    background-color: #e6eef9;
    z-index: 1;
    border-radius: 99px;
    transition: 0.25s ease-out;
  }

  @media (max-width: 700px) {
    .tabs {
      transform: scale(0.6);
    }
  }
`;
export default BLogs;
