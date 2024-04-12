function TitleHistory({ wordBlue, wordPink }) {
    return (
      <h1 className="text-3xl md:text-5xl text-LetterColor font-poppinsSemiBold mt-3 mb-5 text-start ">
        {wordBlue}
        <span className="text-primaryColor font-poppinsBold">
          {wordPink}
        </span>
      </h1>
    );
  }
  
export default TitleHistory