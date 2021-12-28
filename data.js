const totalFollowers = 594.2
const totalMostPopularPosts = 434
const convertToPercent = (val, total) => {
  return ((val / total) * 100).toFixed(1)
}
export const data = {
  tagsByNumOfFollowers: [
    {
      id: 'General Programing',
      label: 'GP',
      value: convertToPercent(228.8, totalFollowers),
    },
    {
      id: 'JavaScript',
      label: 'JavaScript',
      value: convertToPercent(100.6, totalFollowers),
    },
    {
      id: 'Nodejs',
      label: 'Nodejs',
      value: convertToPercent(74.3, totalFollowers),
    },
    {
      id: 'React',
      label: 'React',
      value: convertToPercent(74.4, totalFollowers),
    },
    {
      id: 'Python',
      label: 'Python',
      value: convertToPercent(59.5, totalFollowers),
    },
    {
      id: 'CSS',
      label: 'CSS',
      value: convertToPercent(56.6, totalFollowers),
    },
  ],
  mostPopularPostsThisWeek: [
    {
      id: 'JavaScript',
      label: 'JavaScript',
      value: convertToPercent(134, totalMostPopularPosts),
    },
    {
      id: 'Web Dev',
      label: 'Web Dev',
      value: convertToPercent(97, totalMostPopularPosts),
    },
    {
      id: 'React',
      label: 'React',
      value: convertToPercent(60, totalMostPopularPosts),
    },
    {
      id: 'Dev Blogs',
      label: 'Dev Blogs',
      value: convertToPercent(46, totalMostPopularPosts),
    },
    {
      id: 'Python',
      label: 'Python',
      value: convertToPercent(60, totalMostPopularPosts),
    },
    {
      id: 'CSS',
      label: 'CSS',
      value: convertToPercent(37, totalMostPopularPosts),
    },
  ],
}
