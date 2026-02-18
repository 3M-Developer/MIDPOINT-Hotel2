import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
// import shape from "../assets/business.jpg";
// import placeholder from "../assets/logo2.webp";
import {
  FaRocket,
  FaUsers,
  FaChartLine,
  FaCogs,
  FaSearch,
  FaLightbulb,
  FaPenNib,
  FaBullseye,
} from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

import {
  MdOutlineElectricBolt,
  MdOutlinePalette,
  MdOutlineRocketLaunch,
  MdOutlineTune,
  MdPieChartOutline,
  MdPublic,
} from "react-icons/md";

const Steps = ({ serviceId, stepsData, title }) => {
  const { t, i18n } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);
  const isRTL = i18n && i18n.language === "ar";

  const backgrounds = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBnqEXA4hvyl7ilf8ozqmjz5c6KIrVvxicuVpSxC-LkmnYakpAAFYUP2PlV_sPQ6mWf_a_hTJwf30kDh4NVL-y4xjd_BlH8SKH88_ZsC8VrmGgOSeDrINUL2yPyu38UPO1zn8kko2L2V2Y5ov6Xtc5xPnnmIWmSU1pmx_6jIJpwzEVWPTv2TJNFUN-orgnv6SkmHMurpfLlde_DTw7HU6OivYC6WqUAUH3KwNH12gD57BCFqGHajKB2bDymo5QGAYGd-Wtif4e0XysY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDyAPFuXjq7JysAvRnZTBVaUdIJv_nk8BcT2abM26G-pT0iii1wRpco5nwHkqS1UWOxTsnqrNu97ey5i_h4CPh-ecHVfInT3i7_sr55LB2ToBK5NDgDLaSQm6P-m64VaP0DyHQWwq-1hZe_7Gg5iSB2vYMofs44zCmS8BArMtgk9mtSGr6TKTlPQCH1723F9iatb3uURH5M4wDrcQYxEriEAgBFSKvzwGBsvBqLSbvH8lOEsKMBU-A8RanRYhBPXe5FeSYxjWKWLEzl",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBX7QGzw-zBBEyO6P1_Ujcw7m8onNlVaGerQjt-R0WeHNv-e1YNvYXMEuMGY4z4ujVTs9DYMIQw8rYQmknyJ9g-oPKwRsOEaNVQ6XpWWwG9chKZkQE82NrYyqtKBw2I5Wqm-6OA4FbJxdtXspalnpkq4R6zRMurj4WZBV9Molz2VRrBSxscKbbLZWuYkfTDlfFZA6Chdff12Hskhjt7-TO89rvVP8f9WPrXkz3phHMrXcHSv6BHwWgZ7BJrfnQ4m4W6gcjH1gtDLcr4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCKvKozBE9e6vI2Nmm_4hqDAiDWYkrygDCv58idcTADXz8SaQuhe6eRf3Pb30ogQ9VTBEgFygrW4RBYcz2TuXiNK4ClX1xTwgjGorTiXqUid5E6wknWPhpePxNfR-FZuq2Btt0A96xno823F5LRoc2jd0-wbkQjrcc_WM20M7LLHbWD5oMPns48iQo_mPaTBJL9vPZ23PQYlDl7_83kDar7hNQNxhzyxU80FgTzZMcyr6QZNy6BOoksP5EgomVX16DA6a8ZePvejAEu",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBS61h_d9_kDGTG3tdL1lwueIZnmxEUIjKmuYglOiXGX2vHRJLpP7sIenE6sGI3ZuW75cciYexV_jH8vLwWdsqA7_IyUjbD9ZUaf5DmXz65iSgbbVS7a-X5IfhP6qdy8R3HdhWMGvvPJrAj0nk7dFvJgRu0xhtR9A5NgpGjyzUo6_iGkdij5MYHuMO2zuasXiTcOC7Piz4ZKcCT-5j9YgQOkF6M8znd62k5-8rtsXBPPLq9VyCWziegfLF9epcvdxFD0MNbVMFugnJo",
  ];

  const servicesFlows = [
    {
      serviceTitle: "Strategy & Consulting",
      steps: [
        {
          id: 1,
          title: t("servicesWork.Step") + "1",
          description: t("servicesWork.Discovery"),
          icon: <MdOutlineElectricBolt />,
          background: backgrounds[2],
        },
        {
          id: 2,
          title: t("servicesWork.Step") + "2",
          description: t("servicesWork.Audience"),
          icon: <MdPieChartOutline />,
          background: backgrounds[0],
        },
        {
          id: 3,
          title: t("servicesWork.Step") + "3",
          description: t("servicesWork.Offer"),
          icon: <IoShareSocialSharp />,
          background: backgrounds[4],
        },
        {
          id: 4,
          title: t("servicesWork.Step") + "4",
          description: t("servicesWork.Setup"),
          icon: <MdOutlineTune />,
          background: backgrounds[1],
        },
      ],
    },

    {
      serviceTitle: "Offline Marketing",
      steps: [
        {
          id: 1,
          title: t("servicesWork.Step") + "1",
          description: t("servicesWork.Discovery"),
          icon: <MdOutlineElectricBolt />,
          background: backgrounds[1],
        },
        {
          id: 2,
          title: t("servicesWork.Step") + "2",
          description: t("servicesWork.Content"),
          icon: <MdOutlinePalette />,
          background: backgrounds[3],
        },
        {
          id: 3,
          title: t("servicesWork.Step") + "3",
          description: t("servicesWork.Setup"),
          icon: <MdOutlineTune />,
          background: backgrounds[0],
        },
        {
          id: 4,
          title: t("servicesWork.Step") + "4",
          description: t("servicesWork.LaunchOptimize"),
          icon: <MdOutlineRocketLaunch />,
          background: backgrounds[4],
        },
      ],
    },

    {
      serviceTitle: "Influencer Marketing",
      steps: [
        {
          id: 1,
          title: t("servicesWork.Step") + "1",
          description: t("servicesWork.Audience"),
          icon: <MdPieChartOutline />,
          background: backgrounds[4],
        },
        {
          id: 2,
          title: t("servicesWork.Step") + "2",
          description: t("servicesWork.Offer"),
          icon: <IoShareSocialSharp />,
          background: backgrounds[2],
        },
        {
          id: 3,
          title: t("servicesWork.Step") + "3",
          description: t("servicesWork.Content"),
          icon: <MdOutlinePalette />,
          background: backgrounds[1],
        },
        {
          id: 4,
          title: t("servicesWork.Step") + "4",
          description: t("servicesWork.LaunchOptimize"),
          icon: <MdOutlineRocketLaunch />,
          background: backgrounds[0],
        },
        {
          id: 5,
          title: t("servicesWork.Step") + "5",
          description: t("servicesWork.Leads"),
          icon: <MdPublic />,
          background: backgrounds[3],
        },
      ],
    },

    {
      serviceTitle: "SEO Optimization",
      steps: [
        {
          id: 1,
          title: t("servicesWork.Step") + "1",
          description: t("servicesWork.Discovery"),
          icon: <MdOutlineElectricBolt />,
          background: backgrounds[3],
        },
        {
          id: 2,
          title: t("servicesWork.Step") + "2",
          description: t("servicesWork.Content"),
          icon: <MdOutlinePalette />,
          background: backgrounds[0],
        },
        {
          id: 3,
          title: t("servicesWork.Step") + "3",
          description: t("servicesWork.Setup"),
          icon: <MdOutlineTune />,
          background: backgrounds[1],
        },
        {
          id: 4,
          title: t("servicesWork.Step") + "4",
          description: t("servicesWork.Scale"),
          icon: <FaChartLine />,
          background: backgrounds[4],
        },
        {
          id: 5,
          title: t("servicesWork.Step") + "5",
          description: t("servicesWork.LaunchOptimize"),
          icon: <MdOutlineRocketLaunch />,
          background: backgrounds[2],
        },
      ],
    },

    {
      serviceTitle: "Web Design & Development",
      steps: [
        {
          id: 1,
          title: t("servicesWork.Step") + "1",
          description: t("servicesWork.Discovery"),
          icon: <MdOutlineElectricBolt />,
          background: backgrounds[1],
        },
        {
          id: 2,
          title: t("servicesWork.Step") + "2",
          description: t("servicesWork.Content"),
          icon: <MdOutlinePalette />,
          background: backgrounds[2],
        },
        {
          id: 3,
          title: t("servicesWork.Step") + "3",
          description: t("servicesWork.Setup"),
          icon: <MdOutlineTune />,
          background: backgrounds[0],
        },
        {
          id: 4,
          title: t("servicesWork.Step") + "4",
          description: t("servicesWork.LaunchOptimize"),
          icon: <MdOutlineRocketLaunch />,
          background: backgrounds[4],
        },
        {
          id: 5,
          title: t("servicesWork.Step") + "5",
          description: t("servicesWork.Scale"),
          icon: <FaChartLine />,
          background: backgrounds[3],
        },
      ],
    },

    {
      serviceTitle: "Graphic Design",
      steps: [
        {
          id: 1,
          title: t("servicesWork.Step") + "1",
          description: t("servicesWork.Discovery"),
          icon: <MdOutlineElectricBolt />,
          background: backgrounds[2],
        },
        {
          id: 2,
          title: t("servicesWork.Step") + "2",
          description: t("servicesWork.Content"),
          icon: <MdOutlinePalette />,
          background: backgrounds[3],
        },
        {
          id: 3,
          title: t("servicesWork.Step") + "3",
          description: t("servicesWork.Offer"),
          icon: <IoShareSocialSharp />,
          background: backgrounds[1],
        },
      ],
    },

    {
      serviceTitle: "Branding & Brand Identity",
      steps: [
        {
          id: 1,
          title: t("servicesWork.Step") + "1",
          description: t("servicesWork.Discovery"),
          icon: <MdOutlineElectricBolt />,
          background: backgrounds[0],
        },
        {
          id: 2,
          title: t("servicesWork.Step") + "2",
          description: t("servicesWork.Offer"),
          icon: <IoShareSocialSharp />,
          background: backgrounds[4],
        },
        {
          id: 3,
          title: t("servicesWork.Step") + "3",
          description: t("servicesWork.Content"),
          icon: <MdOutlinePalette />,
          background: backgrounds[1],
        },
        {
          id: 4,
          title: t("servicesWork.Step") + "4",
          description: t("servicesWork.Scale"),
          icon: <FaChartLine />,
          background: backgrounds[2],
        },
      ],
    },

    {
      serviceTitle: "Digital Marketing",
      steps: [
        {
          id: 1,
          title: t("servicesWork.Step") + "1",
          description: t("servicesWork.Audience"),
          icon: <MdPieChartOutline />,
          background: backgrounds[3],
        },
        {
          id: 2,
          title: t("servicesWork.Step") + "2",
          description: t("servicesWork.Setup"),
          icon: <MdOutlineTune />,
          background: backgrounds[0],
        },
        {
          id: 3,
          title: t("servicesWork.Step") + "3",
          description: t("servicesWork.Content"),
          icon: <MdOutlinePalette />,
          background: backgrounds[2],
        },
        {
          id: 4,
          title: t("servicesWork.Step") + "4",
          description: t("servicesWork.LaunchOptimize"),
          icon: <MdOutlineRocketLaunch />,
          background: backgrounds[4],
        },
        {
          id: 5,
          title: t("servicesWork.Step") + "5",
          description: t("servicesWork.Leads"),
          icon: <MdPublic />,
          background: backgrounds[1],
        },
      ],
    },

    {
      serviceTitle: "Content Marketing",
      steps: [
        {
          id: 1,
          title: t("servicesWork.Step") + "1",
          description: t("servicesWork.Content"),
          icon: <MdOutlinePalette />,
          background: backgrounds[1],
        },
        {
          id: 2,
          title: t("servicesWork.Step") + "2",
          description: t("servicesWork.Offer"),
          icon: <IoShareSocialSharp />,
          background: backgrounds[4],
        },
        {
          id: 3,
          title: t("servicesWork.Step") + "3",
          description: t("servicesWork.Leads"),
          icon: <MdPublic />,
          background: backgrounds[2],
        },
        {
          id: 4,
          title: t("servicesWork.Step") + "4",
          description: t("servicesWork.Scale"),
          icon: <FaChartLine />,
          background: backgrounds[0],
        },
      ],
    },
  ];
  const currentServiceTitle = title; 


  const stages = useMemo(() => {
    return (
      servicesFlows.find((item) => item.serviceTitle === currentServiceTitle)
        ?.steps || []
    );
  }, [servicesFlows, currentServiceTitle]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(parseInt(entry.target.dataset.step));
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -10% 0px" }
    );

    const timer = setTimeout(() => {
      stepRefs.current.forEach((ref) => ref && observer.observe(ref));
    }, 100);

    return () => {
      clearTimeout(timer);
      stepRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [stages]);

  const progressPercent =
    stages.length > 1 ? (activeStep / (stages.length - 1)) * 100 : 100;

  return (
    <div
      className="bg-third/50 shadow-md  min-h-screen  bg-center bg-repeat-space rounded-2xl"
      // style={{ backgroundImage: `url(${placeholder})` }}
    >
      <div className="relative min-h-screen bg-white/85   rounded-2xl overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto py-12 px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-bold text-5xl text-black mb-3">
              {t("servicesWork.How We")}
              <span className="font-bold text-secondary">
                {t("servicesWork.Work")}
              </span>
            </h2>
            <div className="mx-auto bg-white w-24 h-1"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div
              className={`hidden md:block absolute top-0 ${
                isRTL ? "right-1/2" : "left-1/2"
              } -translate-x-1/2 w-1 h-full bg-gray-300`}
            />
            <div
              className={`hidden md:block absolute top-0 ${
                isRTL ? "right-1/2" : "left-1/2"
              } -translate-x-1/2 w-1 bg-secondary transition-all duration-1000`}
              style={{ height: `${progressPercent}%` }}
            />

            {/* Stages */}
            {stages.map((stage, index) => {
              const isActive = activeStep === index;
              const isPassed = activeStep > index;

              return (
                <div
                  key={stage.id}
                  ref={(el) => (stepRefs.current[index] = el)}
                  data-step={index}
                  className="relative flex items-center mb-12"
                >
                  {/* Content */}
                  <div
                    className={`w-full flex items-center justify-between ${
                      index % 2 === 0 ? "pr-2" : "pl-2"
                    }`}
                  >
                    <div
                      className={`w-full max-w-xl rounded-4xl  relative z-10 bg-primary text-third   ${
                        index % 2 === 0 ? "order-0" : "order-1"
                      }`}
                    >
                      <div className="glass-panel p-8 md:p-12 rounded-4xl relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(21,18,64,0.1)]">
                        {/* Number watermark */}
                        <span className="absolute -end-4 -top-8 text-[12rem] font-bold text-third/40 select-none pointer-events-none font-display">
                          0{stage.id}
                        </span>
                        <div className="relative z-10">
                          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                            {stage.title}
                            <span className="h-px flex-1 bg-third/20 ml-4" />
                          </h3>
                          <p className="text-third font-semibold text-lg leading-relaxed mb-6">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full orb-gradient orb-active flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-105 animate-float">
                      {/* Inner abstract shape/image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                        data-alt="Abstract blue energy spark"
                        style={{
                          backgroundImage: `url(${stage.background})`,
                        }}
                      />
                      <div className="relative z-20 bg-primary/40  flex items-center justify-center  w-[80px] h-[80px] rounded-full ">
                        <span className="text-green text-5xl   ">
                          {stage.icon}
                        </span>
                      </div>
                      {/* Rotating Ring */}
                      <div className="absolute inset-4 border border-third/10 rounded-full border-dashed animate-float" />
                    </div>

                    {/* <div className="w-[200px] h-[200px] bg-red-900 rounded-full"></div> */}

                    {/* <div
                      className={`bg-white rounded-2xl p-6 shadow border border-gray-100 max-w-xl transition-all duration-500  ${
                        index % 2 === 0 ? "ml-auto" : "mr-auto"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shadow">
                          <span className="text-white font-bold text-lg">
                            {stage.id}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {stage.title}
                          </h3>
                          <div className="bg-secondary w-16 h-1 rounded"></div>
                        </div>
                      </div>

                      <p
                        className="mb-4 text-secondary"
                        dangerouslySetInnerHTML={{
                          __html: (stage.description || "").replace(
                            /\n/g,
                            "<br/>"
                          ),
                        }}
                      />

                      <div className="flex items-center pt-4 border-t border-gray-200">
                        <div className="flex gap-1 mr-2">
                          {[...Array(stages.length)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition ${
                                i <= index ? "bg-third" : "bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-secondary font-medium">
                          {isRTL ? "المرحلة" : "Stage"} {index + 1}{" "}
                          {isRTL ? "من" : "of"} {stages.length}
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
