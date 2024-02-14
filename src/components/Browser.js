import useNowPlaying from "../hooks/useNowPlaying";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browser = () => {
  useNowPlaying();
  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  );
};

export default Browser;
