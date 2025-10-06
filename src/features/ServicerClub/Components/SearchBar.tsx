"use client";
import Loading from "@/app/loading";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductList } from "../hooks/useGetProductList";
import { setData } from "../redux/rewardsSlice";

import Empty from "@/components/Empty";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  InputBase,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { TProduct } from "../type";

function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const Products = useSelector((state: RootState) => state.rewards.Products);
  const Categories = useSelector(
    (state: RootState) => state.rewards.Categories
  );
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [openDropdown, setOpenDropdown] = useState(false);

  const { data: productData, isLoading } = useGetProductList({ enabled: true });

  // ذخیره داده‌ها در ریداکس
  useEffect(() => {
    if (productData) dispatch(setData(productData.Data));
  }, [productData, dispatch]);

  // فیلتر کردن محصولات بر اساس سرچ
  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = Products.filter((product: TProduct) =>
        product.Title.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredProducts(filtered);
    }
  }, [searchText, Products]);

  const search = (text: string) => {
    if (text.trim() !== "") {
      setOpenDropdown(true);
      setSearchText(text);
    } else {
      setOpenDropdown(false);
      setSearchText("");
    }
  };
  const removeSearch = () => {
    setOpenDropdown(false);
    setSearchText("");
  };
  function renderDropdown() {
    if (!openDropdown) return null;

    const grouped = Categories.map((category) => {
      const items = filteredProducts.filter(
        (product: TProduct) => product.Category === category.Id
      );
      return { category: category.Title, items };
    }).filter((group) => group.items.length > 0); // فقط دسته‌هایی که محصول دارند

    return (
      <div className="!bg-gray-50 max-h-72 rounded-md overflow-auto mx-2 p-2 border border-gray-200 z-10 absolute top-[95%] left-0 right-0">
        {grouped.length > 0 ? (
          grouped.map((group, index) => (
            <Accordion
              key={group.category}
              defaultExpanded
              className="!rounded-md mb-1 !shadow-none !bg-inherit"
            >
              <AccordionSummary
                expandIcon={<IoIosArrowDown className=" text-gray-400" />}
                aria-controls={`panel-${index}-content`}
                id={`group-${index}-header`}
              >
                <span className="text-xs text-gray-400"> {group.category}</span>
              </AccordionSummary>
              <AccordionDetails>
                {group.items.map((product: TProduct) => (
                  <div
                    key={product.Id}
                    onClick={() => {
                      setSearchText(product.Title);
                      setOpenDropdown(false);
                      router.replace(
                        `/store/${product.Category}/${product.Id}`
                      );
                    }}
                    className="flex items-center gap-2 p-2 rounded-md border border-gray-100 mb-1 bg-white"
                  >
                    <Avatar
                      src={
                        product.MainImage || product.Attaches[1] || undefined
                      }
                      sx={{ width: 25, height: 25 }}
                      className="shadow-md p-0.5"
                    />
                    <span className="!text-xs">{product.Title}</span>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <Empty size={50} message="نتیجه ای یافت نشد" />
        )}
      </div>
    );
  }
  if (isLoading) return <Loading />;

  return (
    <div className="w-full relative p-2">
      <div className="rounded-md flex items-center w-full border border-gray-100 bg-gray-100 p-2 text-xs">
        <InputBase
          id="search"
          className="!text-xs  flex-1"
          placeholder="جستجوی محصول..."
          value={searchText}
          sx={{
            "& input": {
              fontSize: "0.75rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          }}
          onChange={(e) => search(e.target.value)}
        />
        {!openDropdown && searchText === "" ? (
          <FiSearch size={15} className="text-gray-400" />
        ) : (
          <CgClose onClick={removeSearch} size={15} className="text-gray-400" />
        )}
      </div>
      {renderDropdown()}
    </div>
  );
}

export default SearchBar;
