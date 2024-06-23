import { Settings } from "lucide-react";
import React from "react";
// import {}from
import { TbCoins, TbCategory } from "react-icons/tb";
import { MdSavings } from "react-icons/md";
const FinancialLayout = (props: { children: React.ReactNode }) => {
  const listSidebar = [
    {
      label: "Pengeluaran",
      icon: TbCoins,
    },
    {
      label: "Pemasukan",
      icon: TbCoins,
    },
    {
      label: "Kategori",
      icon: TbCategory,
    },
    {
      label: "Tabungan",
      icon: MdSavings,
    },
  ];
  // grid grid-cols-10
  return (
    <div className="px-20 gap-x-4">
      {/* <div className="border  space-y-3 col-span-2 rounded-md py-5 px-2">
        {listSidebar.map((val) => {
          return (
            <div
              className={`${
                val.label == "Pengeluaran" && "bg-base text-white"
              } rounded-md flex items-center space-x-2 px-4 py-[9px] text-sm hover:bg-opacity-80 cursor-pointer`}
            >
              <val.icon className="text-[18px] " /> <span>{val.label}</span>
            </div>
          );
        })}
      </div> */}
      {/* <Divider/> */}
      <div className="col-span-8">{props.children}</div>
    </div>
  );
};

export default FinancialLayout;
