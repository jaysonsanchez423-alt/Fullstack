const videos = [];


const categories = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Sports",
  "Education",
  "Comedy",
  "Film & Animation",
  "Howto & Style",
  "Science & Technology",
  "Travel"
];

const comments = [
  { id: 1, videoId: 1, author: "Alex", text: "This documentary is amazing!", timestamp: "3 hours ago" },
  { id: 2, videoId: 2, author: "Jordan", text: "I tried this recipe and it turned out great.", timestamp: "1 day ago" },
  { id: 3, videoId: 4, author: "Taylor", text: "I laughed so hard at the cat jokes.", timestamp: "2 hours ago" }
];

module.exports = {
  videos,
  categories,
  comments
};
