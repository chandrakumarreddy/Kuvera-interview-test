import Home from "./pages/HomePage";
import Explore from "./pages/ExplorePage";
import ExploreFund from "./pages/ExploreFund";

export default [
  { component: Home, path: "/", exact: true, _key: 1 },
  { component: Explore, path: "/explore", exact: true, _key: 2 },
  { component: ExploreFund, path: "/explore/:fund_code", exact: true, _key: 3 }
];
