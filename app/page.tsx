const eras = [
  {
    title: "Early/Archaic",
    description:
      "Lydian electrum issues marking the earliest known struck coinage in the ancient world.",
    image: "/images/early_icon.jpg",
    alt: "Ancient Early Coin",
  },
  {
    title: "Persian",
    description:
      "Achaemenid darics and sigloi to Sassanian drachms circulating across the ancient Near East.",
    image: "/images/persian_icon.jpg",
    alt: "Ancient Persian Coin",
  },
  {
    title: "Greek",
    description:
      "City-states, Hellenistic kingdoms, and the iconic silver tetradrachms that defined early coinage.",
    image: "/images/greek_icon.jpg",
    alt: "Ancient Greek Coin",
  },
  {
    title: "Roman",
    description:
      "From the Roman Republic to the Imperial era, explore emperors, denominations, and minting traditions.",
    image: "/images/roman_icon.jpg",
    alt: "Ancient Roman Coin",
  },
  {
    title: "Byzantine",
    description:
      "Gold solidi, miliaresia, and bronze folles from the continuation of the Roman Empire in the east.",
    image: "/images/byzantine_icon.jpg",
    alt: "Byzantine Coin",
  },
  {
    title: "Asian",
    description:
      "Chinese cash coins and Indian punch-marked issues forming early eastern coinage.",
    image: "/images/asian_icon.jpg",
    alt: "Ancient Asian Coin",
  },
];

const timeline = [
  {
    title: "~650 BC – Birth of Coinage",
    description:
      "The first coins were struck in Lydia using electrum from rivers such as the Pactolus. These early pieces introduced standardized metal currency.",
  },
  {
    title: "560 BC – Croesus Reform",
    description:
      "King Croesus introduced the first pure gold and silver coinage, establishing a bimetallic monetary system.",
  },
  {
    title: "500 BC – Greek Expansion",
    description:
      "Greek city-states such as Athens began striking large silver coinage used throughout Mediterranean trade.",
  },
  {
    title: "330 BC – Alexander's Empire",
    description:
      "Coinage of Alexander the Great spread across the eastern Mediterranean and became the dominant trade currency.",
  },
  {
    title: "211 BC – Roman Denarius",
    description:
      "Rome introduced the silver denarius, forming the backbone of the Roman monetary system.",
  },
];

export default function Home() {
  return (
    <>
      <nav className="topnav">
        <a href="/">Home</a>
        <a href="/guides">Guides</a>
        <a href="/buy">Where to Buy</a>
        <a href="/resources">Resources</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <header>
        <h1>Ancient Numismatics</h1>

        <p>
          Explore the world of ancient coinage - from the riverbeds of Lydia
          where electrum was first gathered for coinage, to Greek, Persian,
          Roman, Byzantine and many other civilizations. Learn about the
          history, metals, designs, and collecting traditions behind some of
          the most fascinating objects of antiquity.
        </p>
      </header>

      <main>
        <h2>Explore Coinage of the Ancient World</h2>

        <div className="card-container">
          {eras.map((era) => (
            <div className="card" key={era.title}>
              <h3>{era.title}</h3>
              <p>{era.description}</p>
              <img src={era.image} alt={era.alt} />
            </div>
          ))}
        </div>
      </main>

      <section className="timeline">
        <h2>History of Coinage</h2>

        <div className="timeline-container">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>© 2026 Ancient Numismatics. All rights reserved.</footer>
    </>
  );
}