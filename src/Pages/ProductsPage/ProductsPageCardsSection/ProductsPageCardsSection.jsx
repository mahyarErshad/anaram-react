import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ReactComponent as SettingsIcon } from "../../../assets/images/icons/settings-icon.svg";
import "./styles.css";
import ProductsPageCards from "./ProductsPageCards/ProductsPageCards";
import ReactPaginate from "react-paginate";
import { ReactComponent as PaginateButton } from "../../../assets/images/icons/carousel-button-arrow.svg";
import ProductPageFilterButton from "../../../Components/Utils/Buttons/ProductPageFilterButton/ProductPageFilterButton";

function ProductsPageCardsSection() {
  const [activePage, setActivePage] = useState(0);
  const array = Array.from({ length: 32 }, (_, i) => i + 1);
  const cardsPerPage = 12;
  const pageCount = Math.ceil(array.length / cardsPerPage);

  const handlePageChange = ({ selected }) => {
    setActivePage(selected);
  };

  return (
    <div className="w-full max-md:mt-6 md:mt-12">
      <Tabs>
        <TabList className="flex justify-start items-center gap-4 mb-4">
          <SettingsIcon className="max-lg:hidden" />
          <ProductPageFilterButton />
          <div className="flex-center gap-6">
            <span className="text-NeutralN500 text-sm font-semibold -ml-2">مرتب سازی:</span>
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">پرفروش‌ترین</Tab>
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">ارزان‌ترین</Tab>
            <Tab className="ProductsPageCardsSection__tabs duration-300 font-semibold text-sm text-NeutralN400 cursor-pointer">گران‌ترین</Tab>
          </div>
        </TabList>
        <TabPanel className="w-full flex-center flex-wrap gap-4 max-w-[82.75rem]">
          {array.slice(activePage * cardsPerPage, (activePage + 1) * cardsPerPage).map((_, index) => {
            return <ProductsPageCards key={index} />;
          })}
        </TabPanel>
        <TabPanel className="w-full flex-center flex-wrap gap-4 max-w-[82.75rem]">
          {array.slice(activePage * cardsPerPage, (activePage + 1) * cardsPerPage).map((_, index) => {
            return <ProductsPageCards discountCard key={index} />;
          })}
        </TabPanel>
        <TabPanel className="w-full flex-center flex-wrap gap-4 max-w-[82.75rem]">
          {array.slice(activePage * cardsPerPage, (activePage + 1) * cardsPerPage).map((_, index) => {
            return <ProductsPageCards outOfStock key={index} />;
          })}
        </TabPanel>
      </Tabs>
      <ReactPaginate nextLabel={<PaginateButton className="pagination_prevNext_button duration-300" />} previousLabel={<PaginateButton className="pagination_prevNext_button mirror duration-300" />} pageCount={pageCount} onPageChange={handlePageChange} containerClassName={"flex justify-center gap-2 max-md:mt-9 md:mt-16 lg:mt-20"} pageClassName={"pagination__bullets duration-300 bg-white flex-center h-8 w-8 rounded-[0.25rem] border border-NeutralN30 text-NeutralN500 cursor-pointer"} activeClassName={"border-primary6 text-primary6 cursor-not-allowed"} previousClassName={"bg-transparent flex-center duration-300"} nextClassName={"bg-transparent flex-center duration-300"} disabledClassName={"opacity-50"} />
    </div>
  );
}

export default ProductsPageCardsSection;
