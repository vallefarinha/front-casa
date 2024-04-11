function Title({ wordBlue, wordPink }) {
  return (
    <h1 className="mx-4 my-4 text-left text-6xl font-poppinsMedium w-full">
      <span className="text-LetterColor">{wordBlue}</span>{" "}
      <span className="text-primaryColor font-poppinsExtraBold">
        {wordPink}
      </span>
    </h1>
  );
}

export default Title;
