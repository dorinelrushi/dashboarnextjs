import Link from "next/link";
const data = [
  {
    id: 0,
    nr: "#123456",
    name: "Namic Pro 2",
    date: "Sep 16,2022",
    price: "$52.55",
    link: (
      <Link href="/" className="text-[#4eb457] font-[400] tracking-[1px]">
        Delivered
      </Link>
    ),
  },
  {
    id: 1,
    nr: "#123456",
    name: "Namic Pro 2",
    date: "Sep 16,2022",
    price: "$52.55",
    link: (
      <Link href="/" className="text-[red]  font-[400] tracking-[1px]">
        Canceled
      </Link>
    ),
  },
];

export default data;
