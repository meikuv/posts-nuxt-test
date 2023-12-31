export const PostService = {
  getPostsData() {
    return [
      {
        id: 1,
        slug: "1",
        title: "Mount Everest",
        description:
          "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point",
        height: "8,848 m",
        countries: ["China", "Nepal"],
        continent: "Asia",
        image:
          "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stephan-seeber-1054218.jpg&fm=jpg",
        dir: "/posts",
        path: "/posts/1",
        updatedAt: "2020-12-11T15:40:35.000Z",
        likeCount: 0,
        likeChecked: false,
      },
      {
        id: 2,
        slug: "2",
        title: "Mont Blanc",
        description:
          "Mont Blanc is the highest mountain in the Alps and the highest in Europe west of the Caucasus peaks of Russia and Georgia. It rises 4,808 m above sea level and is ranked 11th in the world in topographic prominence.",
        height: "4,810 m",
        countries: ["France", "Italy"],
        continent: "Europe",
        image:
          "https://wallpapers.com/images/hd/4k-mountain-0hb4gnwalnj51zsh.jpg",
        dir: "/posts",
        path: "/posts/2",
        updatedAt: "2020-12-11T15:40:35.000Z",
        likeCount: 0,
        likeChecked: false,
      },
      {
        id: 3,
        slug: "3",
        title: "Mount Kilimanjaro",
        description:
          "Mount Kilimanjaro is a dormant volcano in Tanzania. It has three volcanic cones: Kibo, Mawenzi and Shira. It is the highest mountain in Africa and the highest single free-standing mountain in the world: 5,895 metres above sea level and about 4,900 metres above its plateau base.",
        height: "5,895 m",
        countries: ["Tanzania"],
        continent: "Africa",
        image:
          "https://wallpapers.com/images/hd/4k-mountain-1obt47t74ynfn450.jpg",
        dir: "/posts",
        path: "/posts/3",
        updatedAt: "2020-12-11T15:40:35.000Z",
        likeCount: 0,
        likeChecked: false,
      },
      {
        id: 4,
        slug: "4",
        title: "Denali",
        description:
          "Denali is the highest mountain peak in North America, with a summit elevation of 20,310 feet above sea level. With a topographic prominence of 20,156 feet and a topographic isolation of 4,629 miles, Denali is the third most prominent and third most isolated peak on Earth, after Mount Everest and Aconcagua.",
        height: "6,190 m",
        countries: ["Alaska"],
        continent: "North America",
        image:
          "https://www.pixelstalk.net/wp-content/uploads/images4/Original-Mountain-4K-Wallpaper-scaled.jpg",
        dir: "/posts",
        path: "/posts/4",
        updatedAt: "2020-12-11T15:40:35.000Z",
        likeCount: 0,
        likeChecked: false,
      },
      {
        id: 5,
        slug: "5",
        title: "Mount Kosciuszko",
        description:
          "Mount Kosciuszko is mainland Australia's highest mountain, at 2,228 metres above sea level. It is located on the Main Range of the Snowy Mountains in Kosciuszko National Park, part of the Australian Alps National Parks and Reserves in New South Wales.",
        height: "2,228 m",
        countries: ["Australia"],
        continent: "Australia",
        image:
          "https://wallpapershome.com/images/wallpapers/switzerland-3840x2160-4k-5k-wallpaper-alps-mountains-stars-night-5713.jpg",
        dir: "/posts",
        path: "/posts/6",
        updatedAt: "2020-12-11T15:40:35.000Z",
        likeCount: 0,
        likeChecked: false,
      },
      {
        id: 6,
        slug: "6",
        title: "Aconcagua",
        description:
          "Aconcagua is a mountain in the Principal Cordillera of the Andes mountain range, in Mendoza Province, Argentina. It is the highest mountain in the Americas and the highest outside of Asia, being the highest in both the Southern and Western Hemispheres with a summit elevation of 6,960.8 metres.",
        height: "6,962 m",
        countries: ["Argentina"],
        continent: "South America",
        image:
          "https://coolwallpapers.me/picsup/2638529-sulphur-mountain-4k-full-screen-wallpaper-hd.jpg",
        dir: "/posts",
        path: "/posts/5",
        updatedAt: "2020-12-11T15:40:35.000Z",
        likeCount: 0,
        likeChecked: false,
      },
      {
        id: 7,
        slug: "7",
        title: "Vinson Massif",
        description:
          "Vinson Massif is a large mountain massif in Antarctica that is 21 km long and 13 km wide and lies within the Sentinel Range of the Ellsworth Mountains. It overlooks the Ronne Ice Shelf near the base of the Antarctic Peninsula. The massif is located about 1,200 kilometres from the South Pole.",
        height: "4,892 m",
        countries: ["Antarctic"],
        continent: "Antarctic",
        image:
          "https://wallpapercrafter.com/desktop1/524880-wonderful-summer-landscape-fauske-norway-desktop.jpg",
        dir: "/posts",
        path: "/posts/7",
        updatedAt: "2020-12-11T15:40:35.000Z",
        likeCount: 0,
        likeChecked: false,
      },
    ];
  },

  getPosts() {
    return Promise.resolve(this.getPostsData());
  },

  getById(id: number) {
    let response = null;
    for (let item of this.getPostsData()) {
      if (item.id === id) {
        response = item;
        console.log(item);
      }
    }
    console.log(response);
    return Promise.resolve(response);
  },
};
