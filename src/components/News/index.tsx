import List from "./list";
import ListFiterOption from "./listFilterOption";
import SearchNavigation from "./searchNavigation";

const News = () => {
  return (
    <>
      <SearchNavigation />
      <ListFiterOption />
      <List />
    </>
  );
};

export default News;
