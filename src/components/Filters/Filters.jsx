import "./Filters.scss";
import { useEffect, useState } from 'react';
import { getTags } from "/src/scripts/api.js";

function Filters(props) {
  const [tags, setTags] = useState(null);
  const [clickedTag, setClickedTag] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const fetchTagData = await getTags();
        setTags(fetchTagData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTags();
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  function handleTagClick(tag) {
    if (clickedTag === tag) {
      setClickedTag(null);
    } else {
      setClickedTag(tag);
    }
    props.handleTagClick(tag);
  }

  let tags2 = tags.categories.map(category => category.strCategory);

  return (
    <section className="filters2">
      <h2 className="filters2__title">choose a category</h2>
      <ul className="filters2__list">
        {tags2.map((tag, index) => {
          const isTagClicked = clickedTag === tag;
          return (
            <li
              key={index}
              className={`filters2__item ${isTagClicked ? 'clicked' : ''}`}
              onClick={() => handleTagClick(tag)}>
              {tag}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Filters;