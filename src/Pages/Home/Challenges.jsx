import React from "react";
import { useTranslation } from "react-i18next";
import {
  MdPersonSearch,
  MdTrendingDown,
  MdMail,
  MdSmartphone,
  MdLanguage,
  MdAnalytics,
  MdCleaningServices,
  MdStarRate,
  MdPeople,
  MdHotel,
} from "react-icons/md";
import bg from "../../assets/challengesbg.webp";
import sectionimg from "../../assets/challenges.webp";
const Challenges = () => {
  const { t, i18n } = useTranslation();

  const challenges = [
    {
      id: 1,
      icon: <MdHotel />,
      titleKey: "challenges.1.title",
      descriptionKey: "challenges.1.description",
    },
    {
      id: 2,
      icon: <MdPeople />,
      titleKey: "challenges.2.title",
      descriptionKey: "challenges.2.description",
    },
    {
      id: 3,
      icon: <MdStarRate />,
      titleKey: "challenges.3.title",
      descriptionKey: "challenges.3.description",
    },
    {
      id: 4,
      icon: <MdCleaningServices />,
      titleKey: "challenges.4.title",
      descriptionKey: "challenges.4.description",
    },
    {
      id: 5,
      icon: <MdLanguage />,
      titleKey: "challenges.5.title",
      descriptionKey: "challenges.5.description",
    },
    {
      id: 6,
      icon: <MdAnalytics />,
      titleKey: "challenges.6.title",
      descriptionKey: "challenges.6.description",
    },
  ];

  return (
    <>
      <section
        style={{ backgroundImage: `url(${bg})` }}
        className="py-5 px-4 sm:px-6 lg:px-8 relative z-10  bg-cover     bg-third/5  m "
      >
        <div className="text-center mb-5 relative z-5   bg-linear-to-r   via-primary/80 rounded-lg">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary   mb-2 inline-block relative">
            {t("challengesSection.title")}{" "}
            <span className="text-secondary">
              {t("challengesSection.highlight")}
            </span>
          </h2>
        </div>
        <span className="absolute  inset-0 transform    w-full    backdrop-blur-md     " />
        <div className="relative flex gap-4 items-start justify-between  flex-col lg:flex-row">
          <div className="lg:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-card-light -dark rounded-2xl p-5   border border-gray-200  bg-gradient-to-br   via-primary/80 hover:from-gray-500/20 hover:to-gray-500/20  bg-[length:300%_300%]  bg-[position:0%_50%] hover:animate-gradient-x shadow-secondary  hover:-translate-y-1 transition-transform duration-300 relative group   "
              >
                <div className="absolute top-4 right-4 w-2 h-2 bg-secondary rounded-full opacity-60" />
                <div className="flex justify-center mb-6 relative">
                  <div className="w-16 h-16 bg-secondary-light bg-third/20 animate-float mt-5  rounded-full flex items-center justify-center icon-glow relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl text-secondary ">
                      {challenge.icon}
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-xl mt-10 bg-primary/50  ">
                  <h3 className="text-lg font-bold text-center text-secondary   mb-4 leading-tight">
                    {t(challenge.titleKey)}
                  </h3>
                  <p className="text-sm text-center text-secondary   leading-relaxed">
                    {t(challenge.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-4/12 top-22   justify-end sticky hidden lg:flex lg:mx-5 ">
            <img
              src={sectionimg}
              className="object-cover w-19/20  rounded-2xl"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Challenges;
