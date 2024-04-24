import { Link } from "react-router-dom";

const ColaboraRegularText = ({ textAlign, wordone, wordtwo }) => {
  return (
    <h1 className={`my-4 ml-5 ${textAlign} text-2xl font-poppinsMedium w-full`}>
      <span className="text-LetterColor">{wordone}</span>{" "}
      <Link to="/form" className="underline text-primaryColor">
        <span>{wordtwo}</span>
      </Link>
    </h1>
  );
};

export default ColaboraRegularText;