import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Clothing from "../Components/Clothing/Clothing/Clothing";
import Accessories from "../Pages/Accessories/Accessories";
import Blog from "../Pages/Blog/Blog";
import Reviews from "../Pages/Reviews/Reviews";
import Header from "../Components/Header/Header";
import Sneakers from '../Components/Sneakers/Sneakers/Sneakers'
import SneakerPage from "../Pages/SneakerPage/SneakerPage";
import AccessoriePage from "../Pages/AccessoriePage/AccessoriePage";
import ProfileGlobal from "../Components/ProfileGlobal/ProfileGlobal";
import { fetchSneakers } from "../store/slices/sneakersData/API";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Delivery from "../Pages/Delivery/Delivery";
import Guarantees from "../Pages/Guarantees/Guarantees";
import SizeTable from "../Pages/SizeTable/SizeTable";
import Exchange from "../Pages/Exchange/Exchange";
import Questions from "../Pages/Questions/Questions";
import { fetchClouthing } from "../store/slices/clouthingData/API";
import ClouthingPage from "../Pages/ClouthingPage/ClouthingPage";

const AppRouter = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSneakers());
        dispatch(fetchClouthing())
    }, []);
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Header />} />
          <Route path="sneakers" element={<Sneakers />} />
          <Route path="sneakers/:id/*" element={<SneakerPage />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="clothing/:id/*" element={<ClouthingPage />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="accessories/:id/*" element={<AccessoriePage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="profile/*" element={<ProfileGlobal />} />

          <Route path="delevery" element={<Delivery />} />
          <Route path="guarant" element={<Guarantees />} />
          <Route path="sizeTable" element={<SizeTable />} />
          <Route path="exchange" element={<Exchange />} />
          <Route path="questions" element={<Questions />} />
        </Route>
      </Routes>
    );
}

export default AppRouter;
