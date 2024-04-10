function RegularText30({ text, textAlign }) {
    return (
      <h1 className={`my-4 ${textAlign} mb-6 text-xl font-poppinsRegular w-[85%]`}>
          <span className="text-LetterColor">{text}</span>{" "}
      </h1>
    );
  }
  
  export default RegularText30;