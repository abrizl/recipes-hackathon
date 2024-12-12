import Header from "../../components/Header/Header";
import RecipeArea from "../../components/RecipeArea/RecipeArea";
import Filters from "../../components/Filters/Filters";
import { useState } from 'react';

function HomePage() {
  const [selectedTag, setSelectedTag] = useState("");

  function handleTagClick(clickedTag) {
    setSelectedTag(clickedTag);
  }

  return (
    <>
      <Header />
      <Filters handleTagClick={handleTagClick} />
      <RecipeArea selectedTag={selectedTag} /> 
    </>
  );
}

export default HomePage;