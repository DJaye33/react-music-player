import uuid from "react-uuid";

const util = () => {
  return [
    {
      name: "Drift",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
      artist: "Somni",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30133",
      color: ["#143d4b", "#fa9570"],
      id: uuid(),
      active: true,
    },
    {
      name: "Santiago",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/1abf44fbb1364ca8435a8bbf4c5750a80947128f-1024x1024.jpg",
      artist: "Psalm Trees, Moods",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30202",
      color: ["#fcd6c6", "#748792"],
      id: uuid(),
      active: false,
    },
    {
      name: "Ending",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/0ac63dcdc4e16e6bb979f6ea2c9d0a394ee9e386-1024x1024.jpg",
      artist: "Sadtoi Relyae",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28969",
      color: ["#16335a", "#7f669a"],
      id: uuid(),
      active: false,
    },
    {
      name: "Leaf Contour",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/e21760a2e6450015317e20f65dbba27237099f34-1024x1024.jpg",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30130",
      color: ["#633235", "#2f7a74"],
      id: uuid(),
      active: false,
    },
    {
      name: "Turbulence",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      artist: "Parkbench Epiphany",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27503",
      color: ["#4e6877", "#f19798"],
      id: uuid(),
      active: false,
    },
    {
      name: "Driftwood",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
      artist: "Delayde",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23190",
      color: ["#efb6eb", "#9cd993"],
      id: uuid(),
      active: false,
    },
  ];
};

export default util;
