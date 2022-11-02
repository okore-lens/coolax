import CoverageCard from "../cards/CoverageCard";

const Coverage = () => {
  const channels = [
    { id: 1, name: "Channel 1" },
    { id: 2, name: "Channel 2" },
    { id: 3, name: "Channel 3" },
    { id: 4, name: "Channel 4" },
    { id: 5, name: "Channel 5" },
    { id: 6, name: "Channel 6" },
    { id: 7, name: "Channel 7" },
    { id: 8, name: "Channel 8" },
    { id: 9, name: "Channel 9" },
    { id: 10, name: "Channel 10" },
    { id: 11, name: "Channel 11" },
    { id: 12, name: "Channel 12" },
    { id: 13, name: "Channel 13" },
    { id: 14, name: "Channel 14" },
    { id: 15, name: "Channel 15" },
  ];
  const coverageList = [
    {
      id: 1,
      title: "Sports",
      text: "Sports Channels list",
      channelList: channels,
    },
    {
      id: 2,
      title: "Kenyan",
      text: "Kenyan Channels list",
      channelList: channels,
    },
    {
      id: 3,
      title: "Music",
      text: "Music Channels list",
      channelList: channels,
    },
    {
      id: 4,
      title: "Documentary",
      text: "Documentary Channels list",
      channelList: channels,
    },
    {
      id: 5,
      title: "PPV Events",
      text: "PPV Events Channels list",
      channelList: channels,
    },
    {
      id: 6,
      title: "African",
      text: "African Channels list",
      channelList: channels,
    },
    { id: 7, title: "Kids", text: "Kids Channels list", channelList: channels },
    {
      id: 8,
      title: "Religious",
      text: "Religious Channels list",
      channelList: channels,
    },
    {
      id: 9,
      title: "Indian",
      text: "Indian Channels list",
      channelList: channels,
    },
    {
      id: 10,
      title: "Entertainment",
      text: "Entertainment Channels list",
      channelList: channels,
    },
    {
      id: 11,
      title: "International News",
      text: "International News Channels list",
      channelList: channels,
    },
  ];

  return (
    <div className="coverage">
      <h1>Our Coverage</h1>
      <p>
        All Your Favourite Shows, Movies, Series and Live TV at the Comfort of
        <br />
        Your House and Ready on the Go.
        <br /> Join Our Community Today
      </p>
      <div className="cards">
        {coverageList.map((coverage) => (
          <CoverageCard
            key={coverage.id}
            id={coverage.id}
            coverage={coverage.title}
            message={coverage.text}
            channelList={coverage.channelList}
          />
        ))}
      </div>
    </div>
  );
};

export default Coverage;
