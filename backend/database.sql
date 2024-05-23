CREATE TABLE
    blog (
        id serial PRIMARY KEY,
        summary text NOT NULL,
        title text NOT NULL,
        content text NOT NULL,
        image text NOT NULL
    );

blog = [
  {
    image: "/bkb.png",
    title: "Benteng Kuto Besak",
    summary:
      "Benteng Kuto Besak is a historical fort in Palembang, South Sumatra, Indonesia. It was built in 1780 by the Dutch East India Company (VOC) during the colonial period. The fort is located on the banks of the Musi River and is one of the oldest buildings in Palembang. It is a popular tourist attraction and is a must-visit for history buffs and architecture enthusiasts.",
  },
  {
    image: "/amanzi.jpg",
    title: "Kambang Iwak Park",
    summary:
      "Kambang Iwak Park is a popular tourist destination in Palembang, South Sumatra, Indonesia. The park is located on the banks of the Musi River and is a great place to relax and enjoy the natural beauty of the area. The park is home to a variety of plants and animals, and is a popular spot for picnics and family outings. Visitors can also enjoy boat rides on the river and take in the stunning views of the city skyline.",
  },
  {
    image: "/amanzi.png",
    title: "Amanzi Waterpark",
    summary:
      "Amanzi Waterpark is a popular water park in Palembang, South Sumatra, Indonesia. The park is located on the banks of the Musi River and is a great place to cool off and have fun on a hot day. The park features a variety of water slides, pools, and other attractions for visitors of all ages. It is a popular spot for families and groups of friends looking to have a fun day out in the sun.",
  },
  {
    image: "/kemaro.jpg",
    title: "Kemaro Island",
    summary:
      "Kemaro Island is a small island in the Musi River in Palembang, South Sumatra, Indonesia. The island is home to a Chinese temple and a pagoda, as well as a park and a zoo. It is a popular tourist destination and is a great place to relax and enjoy the natural beauty of the area. Visitors can take a boat ride to the island and explore the various attractions on offer.",
  },
  {
    image: "/monpera.jpg",
    title: "Monpera",
    summary:
      "Monpera is a historical building in Palembang, South Sumatra, Indonesia. The building was built in 1962 and is a popular tourist attraction in the city. It is home to a museum that showcases the history and culture of Palembang, as well as a theater and an art gallery. The building is located in the city center and is a must-visit for history buffs and architecture enthusiasts.",
  },
];

insert into blog (image, title, summary, content) values
  ('/bkb.png', 'Benteng Kuto Besak', 'Benteng Kuto Besak is a historical fort in Palembang, South Sumatra, Indonesia. It was built in 1780 by the Dutch East India Company (VOC) during the colonial period. The fort is located on the banks of the Musi River and is one of the oldest buildings in Palembang. It is a popular tourist attraction and is a must-visit for history buffs and architecture enthusiasts.', 'Benteng Kuto Besak is a historical fort in Palembang, South Sumatra, Indonesia. It was built in 1780 by the Dutch East India Company (VOC) during the colonial period. The fort is located on the banks of the Musi River and is one of the oldest buildings in Palembang. It is a popular tourist attraction and is a must-visit for history buffs and architecture enthusiasts.'),
  ('/amanzi.jpg', 'Kambang Iwak Park', 'Kambang Iwak Park is a popular tourist destination in Palembang, South Sumatra, Indonesia. The park is located on the banks of the Musi River and is a great place to relax and enjoy the natural beauty of the area. The park is home to a variety of plants and animals, and is a popular spot for picnics and family outings. Visitors can also enjoy boat rides on the river and take in the stunning views of the city skyline.', 'Kambang Iwak Park is a popular tourist destination in Palembang, South Sumatra, Indonesia. The park is located on the banks of the Musi River and is a great place to relax and enjoy the natural beauty of the area. The park is home to a variety of plants and animals, and is a popular spot for picnics and family outings. Visitors can also enjoy boat rides on the river and take in the stunning views of the city skyline.'),
  ('/amanzi.png', 'Amanzi Waterpark', 'Amanzi Waterpark is a popular water park in Palembang, South Sumatra, Indonesia. The park is located on the banks of the Musi River and is a great place to cool off and have fun on a hot day. The park features a variety of water slides, pools, and other attractions for visitors of all ages. It is
    a popular spot for families and groups of friends looking to have a fun day out in the sun.', 'Amanzi Waterpark is a popular water park in Palembang, South Sumatra, Indonesia. The park is located on the banks of the Musi River and is a great place to cool off and have fun on a hot day. The park features a variety of water slides, pools, and other attractions for visitors of all ages. It is a popular spot for families and groups of friends looking to have a fun day out in the sun.'),
    ('/kemaro.jpg', 'Kemaro Island', 'Kemaro Island is a small island in the Musi River in Palembang, South Sumatra, Indonesia. The island is home to a Chinese temple and a pagoda, as well as a park and a zoo. It is a popular tourist destination and is a great place to relax and enjoy the natural beauty of the area. Visitors can take a boat ride to the island and explore the various attractions on offer.', 'Kemaro Island is a small island in the Musi River in Palembang, South Sumatra, Indonesia. The island is home to a Chinese temple and a pagoda, as well as a park and a zoo. It is a popular tourist destination and is a great place to relax and enjoy the natural beauty of the area. Visitors can take a boat ride to the island and explore the various attractions on offer.'),
    ('/monpera.jpg', 'Monpera', 'Monpera is a historical building in Palembang, South Sumatra, Indonesia. The building was built in 1962 and is a popular tourist attraction in the city. It is home to a museum that showcases the history and culture of Palembang, as well as a theater and an art gallery. The building is located in the city center and is a must-visit for history buffs and architecture enthusiasts.', 'Monpera is a historical building in Palembang, South Sumatra, Indonesia. The building was built in 1962 and is a popular tourist attraction in the city. It is home to a museum that showcases the history and culture of Palembang, as well as a theater and an art gallery. The building is located in the city center and is a must-visit for history buffs and architecture enthusiasts.');