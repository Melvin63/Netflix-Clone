export const LOGO =
  " https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_API_OPTIONS,
  },
};

export const MOVIE_lIST = "https://image.tmdb.org/t/p/w500";

export const Netflix_Movies_Logo =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const Supported_Languages = [
  { identifier: "en", name: "English" },
  { identifier: "tamil", name: "தமிழ்" },
  { identifier: "spanish", name: "español" },
];

export const Open_AI_Key = process.env.REACT_APP_OPENAI_KEY;
