
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
    "img": "https://www.recipetineats.com/tachyon/2016/07/Oatmeal-Raisin-Cookies_3-SQ.jpg",
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
    "img": "https://lilluna.com/wp-content/uploads/2024/09/snickerdoodle-recipe-resize-14.jpg",
    "desc": "Soft, pillowy cookies rolled in cinnamon sugar, creating a crackled top with an irresistibly tender interior."
  },
  {
    "name": "White Chocolate Macadamia",
    "price": 140,
    "cat": "cookies",
    "img": "https://www.modernhoney.com/wp-content/uploads/2025/10/Levain-Bakery-White-Chocolate-Macadamia-Cookies-9.jpg",
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
    "img": "https://www.bunsenburnerbakery.com/wp-content/uploads/2017/06/lemon-sugar-cookies-square-14-720x720.jpg",
    "desc": "Bright, zesty lemon cookies with a delicate sugar coating, offering a refreshing citrus burst in every bite."
  },
  {
    "name": "Red Velvet Cream Cheese",
    "price": 125,
    "cat": "cookies",
    "img": "https://sallysbakingaddiction.com/wp-content/uploads/2017/11/cream-cheese-stuffed-red-velvet-cookies.jpg",
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
    "img": "https://gritsandgouda.com/wp-content/uploads/2023/11/Maple-Pecan-Cookies-Iced-stack-low-view.jpeg",
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
    "img": "https://seasonsinthekitchen.com/wp-content/uploads/2025/10/Italian-almond-biscotti-4.jpg",
    "desc": "Twice-baked Italian cookies with whole roasted almonds, perfect for dunking in coffee or espresso."
  },
  {
    "name": "Chocolate Crinkle",
    "price": 110,
    "cat": "cookies",
    "img": "https://krollskorner.com/wp-content/uploads/2024/11/Chocolate-Crinkle-Cookies_LowRes-023.jpg",
    "desc": "Fudgy chocolate cookies with dramatic powdered sugar cracks, revealing a rich, brownie-like interior."
  },
  {
    "name": "Butter Pecan",
    "price": 125,
    "cat": "cookies",
    "img": "https://hips.hearstapps.com/hmg-prod/images/butter-pecan-cookies-horizontal-1-1549055080.png?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*",
    "desc": "Brown butter cookies loaded with caramelized pecans and a touch of vanilla for Southern-inspired sweetness."
  },
  {
    "name": "Strawberry Cheesecake",
    "price": 150,
    "cat": "cookies",
    "img": "https://theseasidebaker.com/wp-content/uploads/2023/06/strawberry-cheesecake-cookies.jpg",
    "desc": "Cream cheese cookie dough swirled with strawberry jam and topped with graham cracker crumbles."
  },
  {
    "name": "M&M Rainbow",
    "price": 105,
    "cat": "cookies",
    "img": "https://sallysbakingaddiction.com/wp-content/uploads/2012/03/oatmeal-mm-cookies-7.jpg",
    "desc": "Colorful and fun cookies packed with candy-coated chocolate pieces that appeal to kids of all ages."
  },
  {
    "name": "Tahini Sesame",
    "price": 135,
    "cat": "cookies",
    "img": "https://noshingwiththenolands.com/wp-content/uploads/2022/02/Sesame-Tahini-Cookies-1200-x-1200.jpg",
    "desc": "Nutty tahini cookies coated in toasted sesame seeds, offering a sophisticated Middle Eastern twist."
  },
  {
    "name": "Matcha White Chocolate",
    "price": 155,
    "cat": "cookies",
    "img": "https://www.spatuladesserts.com/wp-content/uploads/2022/03/Matcha-cookies-3050623.1.1.jpg",
    "desc": "Earthy Japanese matcha dough studded with creamy white chocolate chips for a zen-inspired treat."
  },
  {
    "name": "Brown Butter Walnut",
    "price": 130,
    "cat": "cookies",
    "img": "https://yummynotes.net/wp-content/uploads/2023/01/Brown-Butter-Walnut-Cookies.jpg",
    "desc": "Nutty browned butter cookie dough with toasted walnut pieces and a hint of pure maple syrup."
  },
  {
    "name": "Cranberry Orange",
    "price": 115,
    "cat": "cookies",
    "img": "https://sallysbakingaddiction.com/wp-content/uploads/2022/12/cranberry-orange-icebox-cookies-3.jpg",
    "desc": "Zesty orange cookies studded with tart dried cranberries, perfect for autumn and winter gatherings."
  },
  {
    "name": "Triple Ginger",
    "price": 125,
    "cat": "cookies",
    "img": "https://www.loveandoliveoil.com/wp-content/uploads/2014/12/triple-ginger-snaps2.jpg",
    "desc": "Fresh, ground, and crystallized ginger combine for an intensely spiced cookie with serious kick."
  },
  {
    "name": "Chai Spice",
    "price": 120,
    "cat": "cookies",
    "img": "https://www.barleyandsage.com/wp-content/uploads/2022/11/chai-spice-cookies-1200x1200-1.jpg",
    "desc": "Warm cardamom, cinnamon, and clove infused cookies inspired by traditional masala chai flavors."
  },
  {
    "name": "S'mores",
    "price": 145,
    "cat": "cookies",
    "img": "https://cookienameddesire.com/wp-content/uploads/2014/01/smores-stuffed-cookies-labeled.jpg",
    "desc": "Graham cracker cookie base topped with chocolate chunks and toasted mini marshmallows."
  },
  {
    "name": "Lavender Honey",
    "price": 140,
    "cat": "cookies",
    "img": "https://images.getrecipekit.com/20260108053732-chatgpt-20image-20jan-207-2c-202026-2c-2009_36_26-20pm.png?aspect_ratio=16:9&quality=90&",
    "desc": "Delicate cookies infused with culinary lavender and local wildflower honey for floral elegance."
  },
  {
    "name": "Pistachio Rose",
    "price": 165,
    "cat": "cookies",
    "img": "https://lentillovingfamily.com/wp-content/uploads/2025/08/rose-pistachio-shortbread-cookies-1.jpg",
    "desc": "Persian-inspired cookies with ground pistachios and rose water, topped with crushed nuts."
  },
  {
    "name": "Funfetti Birthday",
    "price": 110,
    "cat": "cookies",
    "img": "https://www.crazyforcrust.com/wp-content/uploads/2021/05/cake-batter-cookies-6.jpg",
    "desc": "Vanilla bean cookies loaded with rainbow sprinkles, bringing birthday cake vibes to every celebration."
  },
  {
    "name": "Nutella Stuffed",
    "price": 175,
    "cat": "cookies",
    "img": "https://sugargeekshow.com/wp-content/uploads/2021/10/nutella_stuffed_cookies_FEATURED.jpg",
    "desc": "Thick chocolate cookies with a molten hazelnut spread center that oozes with each bite."
  },
  {
    "name": "Apple Pie",
    "price": 130,
    "cat": "cookies",
    "img": "https://krollskorner.com/wp-content/uploads/2025/10/ApplePie-0029-2.jpg",
    "desc": "Cinnamon-spiced cookies with dried apple pieces and a brown sugar streusel topping."
  },
  {
    "name": "Black Forest",
    "price": 155,
    "cat": "cookies",
    "img": "https://www.3yummytummies.com/wp-content/uploads/2017/12/Chocolate-Cherry-Thumbprint-Cookies-f--735x1024.jpg",
    "desc": "Dark chocolate cookies with dried cherries and white chocolate chips, inspired by the classic German cake."
  },
  {
    "name": "Toffee Crunch",
    "price": 135,
    "cat": "cookies",
    "img": "https://images.squarespace-cdn.com/content/v1/5ce42a21a905680001ab10c8/99ee3b38-6afd-4d13-9008-dde176b7c4c3/Cover+Photo+-+Cornflake+Toffee+Cookies.jpg",
    "desc": "Buttery cookies studded with English toffee bits that add irresistible caramelized crunch."
  },
  {
    "name": "Earl Grey",
    "price": 145,
    "cat": "cookies",
    "img": "https://sparklecakerie.com/wp-content/uploads/2024/10/earl-grey-sugar-cookies-hero-feature.jpg",
    "desc": "Sophisticated shortbread infused with bergamot-scented Earl Grey tea and a light lemon glaze."
  },
  {
    "name": "Mexican Hot Chocolate",
    "price": 140,
    "cat": "cookies",
    "img": "https://static01.nyt.com/images/2023/11/29/multimedia/29cookieweek6-hotchoc-fktb/29cookieweek6-hotchoc-fktb-facebookJumbo.jpg",
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
    "img": "https://theobroma.in/cdn/shop/files/PainAuChocolat02.jpg?v=1710838733",
    "desc": "Buttery croissant dough wrapped around two bars of premium dark chocolate, creating a decadent breakfast treat."
  },
  {
    "name": "Almond Croissant",
    "price": 145,
    "cat": "pastries",
    "img": "https://www.kitchensanctuary.com/wp-content/uploads/2017/04/Almond-Croissants-Square-FS-31.jpg",
    "desc": "Twice-baked croissant filled with frangipane cream, topped with sliced almonds and powdered sugar."
  },
  {
    "name": "Ham & Cheese Croissant",
    "price": 165,
    "cat": "pastries",
    "img": "https://images.immediate.co.uk/production/volatile/sites/30/2023/09/Ham-and-cheese-croissant-449b9ce.jpg",
    "desc": "Savory croissant filled with Black Forest ham and melted Gruyère cheese, perfect for brunch."
  },
  {
    "name": "Danish Raspberry Swirl",
    "price": 130,
    "cat": "pastries",
    "img": "https://www.vanillabeancuisine.com/wp-content/uploads/2022/08/Raspberry-Danish-FEAT-IMAGE.jpg",
    "desc": "Spiral Danish pastry filled with tangy raspberry preserves and drizzled with vanilla icing."
  },
  {
    "name": "Apple Turnover",
    "price": 115,
    "cat": "pastries",
    "img": "https://familydinners.com/wp-content/uploads/2022/08/Handmade-Apple-Turnover-Recipe-5.jpg",
    "desc": "Flaky puff pastry envelope filled with cinnamon-spiced apple compote and glazed with sugar."
  },
  {
    "name": "Chocolate Éclair",
    "price": 155,
    "cat": "pastries",
    "img": "https://www.gogogogourmet.com/wp-content/uploads/2015/02/Chocolate-Eclairs-7.jpg",
    "desc": "Choux pastry filled with silky vanilla custard and topped with rich dark chocolate ganache."
  },
  {
    "name": "Coffee Éclair",
    "price": 160,
    "cat": "pastries",
    "img": "https://whippedfood.com/wp-content/uploads/2023/09/Coffee-Eclair.jpg",
    "desc": "Light choux pastry filled with espresso-infused cream and glazed with coffee fondant."
  },
  {
    "name": "Fruit Danish Crown",
    "price": 140,
    "cat": "pastries",
    "img": "https://www.britishbakels.co.uk/wp-content/uploads/sites/2/2022/01/Bakels_147-Large.jpg",
    "desc": "Crown-shaped Danish filled with vanilla custard and topped with seasonal fresh fruits."
  },
  {
    "name": "Cinnamon Roll",
    "price": 125,
    "cat": "pastries",
    "img": "https://www.thepalatablelife.com/wp-content/uploads/2024/05/miso-butter-cinnamon-rolls-2-scaled.jpg",
    "desc": "Soft, yeasted roll swirled with brown sugar and Ceylon cinnamon, topped with cream cheese frosting."
  },
  {
    "name": "Pecan Sticky Bun",
    "price": 175,
    "cat": "pastries",
    "img": "https://redstaryeast.com/wp-content/uploads/2014/10/Pecan-Sticky-Buns-72-dpi-800w.jpg",
    "desc": "Caramelized pull-apart bun with toasted pecans and butterscotch glaze that's perfectly gooey."
  },
  {
    "name": "Blueberry Scone",
    "price": 105,
    "cat": "pastries",
    "img": "https://www.kyleecooks.com/wp-content/uploads/2021/02/Blueberry-Scones-SQ-1.jpg",
    "desc": "Tender British-style scone studded with wild blueberries and finished with a light lemon glaze."
  },
  {
    "name": "Cheese Danish",
    "price": 120,
    "cat": "pastries",
    "img": "https://littlesunnykitchen.com/wp-content/uploads/2023/04/Cheese-Danish-1.jpg",
    "desc": "Flaky Danish pastry filled with sweetened cream cheese and a hint of pure vanilla extract."
  },
  {
    "name": "Croissant aux Amandes",
    "price": 165,
    "cat": "pastries",
    "img": "https://noseychef.com/wp-content/uploads/2021/09/IMG_8872123.jpg",
    "desc": "Day-old croissant soaked in almond syrup, filled with almond cream, and baked until caramelized."
  },
  {
    "name": "Pain aux Raisins",
    "price": 110,
    "cat": "pastries",
    "img": "https://www.cookinwithmima.com/wp-content/uploads/2022/10/Pain-Aux-Raisin-Recipe.jpg",
    "desc": "Spiral pastry with vanilla pastry cream and rum-soaked raisins, glazed with apricot."
  },
  {
    "name": "Kouign-Amann",
    "price": 185,
    "cat": "pastries",
    "img": "https://anitalianinmykitchen.com/wp-content/uploads/2016/01/k-amann-sq-1-of-1.jpg",
    "desc": "Caramelized Breton pastry with layers of butter and sugar creating crispy, flaky perfection."
  },
  {
    "name": "Bear Claw",
    "price": 145,
    "cat": "pastries",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak_m0xfrJZ44reqFt8ZJAYUB7L9EdQ0p97Q&s",
    "desc": "Almond-filled Danish shaped like a bear's paw, with sliced almonds and powdered sugar."
  },
  {
    "name": "Chocolate Babka",
    "price": 200,
    "cat": "pastries",
    "img": "https://www.foodandwine.com/thmb/3EzcSQmx93K20oEJCsZVYrPm6KE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RECIPE0116-XL-chocolate-babka-1a2e39def5f043f58caf48b97456a119.jpg",
    "desc": "Jewish-style twisted bread with swirls of dark chocolate and streusel topping."
  },
  {
    "name": "Cinnamon Babka",
    "price": 195,
    "cat": "pastries",
    "img": "https://toriavey.com/images/2019/01/P1288273.jpg",
    "desc": "Braided sweet bread with brown sugar-cinnamon filling and a buttery streusel crust."
  },
  {
    "name": "Palmier",
    "price": 85,
    "cat": "pastries",
    "img": "https://natashaskitchen.com/wp-content/uploads/2025/11/Palmiers-Elephant-Ears-SQ-500x375.jpg",
    "desc": "Crispy elephant ear-shaped pastry made from caramelized puff pastry, light and crunchy."
  },
  {
    "name": "Paris-Brest",
    "price": 220,
    "cat": "pastries",
    "img": "https://bakefromscratch.com/wp-content/uploads/2017/02/Paris-Brest-696x566.jpg",
    "desc": "Ring-shaped choux pastry filled with praline mousseline cream, topped with sliced almonds."
  },
  {
    "name": "Cream Puff",
    "price": 135,
    "cat": "pastries",
    "img": "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2024/03/puff-pastry-cones.jpg",
    "desc": "Light choux pastry sphere filled with Chantilly cream and dusted with powdered sugar."
  },
  {
    "name": "Spinach Feta Puff",
    "price": 150,
    "cat": "pastries",
    "img": "https://www.oliveandmango.com/images/uploads/2020_12_30_spanakopita_sunflower_1.jpg",
    "desc": "Golden puff pastry filled with spinach, feta cheese, and Mediterranean herbs."
  },
  {
    "name": "Sausage Roll",
    "price": 125,
    "cat": "pastries",
    "img": "https://www.shecooksdesign.com/wp-content/uploads/2024/03/sausage-rolls-01.jpg",
    "desc": "Flaky pastry wrapped around seasoned pork sausage with herbs and a touch of sage."
  },
  {
    "name": "Beef Wellington Bite",
    "price": 195,
    "cat": "pastries",
    "img": "https://hillstreetgrocer.com/application/files/8716/6571/9520/Recipe-image65.jpg",
    "desc": "Mini puff pastry with beef tenderloin, mushroom duxelles, and Dijon mustard."
  },
  {
    "name": "Cherry Danish",
    "price": 130,
    "cat": "pastries",
    "img": "https://www.vanillabeancuisine.com/wp-content/uploads/2021/01/Plate-of-cherry-danishes.jpg",
    "desc": "Flaky Danish pastry with vanilla custard and sweet-tart cherry compote topping."
  },
  {
    "name": "Apricot Danish",
    "price": 125,
    "cat": "pastries",
    "img": "https://brasseriebread.com.au/wp-content/uploads/2020/05/Apricot-Danish2-2-1800x1200.jpg",
    "desc": "Buttery Danish filled with almond cream and glazed apricot halves."
  },
  {
    "name": "Brioche Feuilletée",
    "price": 155,
    "cat": "pastries",
    "img": "https://i0.wp.com/aime-mange.com/wp-content/uploads/2020/12/IMG_0610-scaled.jpg?resize=683%2C1024&ssl=1",
    "desc": "Layered brioche with a croissant-like texture, rich with European butter."
  },
  {
    "name": "Canelé",
    "price": 140,
    "cat": "pastries",
    "img": "https://cdn.prod.website-files.com/62d6dee53062554a34a0c24e/6333210308d113b258cb3853_62d6dee53062555270a0c7d6-adobestock-476169951-small-2.webp",
    "desc": "French Bordeaux specialty with caramelized crust and soft rum-vanilla custard interior."
  },
  {
    "name": "Sfogliatella",
    "price": 165,
    "cat": "pastries",
    "img": "https://www.foodandwine.com/thmb/Hby9wBBAtjo8WOzwrmKXhdfQTzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sfogliatelle-FT-RECIPE1222-f5ae520a60c745f8ac83f7519432d904.jpg",
    "desc": "Italian shell-shaped pastry with crispy layers filled with ricotta and candied citrus."
  },
  {
    "name": "Mille-Feuille",
    "price": 250,
    "cat": "pastries",
    "img": "https://myloveofbaking.com/wp-content/uploads/2021/04/IMG_6633-scaled.jpg",
    "desc": "Napoleon pastry with three layers of caramelized puff pastry and vanilla diplomat cream."
  },
  {
    "name": "Portuguese Egg Tart",
    "price": 115,
    "cat": "pastries",
    "img": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/tk%2Fphoto%2F2025%2F06-2025%2F2025-06-pasteis-de-nata%2Fpasteis-de-nata-11",
    "desc": "Flaky pastry cup with caramelized custard, featuring signature charred spots on top."
  },
  {
    "name": "Classic Chocolate Layer",
    "price": 650,
    "cat": "cakes",
    "img": "https://healthyhappylife.com/wp-content/uploads/2020/04/chocolate-layer-cake-IMG_7993.jpg",
    "desc": "Three layers of rich chocolate cake with silky chocolate buttercream and dark chocolate ganache drip."
  },
  {
    "name": "Red Velvet",
    "price": 700,
    "cat": "cakes",
    "img": "https://thescranline.com/wp-content/uploads/2023/06/RED-VELVET-CAKE-23-S-01.jpg",
    "desc": "Iconic crimson cake with tangy cream cheese frosting, decorated with red velvet crumbs."
  },
  {
    "name": "Vanilla Bean Celebration",
    "price": 550,
    "cat": "cakes",
    "img": "https://stylesweet.com/wp-content/uploads/2022/07/VanillaBeanCake01.jpg",
    "desc": "Light vanilla sponge cake with Madagascar vanilla buttercream and edible flower decorations."
  },
  {
    "name": "New York Cheesecake",
    "price": 600,
    "cat": "cakes",
    "img": "https://www.marthastewart.com/thmb/m6R1D2iuHvVxM8u7RJz7c-Us8Rg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-865202-new-york-cheesecake-hero-horiz-0723-84e3c796119d408581d1ef4d02d801cd.jpg",
    "desc": "Dense, creamy cheesecake with graham cracker crust and your choice of fruit topping."
  },
  {
    "name": "Carrot Walnut",
    "price": 580,
    "cat": "cakes",
    "img": "https://butfirstchai.com/wp-content/uploads/2022/08/carrot_walnut_cake_03.jpg",
    "desc": "Spiced carrot cake with toasted walnuts, cream cheese frosting, and marzipan carrot decorations."
  },
  {
    "name": "Tiramisu Torte",
    "price": 750,
    "cat": "cakes",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqQikidvfbiZSkpocW_1T2p6_2y7OBv0YlQ&s",
    "desc": "Espresso-soaked layers with mascarpone cream, dusted with premium Dutch cocoa powder."
  },
  {
    "name": "Lemon Raspberry",
    "price": 680,
    "cat": "cakes",
    "img": "https://butternutbakeryblog.com/wp-content/uploads/2023/07/lemon-raspberry-cake.jpg",
    "desc": "Zesty lemon cake layers with raspberry curd filling and Italian meringue frosting."
  },
  {
    "name": "German Chocolate",
    "price": 720,
    "cat": "cakes",
    "img": "https://tasteofrecipe.net/wp-content/uploads/2024/09/aspic7_German_Chocolate_Cake_32dbdccf-2110-4577-b9cc-7e80fe887f3e.png",
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
    "img": "https://www.crazyforcrust.com/wp-content/uploads/2025/03/strawberry-shortcake-cake-12.jpg",
    "desc": "Fluffy vanilla cake with fresh strawberries and clouds of whipped cream frosting."
  },
  {
    "name": "Opera Cake",
    "price": 950,
    "cat": "cakes",
    "img": "https://ovenfresh2025.s3.eu-north-1.amazonaws.com/New_Website_products/2023/02/opera-e1705915835336.jpg",
    "desc": "French masterpiece with almond sponge, coffee buttercream, and chocolate ganache layers."
  },
  {
    "name": "Coconut Paradise",
    "price": 680,
    "cat": "cakes",
    "img": "https://toujours.co.in/cdn/shop/files/LAH-00174.jpg?v=1688206956",
    "desc": "Moist coconut cake with coconut cream filling, frosted with toasted coconut flakes."
  },
  {
    "name": "Pumpkin Spice",
    "price": 560,
    "cat": "cakes",
    "img": "https://thebananadiaries.com/wp-content/uploads/2023/10/vegan-pumpkin-cake_1438.jpg",
    "desc": "Seasonal favorite with warm spices, cream cheese frosting, and candied pepita topping."
  },
  {
    "name": "Mocha Hazelnut",
    "price": 780,
    "cat": "cakes",
    "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mocha-hazelnut-cake-5746712.jpg",
    "desc": "Coffee-infused chocolate cake with Frangelico buttercream and praline crunch."
  },
  {
    "name": "Tres Leches",
    "price": 520,
    "cat": "cakes",
    "img": "https://tatyanaseverydayfood.com/wp-content/uploads/2021/04/Berry-Tres-Leches-Cake-Recipe-2.jpg",
    "desc": "Latin American sponge cake soaked in three milks, topped with cinnamon whipped cream."
  },
  {
    "name": "Matcha Green Tea",
    "price": 750,
    "cat": "cakes",
    "img": "https://www.thebakingspoon.com/wp-content/uploads/2015/09/IMG_3653-12.jpg",
    "desc": "Japanese-inspired layers with ceremonial grade matcha and white chocolate buttercream."
  },
  {
    "name": "Salted Caramel",
    "price": 720,
    "cat": "cakes",
    "img": "https://www.bakedambrosia.com/wp-content/uploads/2023/11/Salted-Caramel-Cake-9.jpg",
    "desc": "Brown butter cake with salted caramel filling, caramel buttercream, and sea salt flakes."
  },
  {
    "name": "Princess Torte",
    "price": 880,
    "cat": "cakes",
    "img": "https://www.allrecipes.com/thmb/Xs9lwG0Tizl4jmIq98cuo5eOKy4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/283216_Princesstrta_32122_MFS-21e0e25bb80d41b4a6f7cc29bdb0f985.jpg",
    "desc": "Swedish classic with layers of cake, jam, custard, and whipped cream under green marzipan."
  },
  {
    "name": "Hummingbird Cake",
    "price": 640,
    "cat": "cakes",
    "img": "https://www.thespruceeats.com/thmb/v-FYqHVCB6TmDQKfloftBR-cvM8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-hummingbird-cake-recipe-3051129-hero-01-2575c5862c7b4d36bd57778ea7bd9889.jpg",
    "desc": "Southern banana-pineapple cake with pecans, cream cheese frosting, and edible flowers."
  },
  {
    "name": "Earl Grey Lavender",
    "price": 780,
    "cat": "cakes",
    "img": "https://simplybeyondherbs.com/wp-content/uploads/2023/07/profile-2-735x735.jpg",
    "desc": "Sophisticated tea-infused cake with lavender buttercream and crystallized flower petals."
  },
  {
    "name": "Chocolate Peanut Butter",
    "price": 700,
    "cat": "cakes",
    "img": "https://juliemarieeats.com/wp-content/uploads/2024/08/Peanut-Butter-Chocolate-Cake-4-1-scaled.jpg",
    "desc": "Rich chocolate layers with peanut butter mousse, topped with chocolate ganache and peanut butter cups."
  },
  {
    "name": "Italian Cream",
    "price": 720,
    "cat": "cakes",
    "img": "https://feastandfarm.com/wp-content/uploads/italiancreamcake2.jpg",
    "desc": "Buttery coconut-pecan cake with cream cheese frosting and toasted coconut decoration."
  },
  {
    "name": "Mango Passion",
    "price": 760,
    "cat": "cakes",
    "img": "https://i.ytimg.com/vi/vetFXMrSvvQ/sddefault.jpg",
    "desc": "Tropical sponge with mango mousse, passion fruit curd, and fresh exotic fruit topping."
  },
  {
    "name": "Chocolate Truffle",
    "price": 950,
    "cat": "cakes",
    "img": "https://scientificallysweet.com/wp-content/uploads/2024/08/IMG_4344-feature.jpg",
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
    "img": "https://www.cakeskart.com/web/image/product.template/160/image_1024?unique=29d9324",
    "desc": "Delicate almond sponge with wildflower honey buttercream and candied almond decoration."
  },
  {
    "name": "Biscoff Caramelized",
    "price": 720,
    "cat": "cakes",
    "img": "https://richanddelish.com/wp-content/uploads/2022/03/biscoff-drip-cake-669x1024.jpg",
    "desc": "Cookie butter lovers dream with speculoos sponge, Biscoff buttercream, and cookie crumb coating."
  },
  {
    "name": "Blackberry Violet",
    "price": 850,
    "cat": "cakes",
    "img": "https://easyfamilycakes.com/wp-content/uploads/2025/12/blackberry-velvet-gothic-cake-2025-12-23-225411.webp",
    "desc": "Elegant violet-scented cake with blackberry compote and Swiss meringue buttercream."
  },
  {
    "name": "Banoffee",
    "price": 580,
    "cat": "cakes",
    "img": "https://yeyfood.com/wp-content/uploads/2025/08/WEB1easybanoffeepie-720x720.jpg",
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
    "img": "https://mealswithgrandma.com/wp-content/uploads/2025/06/white-chocolate-raspberry-dream-cake-buttercream-hero.jpg",
    "desc": "Dark chocolate layers with raspberry ganache, topped with fresh raspberries and chocolate curls."
  },
  {
    "name": "Caramel Apple Spice",
    "price": 680,
    "cat": "cakes",
    "img": "https://thefirstyearblog.com/wp-content/uploads/2015/09/apple-spice-cake-1B.jpg",
    "desc": "Autumn-inspired apple cake with caramel filling, cinnamon buttercream, and apple chip garnish."
  },
  {
    "name": "Grand Marnier Orange",
    "price": 920,
    "cat": "cakes",
    "img": "https://adventureswithsugar.com/wp-content/uploads/2022/06/Orange-Cream-Chiffon-Cake-1-of-13-scaled-1.jpg",
    "desc": "Sophisticated orange cake soaked in Grand Marnier with orange curd and candied orange peel."
  }
];
