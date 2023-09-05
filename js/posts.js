const prePosts = [
   { name: 'wings', type: 'posters' },
   { name: 'love-story', type: 'posters' },
   { name: 'music-sinns', type: 'logos' },
   { name: 'enlight-your-mind', type: 'posters' },
   { name: 'gargona', type: 'logos' },
   { name: 'star-boy', type: 'posters' },
   { name: 'war', type: 'logos' },
   { name: 'cain', type: 'posters' },
   { name: 'life-of-a-schizophrenic', type: 'logos' },
   { name: 'id-card-design', type: 'posters' },
   { name: 'banana-brain-killer', type: 'logos' },
   { name: 'why-do-i-fell-this', type: 'posters' },
   { name: 'pain-red', type: 'logos' },
   { name: 'pain', type: 'posters' },
   { name: 'muerte', type: 'logos' },
   { name: 'old-1950', type: 'logos' },
   { name: 'man-fly', type: 'posters' },
   { name: 'go-to-sleep', type: 'logos' },
   { name: 'hell-p', type: 'posters' },
   { name: 'fly-cipi-red', type: 'logos' },
   { name: 'euthanasia', type: 'posters' },
   { name: 'fly-cipi', type: 'logos' },
   { name: 'deep-sleep', type: 'posters' },
   { name: 'dope', type: 'logos' },
   { name: 'cardinal', type: 'logos' },
];
const posts = prePosts.map((post) => {
   const postName = post.name;
   return {
      src: `${postName}.webp`,
      name: postName.charAt(0).toUpperCase() + postName.slice(1),
      type: post.type,
   };
});
