import "./index.css";
import { Route, Switch } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import EditContainer from "./components/edit/EditContainer";
import StyleGuide from "./components/common/StyleGuide";
import Bookmark from "./components/myPage/Bookmark";
import MypagePage from "./pages/MypagePage";
import HomePage from "./pages/HomePage";
import News from "./pages/NewsPage";
import LoginServicePage from "./pages/LoginServicePage";
import { Layout } from "./components/common/layout/Layout";
const RootRouters = () => {
  return (
    <Layout>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Switch>
          <Route path="/edit" component={EditContainer} />
          <Route exact path="/mypage/bookmark" component={Bookmark} />
          <Route exact path="/mypage" component={MypagePage} />
          <Route exact path="/news/:query" component={News} />
          <Route exact path="/news" component={News} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/style" component={StyleGuide} />
          <Route exact path="/login" component={LoginServicePage} />
        </Switch>
      </QueryParamProvider>
    </Layout>
  );
};
export default RootRouters;
