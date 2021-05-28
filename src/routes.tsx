import { BrowserRouter, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Search from "./pages/Search";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/search" component={Search} />
    </BrowserRouter>
  );
}