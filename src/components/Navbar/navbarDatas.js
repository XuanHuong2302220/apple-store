import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { LuBox } from "react-icons/lu";
import { MdBookmarkBorder } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";

const store = [
  {
    title: "Mua Hàng",
    product: [
      "Mua Sản Phẩm Mới Nhất",
      "Mac",
      "iPad",
      "iPhone",
      "Apple Watch",
      "Phụ Kiện",
    ],
  },
  {
    title: "Liên Kết Nhanh",
    links: [
      "Quà Tặng Tết Nguyên Đán",
      "Tình Trạng Đơn Hàng",
      "Apple Trade In",
      "Tài Chính",
    ],
  },
  {
    title: "Mua tại  cửa hàng",
    links: ["Giáo dục", "Doanh Nghiệp"],
  },
];
const mac = [
  {
    title: "Khám Phá Mac",
    product: [
      "Khám Phá Tất Cả Mac",
      "MacBook Air",
      "MacBook Pro",
      "iMac",
      "Mac mini",
      "Mac Studio",
      "Mac Pro",
      "Màn Hình",
    ],
    uses: ["So Sánh Mac", "Mac Làm Được Đó"],
  },
  {
    title: "Mua Mac",
    links: ["Mua Mac", "Phụ Kiện Mac", "Apple Trade In", "Tài Chính"],
  },
  {
    title: "Tìm Hiểu Thêm Về Mac",
    links: [
      "Hỗ trợ Mac",
      "AppleCare+ cho Mac",
      "macOS Sonoma",
      "Các Ứng Dụng Của Apple",
      "Tính Liên Tục",
      "iCloud+",
      "Mac Cho Doanh Nghiệp",
      "Giáo Dục",
    ],
  },
];
const iPad = [
  {
    title: "Khám Phá iPad",
    product: [
      "Khám Phá Tất Cả iPad",
      "iPad Air",
      "iPad Pro",
      "iPad",
      "iPad mini",
      "Apple Pencil",
      "Bàn Phím",
    ],
    uses: ["So Sánh iPad", "Tại Sao Nên Dùng iPad"],
  },
  {
    title: "Mua iPad",
    links: ["Mua iPad", "Phụ Kiện iPad", "Apple Trade In", "Tài Chính"],
  },
  {
    title: "Tìm Hiểu Thêm Về iPad",
    links: [
      "Hỗ trợ iPad",
      "AppleCare+ cho iPad",
      "iPadOS 17",
      "Các Ứng Dụng Của Apple",
      "iCloud+",
      "Giáo Dục",
    ],
  },
];
const iPhone = [
  {
    title: "Khám Phá iPhone",
    product: [
      "Khám Phá Tất Cả iPhone",
      "iPhone 15 Pro",
      "iPhone 15",
      "iPhone 14",
      "iPhone 13",
      "iPhone SE",
    ],
    uses: ["So Sánh iPhone", "Chuyển Từ Android"],
  },
  {
    title: "Mua iPhone",
    links: ["Mua iPhone", "Phụ Kiện iPhone", "Apple Trade In", "Tài Chính"],
  },
  {
    title: "Tìm Hiểu Thêm Về iPhone",
    links: [
      "Hỗ trợ iPhone",
      "AppleCare+ cho iPhone",
      "IOS 17",
      "Các Ứng Dụng Của Apple",
      "Quyền Riêng Tư Trên iPhone",
      "iCloud+",
      "Ví, Pay",
    ],
  },
];
const watch = [
  {
    title: "Khám Phá Watch",
    product: [
      "Khám Phá Tất Cả Apple Watch",
      "Apple Watch Series 9",
      "Apple Watch Ultra 2",
      "Apple Watch SE",
      "Apple Watch Nike",
    ],
    uses: ["So Sánh Watch", "Tại Sao nên dùng Apple Watch"],
  },
  {
    title: "Mua Watch",
    links: [
      "Mua Apple Watch",
      "Mua Watch Studio",
      "Dây Đeo Apple Watch",
      "Phụ Kiện Apple Watch",
      "Apple Trade In",
      "Tài Chính",
    ],
  },
  {
    title: "Tìm Hiểu Thêm Về Watch",
    links: [
      "Hỗ trợ Watch",
      "AppleCare+",
      "watchOS 10",
      "Các Ứng Dụng Của Apple",
    ],
  },
];
const airPods = [
  {
    title: "Khám Phá AirPods",
    product: [
      "Khám Phá Tất Cả AirPods",
      "AirPods Pro (Thế Hệ Thứ 2)",
      "AirPods (Thế Hệ Thứ 2)",
      "AirPods (Thế Hệ Thứ 3)",
      "AirPods Max",
    ],
    uses: ["So SánhAirPods"],
  },
  {
    title: "Mua AirPods",
    links: ["Mua AirPods", "Phụ Kiện AirPods"],
  },
  {
    title: "Tìm Hiểu Thêm Về AirPods",
    links: ["Hỗ trợAirPods", "AppleCare+ Cho Tai Nghe", "Apple Music"],
  },
];
const tvAndhome = [
  {
    title: "Khám Phá TV & Nhà",
    product: ["Khám Phá TV & Nhà", "Apple TV 4K"],
  },
  {
    title: "Mua TV & Nhà",
    links: ["Mua Apple TV 4K", "Mua Phụ Kiện TV & Nhà"],
  },
  {
    title: "Tìm Hiểu Thêm Về TV & Nhà",
    links: [
      "Hỗ trợ Apple TV",
      "AppleCare+",
      "Ứng Dụng Apple TV",
      "Apple TV+",
      "Apple Music",
      "AirPlay",
    ],
  },
];
const relax = [
  {
    title: "Khám Phá Giải Trí",
    product: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Podcasts",
      "Apple Books",
      "Apple Store",
    ],
  },
  {
    title: "Hỗ Trợ",
    links: ["Hỗ Trợ Apple Tv+", "Hỗ Trợ Apple Music"],
  },
];
const accessory = [
  {
    title: "Mua Phụ Kiện",
    product: ["Mac", "iPad", "iPhone", "Apple Watch", "AirPods", "TV & Nhà"],
  },
  {
    title: "Khám Phá Phụ Kiện",
    links: [
      "Quà Tặng Tết Nguyên Đán",
      "Sản Xuất Bởi Apple",
      "Beats by Dr. Dre",
      "AirTag",
    ],
  },
];
const support = [
  {
    title: "Khám Phá Hỗ Trợ",
    product: ["Mac", "iPad", "iPhone", "Watch", "AirPods", "Music", "Tv"],
    uses: ["Khám Phá Hỗ Trợ"],
  },
  {
    title: "Trợ Giúp",
    links: ["Cộng Đồng", "Kiểm Tra Bảo Hành", "Sửa Chữa ", "Liên Hệ Chúng Tôi"],
  },
  {
    title: "Chủ Đề Hữu Ích",
    links: [
      "Mua AppleCare+",
      "ID Apple & Mật Khẩu",
      "Thanh Toán & Gói Đăng Ký",
      "Tìm",
      "Trợ Năng",
    ],
  },
];
export const navDatas = {
  0: store,
  1: mac,
  2: iPad,
  3: iPhone,
  4: watch,
  5: airPods,
  6: tvAndhome,
  7: relax,
  8: accessory,
  9: support,
};

export const navs = [
  "Cửa hàng",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Nhà",
  "Giải Trí",
  "Phụ Kiện",
  "Hỗ trợ",
];

export const search_cart = [<IoIosSearch />, <BsBag />];

export const linkSearch = [
  "Quà tặng Tết Nguyên Đán",
  "Mua sắm AppStore trực tuyến",
  "Phụ Kiện",
  "AirPods",
  "Apple Trade In",
];

export const linkCarts = [
  {
    icon : <LuBox />,
    name: 'Đơn Hàng'
  },
  {
    icon : <MdBookmarkBorder />,
    name: 'Mục Đã Lưu'
  },
  {
    icon : <TbSteeringWheel />,
    name: 'Tài Khoản'
  },
  {
    icon : <RxAvatar />,
    name: 'Đăng Nhập'
  },
]