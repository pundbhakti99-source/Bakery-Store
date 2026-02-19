
const products = [
  {
    "name": "Classic Chocolate Chip",
    "price": 95,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    "desc": "Buttery cookies loaded with premium dark and milk chocolate chips, baked to golden perfection with crispy edges and a chewy center."
  },
  {
    "name": "Double Chocolate Fudge",
    "price": 110,
    "cat": "cookies",
    "img": "https://sugarspunrun.com/wp-content/uploads/2022/02/Fudge-Cookies-1-of-1.jpg",
    "desc": "Intensely rich cocoa cookies studded with chocolate chunks, delivering a deep, decadent chocolate experience in every bite."
  },
  {
    "name": "Oatmeal Raisin",
    "price": 90,
    "cat": "cookies",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEicA-MDDgnp9pL3weIZJNU6o9sHDdC3vLg&s",
    "desc": "Wholesome rolled oats blended with plump California raisins and warm cinnamon spices for a comforting, homestyle treat."
  },
  {
    "name": "Peanut Butter Bliss",
    "price": 105,
    "cat": "cookies",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGq7tIpSKJtjITy_VhuFPG7I2whm3aJTRyw&s",
    "desc": "Creamy peanut butter cookies with that signature fork-pressed pattern, perfectly balanced between sweet and savory."
  },
  {
    "name": "Snickerdoodle",
    "price": 95,
    "cat": "cookies",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHru64OWbRFIkOmlN5tdehzQCkT_2KvGnHZA&s",
    "desc": "Soft, pillowy cookies rolled in cinnamon sugar, creating a crackled top with an irresistibly tender interior."
  },
  {
    "name": "White Chocolate Macadamia",
    "price": 140,
    "cat": "cookies",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnvhWShzqHXuWDPGftI7EB4ayVob313G1Tg&s",
    "desc": "Buttery Hawaiian macadamia nuts paired with creamy white chocolate in a golden, slightly crisp cookie base."
  },
  {
    "name": "Salted Caramel Swirl",
    "price": 135,
    "cat": "cookies",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4M3TGLpTjcWhIfBR9oyS5TxXdqaWF9aqBjQ&s",
    "desc": "Luscious caramel ribbons swirled through brown butter cookie dough, finished with flaky Maldon sea salt."
  },
  {
    "name": "Lemon Sugar",
    "price": 100,
    "cat": "cookies",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbb_TsglfVUyZqBvB1yaC3lxZP3KPnsa3Epg&s",
    "desc": "Bright, zesty lemon cookies with a delicate sugar coating, offering a refreshing citrus burst in every bite."
  },
  {
    "name": "Red Velvet Cream Cheese",
    "price": 125,
    "cat": "cookies",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDH0mA2TZjYC6I7CdN_BwvtdkH8Xtu35sgA&s",
    "desc": "Vibrant crimson cookies with swirls of tangy cream cheese, combining cake-like texture with classic flavor."
  },
  {
    "name": "Espresso Chocolate Chunk",
    "price": 130,
    "cat": "cookies",
    "img": "https://plus.unsplash.com/premium_photo-1675435646468-5c3b3e550331?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    "desc": "Robust espresso-infused dough loaded with dark chocolate chunks for coffee lovers seeking an afternoon pick-me-up."
  },
  {
    "name": "Maple Pecan Shortbread",
    "price": 145,
    "cat": "cookies",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnh1sziYXbSNhSEgRjdFZgNKtfZ1D40SV5Rw&s",
    "desc": "Buttery shortbread enriched with pure maple syrup and studded with toasted Georgia pecans."
  },
  {
    "name": "Ginger Molasses",
    "price": 105,
    "cat": "cookies",
    "img": "https://plus.unsplash.com/premium_photo-1669831177967-c0dab4cf4bb5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    "desc": "Chewy molasses cookies with crystallized ginger pieces and warm holiday spices that melt on your tongue."
  },
  {
    "name": "Coconut Macaroon",
    "price": 115,
    "cat": "cookies",
    "img": "https://plus.unsplash.com/premium_photo-1698172419856-b9202ac64dce?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "desc": "Crispy-edged, chewy-centered coconut mounds with golden toasted peaks and a hint of vanilla."
  },
  {
    "name": "Almond Biscotti",
    "price": 120,
    "cat": "cookies",
    "img": "https://stock.adobe.com/search?k=biscotti",
    "desc": "Twice-baked Italian cookies with whole roasted almonds, perfect for dunking in coffee or espresso."
  },
  {
    "name": "Chocolate Crinkle",
    "price": 110,
    "cat": "cookies",
    "img": "https://unsplash.com/s/photos/chocolate-cookies",
    "desc": "Fudgy chocolate cookies with dramatic powdered sugar cracks, revealing a rich, brownie-like interior."
  },
  {
    "name": "Butter Pecan",
    "price": 125,
    "cat": "cookies",
    "img": "https://unsplash.com/photos/chocolate-chip-cookies-with-pecans-and-pecans-on-top-KmP50MppuN4",
    "desc": "Brown butter cookies loaded with caramelized pecans and a touch of vanilla for Southern-inspired sweetness."
  },
  {
    "name": "Strawberry Cheesecake",
    "price": 150,
    "cat": "cookies",
    "img": "https://inbloombakery.com/strawberry-cheesecake-cookies/",
    "desc": "Cream cheese cookie dough swirled with strawberry jam and topped with graham cracker crumbles."
  },
  {
    "name": "M&M Rainbow",
    "price": 105,
    "cat": "cookies",
    "img": "https://unsplash.com/photos/a-cookie-with-m-m-on-it-sitting-on-a-table-uljC6HyyEJM",
    "desc": "Colorful and fun cookies packed with candy-coated chocolate pieces that appeal to kids of all ages."
  },
  {
    "name": "Tahini Sesame",
    "price": 135,
    "cat": "cookies",
    "img": "https://comfybelly.com/2023/07/tahini-cookies/",
    "desc": "Nutty tahini cookies coated in toasted sesame seeds, offering a sophisticated Middle Eastern twist."
  },
  {
    "name": "Matcha White Chocolate",
    "price": 155,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
    "desc": "Earthy Japanese matcha dough studded with creamy white chocolate chips for a zen-inspired treat."
  },
  {
    "name": "Brown Butter Walnut",
    "price": 130,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1558312657-b2dead03d494",
    "desc": "Nutty browned butter cookie dough with toasted walnut pieces and a hint of pure maple syrup."
  },
  {
    "name": "Cranberry Orange",
    "price": 115,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1590080876351-941da357f1b0",
    "desc": "Zesty orange cookies studded with tart dried cranberries, perfect for autumn and winter gatherings."
  },
  {
    "name": "Triple Ginger",
    "price": 125,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1607114910421-e8d5b5e11b87",
    "desc": "Fresh, ground, and crystallized ginger combine for an intensely spiced cookie with serious kick."
  },
  {
    "name": "Chai Spice",
    "price": 120,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e",
    "desc": "Warm cardamom, cinnamon, and clove infused cookies inspired by traditional masala chai flavors."
  },
  {
    "name": "S'mores",
    "price": 145,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    "desc": "Graham cracker cookie base topped with chocolate chunks and toasted mini marshmallows."
  },
  {
    "name": "Lavender Honey",
    "price": 140,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1590080876351-941da357f1b0",
    "desc": "Delicate cookies infused with culinary lavender and local wildflower honey for floral elegance."
  },
  {
    "name": "Pistachio Rose",
    "price": 165,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
    "desc": "Persian-inspired cookies with ground pistachios and rose water, topped with crushed nuts."
  },
  {
    "name": "Funfetti Birthday",
    "price": 110,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1558312657-b2dead03d494",
    "desc": "Vanilla bean cookies loaded with rainbow sprinkles, bringing birthday cake vibes to every celebration."
  },
  {
    "name": "Nutella Stuffed",
    "price": 175,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    "desc": "Thick chocolate cookies with a molten hazelnut spread center that oozes with each bite."
  },
  {
    "name": "Apple Pie",
    "price": 130,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e",
    "desc": "Cinnamon-spiced cookies with dried apple pieces and a brown sugar streusel topping."
  },
  {
    "name": "Black Forest",
    "price": 155,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    "desc": "Dark chocolate cookies with dried cherries and white chocolate chips, inspired by the classic German cake."
  },
  {
    "name": "Toffee Crunch",
    "price": 135,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    "desc": "Buttery cookies studded with English toffee bits that add irresistible caramelized crunch."
  },
  {
    "name": "Earl Grey",
    "price": 145,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1590080876351-941da357f1b0",
    "desc": "Sophisticated shortbread infused with bergamot-scented Earl Grey tea and a light lemon glaze."
  },
  {
    "name": "Mexican Hot Chocolate",
    "price": 140,
    "cat": "cookies",
    "img": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    "desc": "Spiced chocolate cookies with cinnamon and a hint of cayenne pepper for gentle warmth."
  },
  {
    "name": "Classic Butter Croissant",
    "price": 95,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    "desc": "Flaky, golden croissant with 27 layers of laminated French butter dough, baked to crispy perfection."
  },
  {
    "name": "Pain au Chocolat",
    "price": 120,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1530610476181-d83430b64dcd",
    "desc": "Buttery croissant dough wrapped around two bars of premium dark chocolate, creating a decadent breakfast treat."
  },
  {
    "name": "Almond Croissant",
    "price": 145,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
    "desc": "Twice-baked croissant filled with frangipane cream, topped with sliced almonds and powdered sugar."
  },
  {
    "name": "Ham & Cheese Croissant",
    "price": 165,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1620146344904-097a0002d363",
    "desc": "Savory croissant filled with Black Forest ham and melted Gruyère cheese, perfect for brunch."
  },
  {
    "name": "Danish Raspberry Swirl",
    "price": 130,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1509365390695-33aee754301f",
    "desc": "Spiral Danish pastry filled with tangy raspberry preserves and drizzled with vanilla icing."
  },
  {
    "name": "Apple Turnover",
    "price": 115,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1568051243851-f9b136146e97",
    "desc": "Flaky puff pastry envelope filled with cinnamon-spiced apple compote and glazed with sugar."
  },
  {
    "name": "Chocolate Éclair",
    "price": 155,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2",
    "desc": "Choux pastry filled with silky vanilla custard and topped with rich dark chocolate ganache."
  },
  {
    "name": "Coffee Éclair",
    "price": 160,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1612203985729-70726954388c",
    "desc": "Light choux pastry filled with espresso-infused cream and glazed with coffee fondant."
  },
  {
    "name": "Fruit Danish Crown",
    "price": 140,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1509365390695-33aee754301f",
    "desc": "Crown-shaped Danish filled with vanilla custard and topped with seasonal fresh fruits."
  },
  {
    "name": "Cinnamon Roll",
    "price": 125,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1609127843904-a9f4e29d2a85",
    "desc": "Soft, yeasted roll swirled with brown sugar and Ceylon cinnamon, topped with cream cheese frosting."
  },
  {
    "name": "Pecan Sticky Bun",
    "price": 175,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1619221882220-1da1407b2154",
    "desc": "Caramelized pull-apart bun with toasted pecans and butterscotch glaze that's perfectly gooey."
  },
  {
    "name": "Blueberry Scone",
    "price": 105,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df",
    "desc": "Tender British-style scone studded with wild blueberries and finished with a light lemon glaze."
  },
  {
    "name": "Cheese Danish",
    "price": 120,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1509365390695-33aee754301f",
    "desc": "Flaky Danish pastry filled with sweetened cream cheese and a hint of pure vanilla extract."
  },
  {
    "name": "Croissant aux Amandes",
    "price": 165,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
    "desc": "Day-old croissant soaked in almond syrup, filled with almond cream, and baked until caramelized."
  },
  {
    "name": "Pain aux Raisins",
    "price": 110,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e",
    "desc": "Spiral pastry with vanilla pastry cream and rum-soaked raisins, glazed with apricot."
  },
  {
    "name": "Kouign-Amann",
    "price": 185,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    "desc": "Caramelized Breton pastry with layers of butter and sugar creating crispy, flaky perfection."
  },
  {
    "name": "Bear Claw",
    "price": 145,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
    "desc": "Almond-filled Danish shaped like a bear's paw, with sliced almonds and powdered sugar."
  },
  {
    "name": "Chocolate Babka",
    "price": 200,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
    "desc": "Jewish-style twisted bread with swirls of dark chocolate and streusel topping."
  },
  {
    "name": "Cinnamon Babka",
    "price": 195,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1609127843904-a9f4e29d2a85",
    "desc": "Braided sweet bread with brown sugar-cinnamon filling and a buttery streusel crust."
  },
  {
    "name": "Palmier",
    "price": 85,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
    "desc": "Crispy elephant ear-shaped pastry made from caramelized puff pastry, light and crunchy."
  },
  {
    "name": "Paris-Brest",
    "price": 220,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1612203985729-70726954388c",
    "desc": "Ring-shaped choux pastry filled with praline mousseline cream, topped with sliced almonds."
  },
  {
    "name": "Cream Puff",
    "price": 135,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1612203985729-70726954388c",
    "desc": "Light choux pastry sphere filled with Chantilly cream and dusted with powdered sugar."
  },
  {
    "name": "Profiterole Tower",
    "price": 280,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1612203985729-70726954388c",
    "desc": "Stack of cream puffs drizzled with warm chocolate sauce, perfect for sharing."
  },
  {
    "name": "Spinach Feta Puff",
    "price": 150,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1620146344904-097a0002d363",
    "desc": "Golden puff pastry filled with spinach, feta cheese, and Mediterranean herbs."
  },
  {
    "name": "Sausage Roll",
    "price": 125,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1620146344904-097a0002d363",
    "desc": "Flaky pastry wrapped around seasoned pork sausage with herbs and a touch of sage."
  },
  {
    "name": "Beef Wellington Bite",
    "price": 195,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1620146344904-097a0002d363",
    "desc": "Mini puff pastry with beef tenderloin, mushroom duxelles, and Dijon mustard."
  },
  {
    "name": "Cherry Danish",
    "price": 130,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1509365390695-33aee754301f",
    "desc": "Flaky Danish pastry with vanilla custard and sweet-tart cherry compote topping."
  },
  {
    "name": "Apricot Danish",
    "price": 125,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1509365390695-33aee754301f",
    "desc": "Buttery Danish filled with almond cream and glazed apricot halves."
  },
  {
    "name": "Brioche Feuilletée",
    "price": 155,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    "desc": "Layered brioche with a croissant-like texture, rich with European butter."
  },
  {
    "name": "Canelé",
    "price": 140,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
    "desc": "French Bordeaux specialty with caramelized crust and soft rum-vanilla custard interior."
  },
  {
    "name": "Sfogliatella",
    "price": 165,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    "desc": "Italian shell-shaped pastry with crispy layers filled with ricotta and candied citrus."
  },
  {
    "name": "Mille-Feuille",
    "price": 250,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1612203985729-70726954388c",
    "desc": "Napoleon pastry with three layers of caramelized puff pastry and vanilla diplomat cream."
  },
  {
    "name": "Portuguese Egg Tart",
    "price": 115,
    "cat": "pastries",
    "img": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
    "desc": "Flaky pastry cup with caramelized custard, featuring signature charred spots on top."
  },
  {
    "name": "Classic Chocolate Layer",
    "price": 650,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    "desc": "Three layers of rich chocolate cake with silky chocolate buttercream and dark chocolate ganache drip."
  },
  {
    "name": "Red Velvet",
    "price": 700,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c",
    "desc": "Iconic crimson cake with tangy cream cheese frosting, decorated with red velvet crumbs."
  },
  {
    "name": "Vanilla Bean Celebration",
    "price": 550,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    "desc": "Light vanilla sponge cake with Madagascar vanilla buttercream and edible flower decorations."
  },
  {
    "name": "New York Cheesecake",
    "price": 600,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    "desc": "Dense, creamy cheesecake with graham cracker crust and your choice of fruit topping."
  },
  {
    "name": "Carrot Walnut",
    "price": 580,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    "desc": "Spiced carrot cake with toasted walnuts, cream cheese frosting, and marzipan carrot decorations."
  },
  {
    "name": "Tiramisu Torte",
    "price": 750,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    "desc": "Espresso-soaked layers with mascarpone cream, dusted with premium Dutch cocoa powder."
  },
  {
    "name": "Lemon Raspberry",
    "price": 680,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    "desc": "Zesty lemon cake layers with raspberry curd filling and Italian meringue frosting."
  },
  {
    "name": "German Chocolate",
    "price": 720,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    "desc": "Classic chocolate cake topped with coconut-pecan frosting, a Southern American tradition."
  },
  {
    "name": "Black Forest Gateau",
    "price": 850,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
    "desc": "Chocolate sponge with Kirsch-soaked cherries, Chantilly cream, and chocolate shavings."
  },
  {
    "name": "Strawberry Shortcake",
    "price": 620,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    "desc": "Fluffy vanilla cake with fresh strawberries and clouds of whipped cream frosting."
  },
  {
    "name": "Opera Cake",
    "price": 950,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1562440499-64c9a111f713",
    "desc": "French masterpiece with almond sponge, coffee buttercream, and chocolate ganache layers."
  },
  {
    "name": "Coconut Paradise",
    "price": 680,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    "desc": "Moist coconut cake with coconut cream filling, frosted with toasted coconut flakes."
  },
  {
    "name": "Pumpkin Spice",
    "price": 560,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    "desc": "Seasonal favorite with warm spices, cream cheese frosting, and candied pepita topping."
  },
  {
    "name": "Mocha Hazelnut",
    "price": 780,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    "desc": "Coffee-infused chocolate cake with Frangelico buttercream and praline crunch."
  },
  {
    "name": "Tres Leches",
    "price": 520,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    "desc": "Latin American sponge cake soaked in three milks, topped with cinnamon whipped cream."
  },
  {
    "name": "Matcha Green Tea",
    "price": 750,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    "desc": "Japanese-inspired layers with ceremonial grade matcha and white chocolate buttercream."
  },
  {
    "name": "Salted Caramel",
    "price": 720,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1562440499-64c9a111f713",
    "desc": "Brown butter cake with salted caramel filling, caramel buttercream, and sea salt flakes."
  },
  {
    "name": "Princess Torte",
    "price": 880,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    "desc": "Swedish classic with layers of cake, jam, custard, and whipped cream under green marzipan."
  },
  {
    "name": "Hummingbird Cake",
    "price": 640,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    "desc": "Southern banana-pineapple cake with pecans, cream cheese frosting, and edible flowers."
  },
  {
    "name": "Earl Grey Lavender",
    "price": 780,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    "desc": "Sophisticated tea-infused cake with lavender buttercream and crystallized flower petals."
  },
  {
    "name": "Chocolate Peanut Butter",
    "price": 700,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    "desc": "Rich chocolate layers with peanut butter mousse, topped with chocolate ganache and peanut butter cups."
  },
  {
    "name": "Italian Cream",
    "price": 720,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    "desc": "Buttery coconut-pecan cake with cream cheese frosting and toasted coconut decoration."
  },
  {
    "name": "Mango Passion",
    "price": 760,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    "desc": "Tropical sponge with mango mousse, passion fruit curd, and fresh exotic fruit topping."
  },
  {
    "name": "Chocolate Truffle",
    "price": 950,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
    "desc": "Dense, flourless chocolate cake with truffle ganache and gold leaf accents."
  },
  {
    "name": "Funfetti Celebration",
    "price": 480,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    "desc": "Festive vanilla cake loaded with rainbow sprinkles and vanilla buttercream frosting."
  },
  {
    "name": "Honey Almond",
    "price": 650,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1562440499-64c9a111f713",
    "desc": "Delicate almond sponge with wildflower honey buttercream and candied almond decoration."
  },
  {
    "name": "Biscoff Caramelized",
    "price": 720,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    "desc": "Cookie butter lovers dream with speculoos sponge, Biscoff buttercream, and cookie crumb coating."
  },
  {
    "name": "Blackberry Violet",
    "price": 850,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    "desc": "Elegant violet-scented cake with blackberry compote and Swiss meringue buttercream."
  },
  {
    "name": "Banoffee",
    "price": 580,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1562440499-64c9a111f713",
    "desc": "British classic with banana cake layers, toffee sauce, and fresh whipped cream topping."
  },
  {
    "name": "Wedding White Rose",
    "price": 1200,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1535254973040-607b474cb50d",
    "desc": "Elegant four-tier white cake with champagne buttercream and handcrafted sugar roses."
  },
  {
    "name": "Chocolate Raspberry Dream",
    "price": 780,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
    "desc": "Dark chocolate layers with raspberry ganache, topped with fresh raspberries and chocolate curls."
  },
  {
    "name": "Caramel Apple Spice",
    "price": 680,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    "desc": "Autumn-inspired apple cake with caramel filling, cinnamon buttercream, and apple chip garnish."
  },
  {
    "name": "Grand Marnier Orange",
    "price": 920,
    "cat": "cakes",
    "img": "https://images.unsplash.com/photo-1562440499-64c9a111f713",
    "desc": "Sophisticated orange cake soaked in Grand Marnier with orange curd and candied orange peel."
  }
];
