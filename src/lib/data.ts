interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  image: string;
  description: string;
}

interface Subcategory {
  name: string;
  products: Product[];
}

interface Category {
  name: string;
  subcategories: Record<string, Subcategory>;
}

export const categories: Record<string, Category> = {
  badminton: {
    name: "Badminton",
    subcategories: {
      shuttles: { name: "Shuttles", products: [
        { id: "shuttle-1", name: "Yonex Mavis 350 Nylon Shuttlecock", price: 599, brand: "Yonex", image: "/images/products/yonex-mavis-350.jpg", description: "High-quality nylon shuttlecock for recreational play." },
        { id: "shuttle-2", name: "Li-Ning A+300 Feather Shuttlecock", price: 1299, brand: "Li-Ning", image: "/images/products/li-ning-a300.jpg", description: "Premium feather shuttlecock for competitive play." },
        { id: "shuttle-3", name: "Victor Gold Champion Feather Shuttlecock", price: 1599, brand: "Victor", image: "/images/products/victor-gold.jpg", description: "Tournament-grade shuttlecock with high durability." },
        { id: "shuttle-4", name: "Carlton GT1 Feather Shuttlecock", price: 1999, brand: "Carlton", image: "/images/products/carlton-gt1.jpg", description: "Professional-grade shuttlecock with excellent flight stability." }
      ] },
      "badminton-grips": { name: "Badminton Grips", products: [
        { id: "grip-1", name: "Yonex AC102EX Super Grap", price: 299, brand: "Yonex", image: "/images/products/yonex-ac102.jpg", description: "Absorbent and durable overgrip for enhanced performance." },
        { id: "grip-2", name: "Li-Ning GP 20 Overgrip", price: 349, brand: "Li-Ning", image: "/images/products/li-ning-gp20.jpg", description: "Comfortable and sweat-absorbent badminton grip." },
        { id: "grip-3", name: "Victor Fishbone Grip", price: 399, brand: "Victor", image: "/images/products/victor-fishbone.jpg", description: "High-tackiness grip for superior control." },
        { id: "grip-4", name: "Wilson Pro Overgrip", price: 450, brand: "Wilson", image: "/images/products/wilson-pro.jpg", description: "Premium grip used by professionals worldwide." }
      ] },
      "badminton-bags-covers": { name: "Badminton Bags & Covers", products: [
        { id: "bag-1", name: "Yonex Pro Racquet Bag", price: 3499, brand: "Yonex", image: "/images/products/yonex-pro-bag.jpg", description: "Spacious racquet bag with thermal protection." },
        { id: "bag-2", name: "Li-Ning ABJS027 Backpack", price: 2999, brand: "Li-Ning", image: "/images/products/li-ning-backpack.jpg", description: "Stylish and durable badminton backpack." },
        { id: "bag-3", name: "Victor BR9608 Badminton Bag", price: 3799, brand: "Victor", image: "/images/products/victor-br9608.jpg", description: "Professional-grade bag with ample storage." },
        { id: "bag-4", name: "Carlton Tournament Bag", price: 2699, brand: "Carlton", image: "/images/products/carlton-bag.jpg", description: "Lightweight and practical tournament bag." }
      ] },
      "badminton-gutts": { name: "Badminton Gutts", products: [
        { id: "gutts-1", name: "Yonex BG65 Badminton String", price: 699, brand: "Yonex", image: "/images/products/yonex-bg65.jpg", description: "Durable and high-performance string for all players." },
        { id: "gutts-2", name: "Li-Ning No.1 Badminton String", price: 799, brand: "Li-Ning", image: "/images/products/li-ning-no1.jpg", description: "Thin gauge string for maximum repulsion power." },
        { id: "gutts-3", name: "Victor VS-850 Badminton String", price: 899, brand: "Victor", image: "/images/products/victor-vs850.jpg", description: "Premium string for professional-level control." },
        { id: "gutts-4", name: "Carlton Xelerate 67 Badminton String", price: 749, brand: "Carlton", image: "/images/products/carlton-x67.jpg", description: "Excellent durability with crisp hitting feel." }
      ] },
      "badminton-edge-tape": { name: "Badminton Edge Tape", products: [
        { id: "tape-1", name: "Yonex AC156 Edge Tape", price: 199, brand: "Yonex", image: "/images/products/yonex-ac156.jpg", description: "Protects racquet frame from scratches and damage." },
        { id: "tape-2", name: "Li-Ning Edge Guard Tape", price: 249, brand: "Li-Ning", image: "/images/products/li-ning-edge.jpg", description: "High-quality edge tape for long-lasting protection." },
        { id: "tape-3", name: "Victor VT-Edge Badminton Tape", price: 220, brand: "Victor", image: "/images/products/victor-edge.jpg", description: "Durable and easy-to-apply edge protection tape." },
        { id: "tape-4", name: "Wilson Pro Edge Tape", price: 275, brand: "Wilson", image: "/images/products/wilson-edge.jpg", description: "Professional-grade edge tape for serious players." }
      ] }
    },
  },



  "football": {
  "name": "Football",
  "subcategories": {
    "footballs": {
      "name": "Footballs",
      "products": [
        { "id": "football-1", "name": "Adidas FIFA World Cup Ball", "price": 5999, "brand": "Adidas", "image": "/images/products/adidas-world-cup-ball.jpg", "description": "Official match ball used in the FIFA World Cup." },
        { "id": "football-2", "name": "Nike Premier League Strike Football", "price": 4999, "brand": "Nike", "image": "/images/products/nike-premier-ball.jpg", "description": "High-quality football with enhanced durability." },
        { "id": "football-3", "name": "Puma La Liga 1 Match Ball", "price": 5499, "brand": "Puma", "image": "/images/products/puma-la-liga-ball.jpg", "description": "Premium football used in La Liga matches." },
        { "id": "football-4", "name": "Mitre Impel Training Football", "price": 1999, "brand": "Mitre", "image": "/images/products/mitre-training-ball.jpg", "description": "Durable training ball for practice sessions." }
      ]
    },
    "football-shoes": {
      "name": "Football Shoes",
      "products": [
        { "id": "shoes-1", "name": "Nike Mercurial Superfly 9", "price": 12999, "brand": "Nike", "image": "/images/products/nike-mercurial.jpg", "description": "Lightweight football shoes for speed and agility." },
        { "id": "shoes-2", "name": "Adidas Predator Edge", "price": 11999, "brand": "Adidas", "image": "/images/products/adidas-predator.jpg", "description": "Control-enhancing football shoes for precision play." },
        { "id": "shoes-3", "name": "Puma Future Z 1.3", "price": 10999, "brand": "Puma", "image": "/images/products/puma-future.jpg", "description": "Flexible and responsive shoes for quick movements." },
        { "id": "shoes-4", "name": "Under Armour Magnetico Select", "price": 8999, "brand": "Under Armour", "image": "/images/products/ua-magnetico.jpg", "description": "Comfortable football shoes with superior grip." }
      ]
    },
    "socks": {
      "name": "Socks",
      "products": [
        { "id": "socks-1", "name": "Nike Grip Crew Football Socks", "price": 999, "brand": "Nike", "image": "/images/products/nike-football-socks.jpg", "description": "Anti-slip socks for enhanced foot stability." },
        { "id": "socks-2", "name": "Adidas Alphaskin Football Socks", "price": 899, "brand": "Adidas", "image": "/images/products/adidas-football-socks.jpg", "description": "Compression socks for maximum comfort and support." },
        { "id": "socks-3", "name": "Puma Performance Football Socks", "price": 799, "brand": "Puma", "image": "/images/products/puma-football-socks.jpg", "description": "Breathable socks designed for long matches." },
        { "id": "socks-4", "name": "Under Armour HeatGear Socks", "price": 699, "brand": "Under Armour", "image": "/images/products/ua-football-socks.jpg", "description": "Moisture-wicking socks to keep feet dry and cool." }
      ]
    },
    "football-accessories": {
      "name": "Football Accessories",
      "products": [
        { "id": "accessory-1", "name": "Adidas Tiro Club Shin Guards", "price": 1299, "brand": "Adidas", "image": "/images/products/adidas-shin-guards.jpg", "description": "Lightweight shin guards for enhanced protection." },
        { "id": "accessory-2", "name": "Nike Football Pump", "price": 999, "brand": "Nike", "image": "/images/products/nike-football-pump.jpg", "description": "Compact and efficient pump for inflating footballs." },
        { "id": "accessory-3", "name": "Puma Training Bibs (Pack of 5)", "price": 1499, "brand": "Puma", "image": "/images/products/puma-training-bibs.jpg", "description": "Set of training bibs for practice sessions." },
        { "id": "accessory-4", "name": "Mitre Aircell Carbon Slip-in Shin Pads", "price": 1599, "brand": "Mitre", "image": "/images/products/mitre-shin-pads.jpg", "description": "Comfortable and impact-resistant shin pads." }
      ]
    }
  }
},

  "basketball": {
    "name": "Basketball",
    "subcategories": {
      "basketballs": {
        "name": "Basket Balls",
        "products": [
          { "id": "basketball-1", "name": "Spalding NBA Official Game Ball", "price": 5999, "brand": "Spalding", "image": "/images/products/spalding-nba-ball.jpg", "description": "Official NBA basketball with premium leather cover." },
          { "id": "basketball-2", "name": "Wilson Evolution Indoor Basketball", "price": 4999, "brand": "Wilson", "image": "/images/products/wilson-evolution.jpg", "description": "High-quality indoor basketball with soft grip." },
          { "id": "basketball-3", "name": "Molten GG7X Basketball", "price": 5499, "brand": "Molten", "image": "/images/products/molten-gg7x.jpg", "description": "FIBA-approved basketball with deep channels for control." },
          { "id": "basketball-4", "name": "Nike Elite Championship Basketball", "price": 5299, "brand": "Nike", "image": "/images/products/nike-elite-basketball.jpg", "description": "Durable and high-performance basketball for professionals." }
        ]
      },
      "basketball-ring": {
        "name": "Basket Ball Ring",
        "products": [
          { "id": "ring-1", "name": "Spalding Heavy-Duty Basketball Rim", "price": 3999, "brand": "Spalding", "image": "/images/products/spalding-rim.jpg", "description": "Durable steel rim with breakaway mechanism." },
          { "id": "ring-2", "name": "Lifetime Slam-It Pro Rim", "price": 4499, "brand": "Lifetime", "image": "/images/products/lifetime-rim.jpg", "description": "Professional-grade basketball rim with spring action." },
          { "id": "ring-3", "name": "Silverback Breakaway Basketball Rim", "price": 4799, "brand": "Silverback", "image": "/images/products/silverback-rim.jpg", "description": "Heavy-duty breakaway rim for aggressive play." },
          { "id": "ring-4", "name": "Goalrilla Basketball Hoop Rim", "price": 5299, "brand": "Goalrilla", "image": "/images/products/goalrilla-rim.jpg", "description": "Premium adjustable rim for competitive play." }
        ]
      },
      "basketball-net": {
        "name": "Basket Ball Net",
        "products": [
          { "id": "net-1", "name": "Heavy-Duty Nylon Basketball Net", "price": 999, "brand": "Spalding", "image": "/images/products/spalding-net.jpg", "description": "Durable all-weather net for outdoor and indoor use." },
          { "id": "net-2", "name": "Glow-in-the-Dark Basketball Net", "price": 1199, "brand": "GlowHoop", "image": "/images/products/glow-net.jpg", "description": "Luminous basketball net for nighttime play." },
          { "id": "net-3", "name": "Chain Link Basketball Net", "price": 1599, "brand": "Lifetime", "image": "/images/products/chain-net.jpg", "description": "Heavy-duty metal net for rugged outdoor courts." },
          { "id": "net-4", "name": "Double-Thick Professional Basketball Net", "price": 1299, "brand": "Wilson", "image": "/images/products/wilson-net.jpg", "description": "Reinforced basketball net for long-lasting use." }
        ]
      }
    }
  },
  "tennis": {
    "name": "Tennis",
    "subcategories": {
      "tennis-balls": {
        "name": "Tennis Balls",
        "products": [
          { "id": "tennis-ball-1", "name": "Wilson US Open Tennis Balls (Pack of 3)", "price": 999, "brand": "Wilson", "image": "/images/products/wilson-us-open.jpg", "description": "Official US Open tennis balls for tournament play." },
          { "id": "tennis-ball-2", "name": "Penn Championship Extra Duty Tennis Balls", "price": 899, "brand": "Penn", "image": "/images/products/penn-championship.jpg", "description": "Durable and consistent bounce for all surfaces." },
          { "id": "tennis-ball-3", "name": "Dunlop ATP Championship Tennis Balls", "price": 1199, "brand": "Dunlop", "image": "/images/products/dunlop-atp.jpg", "description": "High-performance tennis balls approved by ATP." },
          { "id": "tennis-ball-4", "name": "Babolat Gold All Court Tennis Balls", "price": 1099, "brand": "Babolat", "image": "/images/products/babolat-gold.jpg", "description": "Versatile tennis balls suitable for all court types." }
        ]
      },
      "tennis-grips": {
        "name": "Tennis Grips",
        "products": [
          { "id": "tennis-grip-1", "name": "Wilson Pro Overgrip (Pack of 3)", "price": 699, "brand": "Wilson", "image": "/images/products/wilson-overgrip.jpg", "description": "Comfortable and high-absorption overgrip." },
          { "id": "tennis-grip-2", "name": "Babolat VS Original Grip", "price": 899, "brand": "Babolat", "image": "/images/products/babolat-grip.jpg", "description": "Thin and tacky grip for ultimate feel." },
          { "id": "tennis-grip-3", "name": "Yonex Super Grap Overgrip", "price": 799, "brand": "Yonex", "image": "/images/products/yonex-grap.jpg", "description": "Durable and sweat-resistant overgrip." },
          { "id": "tennis-grip-4", "name": "Head Xtreme Soft Overgrip", "price": 749, "brand": "Head", "image": "/images/products/head-xtreme.jpg", "description": "Soft and moisture-wicking grip for better control." }
        ]
      },
      "dampner": {
        "name": "Dampner",
        "products": [
          { "id": "dampner-1", "name": "Wilson Shock Shield Vibration Dampener", "price": 499, "brand": "Wilson", "image": "/images/products/wilson-dampner.jpg", "description": "Reduces vibrations for improved comfort." },
          { "id": "dampner-2", "name": "Babolat Custom Damp Vibration Dampener", "price": 599, "brand": "Babolat", "image": "/images/products/babolat-dampner.jpg", "description": "Personalized vibration dampener for optimal feel." },
          { "id": "dampner-3", "name": "Head Smartsorb Dampener", "price": 499, "brand": "Head", "image": "/images/products/head-dampner.jpg", "description": "Absorbs shocks and enhances racquet control." },
          { "id": "dampner-4", "name": "Yonex Vibration Stopper Dampener", "price": 549, "brand": "Yonex", "image": "/images/products/yonex-dampner.jpg", "description": "Designed for reducing string vibrations." }
        ]
      }
    }
  },
  






  "squash": {
    "name": "Squash",
    "subcategories": {
      "squash-rackets": { 
        "name": "Squash Rackets", 
        "products": [
          { "id": "squash-racket-1", "name": "Dunlop Hyperfibre XT Squash Racket", "price": 8999, "brand": "Dunlop", "image": "/images/products/dunlop-hyperfibre-racket.jpg", "description": "Lightweight and powerful squash racket for professionals." },
          { "id": "squash-racket-2", "name": "Head Graphene 360 Speed Racket", "price": 10999, "brand": "Head", "image": "/images/products/head-graphene-racket.jpg", "description": "Graphene-enhanced racket for excellent control and speed." },
          { "id": "squash-racket-3", "name": "Tecnifibre Carboflex 125 X-Speed", "price": 11999, "brand": "Tecnifibre", "image": "/images/products/tecnifibre-carboflex.jpg", "description": "Professional-grade squash racket with a balanced frame." },
          { "id": "squash-racket-4", "name": "Wilson Ultra Countervail Squash Racket", "price": 9999, "brand": "Wilson", "image": "/images/products/wilson-ultra-countervail.jpg", "description": "Countervail technology for reduced vibrations and power shots." }
        ]
      },
      "squash-balls": { 
        "name": "Squash Balls", 
        "products": [
          { "id": "squash-ball-1", "name": "Dunlop Pro Double Yellow Dot Squash Ball", "price": 799, "brand": "Dunlop", "image": "/images/products/dunlop-pro-ball.jpg", "description": "Official tournament squash ball with double yellow dot." },
          { "id": "squash-ball-2", "name": "Head Prime Squash Ball", "price": 699, "brand": "Head", "image": "/images/products/head-prime-ball.jpg", "description": "Premium quality squash ball for fast-paced games." },
          { "id": "squash-ball-3", "name": "Tecnifibre Soft Squash Ball", "price": 599, "brand": "Tecnifibre", "image": "/images/products/tecnifibre-soft-ball.jpg", "description": "Soft touch ball for beginners and casual players." },
          { "id": "squash-ball-4", "name": "Wilson Pro Squash Ball", "price": 899, "brand": "Wilson", "image": "/images/products/wilson-pro-ball.jpg", "description": "Durable squash ball with consistent bounce and performance." }
        ]
      },
      "squash-grips": { 
        "name": "Squash Grips", 
        "products": [
          { "id": "squash-grip-1", "name": "Karakal PU Super Grip", "price": 499, "brand": "Karakal", "image": "/images/products/karakal-pu-grip.jpg", "description": "Super absorbent grip for comfortable and firm hold." },
          { "id": "squash-grip-2", "name": "Dunlop Viper Dry Grip", "price": 599, "brand": "Dunlop", "image": "/images/products/dunlop-viper-grip.jpg", "description": "Textured grip for improved sweat absorption and durability." },
          { "id": "squash-grip-3", "name": "Head Hydrosorb Comfort Grip", "price": 699, "brand": "Head", "image": "/images/products/head-hydrosorb-grip.jpg", "description": "Cushioned grip for enhanced comfort and control." },
          { "id": "squash-grip-4", "name": "Wilson Cushion Pro Grip", "price": 499, "brand": "Wilson", "image": "/images/products/wilson-cushion-grip.jpg", "description": "Soft feel grip with excellent tackiness and durability." }
        ]
      },
      "squash-gutts": { 
        "name": "Squash Gutts", 
        "products": [
          { "id": "squash-gutt-1", "name": "Tecnifibre 305 Squash String", "price": 1199, "brand": "Tecnifibre", "image": "/images/products/tecnifibre-305-string.jpg", "description": "High-performance squash string with excellent control." },
          { "id": "squash-gutt-2", "name": "Ashaway SuperNick XL Squash String", "price": 1099, "brand": "Ashaway", "image": "/images/products/ashaway-supernick.jpg", "description": "Textured string for extra grip and spin on the ball." },
          { "id": "squash-gutt-3", "name": "Dunlop Precision Squash String", "price": 999, "brand": "Dunlop", "image": "/images/products/dunlop-precision-string.jpg", "description": "Durable and high-control string for all playing levels." },
          { "id": "squash-gutt-4", "name": "Wilson NXT Power Squash String", "price": 1299, "brand": "Wilson", "image": "/images/products/wilson-nxt-string.jpg", "description": "Premium squash string for powerful and accurate shots." }
        ]
      },
      "dampner": { 
        "name": "Dampner", 
        "products": [
          { "id": "dampner-1", "name": "Head Smartsorb Vibration Dampener", "price": 499, "brand": "Head", "image": "/images/products/head-smartsorb.jpg", "description": "High-quality dampener to reduce racket vibrations." },
          { "id": "dampner-2", "name": "Wilson Shock Shield Dampener", "price": 399, "brand": "Wilson", "image": "/images/products/wilson-shock-shield.jpg", "description": "Reduces shock and improves comfort during play." },
          { "id": "dampner-3", "name": "Tecnifibre Vibra Clip Dampener", "price": 599, "brand": "Tecnifibre", "image": "/images/products/tecnifibre-vibra-clip.jpg", "description": "Lightweight vibration dampener for superior feel." },
          { "id": "dampner-4", "name": "Dunlop Sport Vibration Dampener", "price": 499, "brand": "Dunlop", "image": "/images/products/dunlop-vibration-dampener.jpg", "description": "Effective dampener to reduce racket string noise." }
        ]
      },
      "squash-accessories": { 
        "name": "Squash Accessories", 
        "products": [
          { "id": "squash-accessory-1", "name": "Dunlop Squash Kit Bag", "price": 3499, "brand": "Dunlop", "image": "/images/products/dunlop-kit-bag.jpg", "description": "Spacious squash bag to carry all essentials." },
          { "id": "squash-accessory-2", "name": "Head Protective Eyewear", "price": 2499, "brand": "Head", "image": "/images/products/head-protective-eyewear.jpg", "description": "Protective eyewear for safety during matches." },
          { "id": "squash-accessory-3", "name": "Wilson Wristbands & Headband Set", "price": 999, "brand": "Wilson", "image": "/images/products/wilson-wristbands.jpg", "description": "Sweat-absorbing wristbands and headband for comfort." },
          { "id": "squash-accessory-4", "name": "Tecnifibre Squash Ball Carry Case", "price": 799, "brand": "Tecnifibre", "image": "/images/products/tecnifibre-ball-case.jpg", "description": "Compact carry case for squash balls and accessories." }
        ]
      }
    }
  },
  
  snooker: {
    name: "Snooker",
    subcategories: {
      "snooker-tables": {
        "name": "Snooker Tables",
        "products": [
          { "id": "snooker-table-1", "name": "Riley Aristocrat Snooker Table", "price": 199999, "brand": "Riley", "image": "/images/products/riley-aristocrat.jpg", "description": "Professional-grade full-size snooker table." },
          { "id": "snooker-table-2", "name": "Strachan Supreme Snooker Table", "price": 149999, "brand": "Strachan", "image": "/images/products/strachan-supreme.jpg", "description": "Tournament standard snooker table with high-quality slate bed." },
          { "id": "snooker-table-3", "name": "Legends Club Snooker Table", "price": 99999, "brand": "Legends", "image": "/images/products/legends-club.jpg", "description": "High-durability snooker table for clubs and home use." },
          { "id": "snooker-table-4", "name": "Home Edition Snooker Table", "price": 59999, "brand": "HomeCue", "image": "/images/products/home-edition.jpg", "description": "Compact snooker table perfect for home entertainment." }
        ]
      },
      "snooker-sticks": {
        "name": "Snooker Sticks",
        "products": [
          { "id": "snooker-stick-1", "name": "Peradon 3/4 Snooker Cue", "price": 8999, "brand": "Peradon", "image": "/images/products/peradon-cue.jpg", "description": "Premium ash wood snooker cue for professionals." },
          { "id": "snooker-stick-2", "name": "John Parris Champion Cue", "price": 12999, "brand": "John Parris", "image": "/images/products/parris-champion.jpg", "description": "Handmade snooker cue used by world champions." },
          { "id": "snooker-stick-3", "name": "Cue Craft Triumph Snooker Stick", "price": 7499, "brand": "Cue Craft", "image": "/images/products/cuecraft-triumph.jpg", "description": "Mid-range cue for serious snooker players." },
          { "id": "snooker-stick-4", "name": "Riley Signature Snooker Cue", "price": 5999, "brand": "Riley", "image": "/images/products/riley-signature.jpg", "description": "Quality snooker cue designed for club-level play." }
        ]
      },
      "snooker-balls": {
        "name": "Snooker Balls",
        "products": [
          { "id": "snooker-balls-1", "name": "Aramith Tournament Snooker Balls", "price": 14999, "brand": "Aramith", "image": "/images/products/aramith-tournament.jpg", "description": "Professional-grade snooker balls with high durability." },
          { "id": "snooker-balls-2", "name": "Strachan Premium Snooker Ball Set", "price": 9999, "brand": "Strachan", "image": "/images/products/strachan-balls.jpg", "description": "High-quality snooker balls for competitive play." },
          { "id": "snooker-balls-3", "name": "Legend Standard Snooker Balls", "price": 6999, "brand": "Legend", "image": "/images/products/legend-standard.jpg", "description": "Club-quality snooker balls for smooth play." },
          { "id": "snooker-balls-4", "name": "Home Edition Snooker Balls", "price": 3999, "brand": "HomeCue", "image": "/images/products/home-balls.jpg", "description": "Affordable snooker balls set for casual play." }
        ]
      },
      "snooker-gloves": {
        "name": "Snooker Gloves",
        "products": [
          { "id": "snooker-gloves-1", "name": "Kamui Billiard Glove", "price": 1999, "brand": "Kamui", "image": "/images/products/kamui-glove.jpg", "description": "Premium snooker glove for enhanced cue control." },
          { "id": "snooker-gloves-2", "name": "Molinaro Snooker Glove", "price": 1599, "brand": "Molinaro", "image": "/images/products/molinaro-glove.jpg", "description": "Soft fabric glove designed for smooth cue action." },
          { "id": "snooker-gloves-3", "name": "Riley Precision Snooker Glove", "price": 1299, "brand": "Riley", "image": "/images/products/riley-glove.jpg", "description": "Breathable snooker glove for professional play." },
          { "id": "snooker-gloves-4", "name": "Longoni Professional Billiard Glove", "price": 1799, "brand": "Longoni", "image": "/images/products/longoni-glove.jpg", "description": "Ultra-smooth glove with anti-slip grip." }
        ]
      },
      "snooker-chalk": {
        "name": "Snooker Chalk",
        "products": [
          { "id": "snooker-chalk-1", "name": "Master Snooker Chalk (Box of 12)", "price": 499, "brand": "Master", "image": "/images/products/master-chalk.jpg", "description": "High-quality chalk for consistent cue grip." },
          { "id": "snooker-chalk-2", "name": "Taom Pyro Snooker Chalk", "price": 1999, "brand": "Taom", "image": "/images/products/taom-pyro.jpg", "description": "Premium snooker chalk for reduced miscues." },
          { "id": "snooker-chalk-3", "name": "Blue Diamond Chalk (2 Pieces)", "price": 999, "brand": "Blue Diamond", "image": "/images/products/blue-diamond.jpg", "description": "Smooth and durable snooker chalk." },
          { "id": "snooker-chalk-4", "name": "Triangle Snooker Chalk (Pack of 6)", "price": 799, "brand": "Triangle", "image": "/images/products/triangle-chalk.jpg", "description": "Reliable snooker chalk for amateur and pro players." }
        ]
      },
      "chalk-covers": {
        "name": "Chalk Covers",
        "products": [
          { "id": "chalk-cover-1", "name": "Kamui Magnetic Chalk Cover", "price": 1299, "brand": "Kamui", "image": "/images/products/kamui-chalk-cover.jpg", "description": "Magnetic chalk cover to prevent mess and waste." },
          { "id": "chalk-cover-2", "name": "Longoni Snooker Chalk Holder", "price": 999, "brand": "Longoni", "image": "/images/products/longoni-chalk-cover.jpg", "description": "Durable snooker chalk holder with sleek design." },
          { "id": "chalk-cover-3", "name": "Riley Chalk Case", "price": 799, "brand": "Riley", "image": "/images/products/riley-chalk-cover.jpg", "description": "Compact chalk case for safe storage." },
          { "id": "chalk-cover-4", "name": "Leather Chalk Holder", "price": 599, "brand": "Generic", "image": "/images/products/leather-chalk-cover.jpg", "description": "Elegant leather chalk holder for snooker lovers." }
        ]
      },
      "snooker-cue-tips": {
        "name": "Snooker Cue Tips",
        "products": [
          { "id": "cue-tip-1", "name": "Elk Master Cue Tips (Pack of 3)", "price": 499, "brand": "Elk Master", "image": "/images/products/elk-master-cue-tip.jpg", "description": "High-quality leather cue tips for enhanced grip." },
          { "id": "cue-tip-2", "name": "Kamui Black Cue Tip", "price": 1299, "brand": "Kamui", "image": "/images/products/kamui-black-tip.jpg", "description": "Professional-grade cue tip for precision shots." },
          { "id": "cue-tip-3", "name": "Triangle Pro Cue Tips (Pack of 5)", "price": 899, "brand": "Triangle", "image": "/images/products/triangle-cue-tip.jpg", "description": "Durable and consistent cue tips for smooth play." },
          { "id": "cue-tip-4", "name": "Blue Diamond Cue Tips", "price": 999, "brand": "Blue Diamond", "image": "/images/products/blue-diamond-tip.jpg", "description": "Premium cue tips for better ball control." }
        ]
      },
      "snooker-table-cover": {
        "name": "Snooker Table Cover",
        "products": [
          { "id": "table-cover-1", "name": "Heavy-Duty Waterproof Snooker Table Cover", "price": 2999, "brand": "Legends", "image": "/images/products/heavy-duty-cover.jpg", "description": "Protects your snooker table from dust and moisture." },
          { "id": "table-cover-2", "name": "PVC Snooker Table Cover", "price": 1999, "brand": "HomeCue", "image": "/images/products/pvc-table-cover.jpg", "description": "Durable and lightweight snooker table cover." },
          { "id": "table-cover-3", "name": "Strachan Professional Table Cover", "price": 3999, "brand": "Strachan", "image": "/images/products/strachan-cover.jpg", "description": "High-quality cover for professional snooker tables." },
          { "id": "table-cover-4", "name": "Custom-Fit Snooker Table Cover", "price": 3499, "brand": "CustomGear", "image": "/images/products/custom-fit-cover.jpg", "description": "Tailored fit snooker table cover for full protection." }
        ]
      },
      "light-hood": {
        "name": "Light Hood",
        "products": [
          { "id": "light-hood-1", "name": "Professional Snooker Table Light Hood", "price": 14999, "brand": "Legends", "image": "/images/products/pro-light-hood.jpg", "description": "Bright and evenly distributed lighting for snooker tables." },
          { "id": "light-hood-2", "name": "LED Snooker Table Lighting System", "price": 18999, "brand": "Strachan", "image": "/images/products/led-light-hood.jpg", "description": "Energy-efficient LED lighting for professional tables." },
          { "id": "light-hood-3", "name": "Riley Adjustable Light Hood", "price": 12999, "brand": "Riley", "image": "/images/products/riley-light-hood.jpg", "description": "Adjustable lighting hood for better visibility." },
          { "id": "light-hood-4", "name": "Classic Wooden Snooker Light Hood", "price": 15999, "brand": "ClassicCue", "image": "/images/products/wooden-light-hood.jpg", "description": "Traditional wooden snooker table light hood for a premium look." }
        ]
      },
      
    },
  },







  "indoor-games": {
    "name": "Indoor Games",
    "subcategories": {
      "table-tennis": {
        "name": "Table Tennis",
        "products": [
          { "id": "tt-bat-1", "name": "Stiga Pro Carbon Table Tennis Bat", "price": 4999, "brand": "Stiga", "image": "/images/products/stiga-pro-carbon.jpg", "description": "High-quality carbon fiber bat for professional players." },
          { "id": "tt-bat-2", "name": "Butterfly Timo Boll Table Tennis Paddle", "price": 3999, "brand": "Butterfly", "image": "/images/products/butterfly-timo-boll.jpg", "description": "Timo Boll edition paddle for advanced players." },
          { "id": "tt-ball-1", "name": "DHS 3-Star Table Tennis Balls (Pack of 6)", "price": 699, "brand": "DHS", "image": "/images/products/dhs-3star-balls.jpg", "description": "Tournament-grade table tennis balls with excellent bounce." },
          { "id": "tt-table-1", "name": "Joola Inside Table Tennis Table", "price": 24999, "brand": "Joola", "image": "/images/products/joola-table.jpg", "description": "Indoor table tennis table with professional build quality." }
        ]
      },
      "carrom": {
        "name": "Carrom",
        "products": [
          { "id": "carrom-board-1", "name": "Surco Tournament Carrom Board", "price": 5999, "brand": "Surco", "image": "/images/products/surco-carrom-board.jpg", "description": "Official-size wooden carrom board with smooth playing surface." },
          { "id": "carrom-coins-1", "name": "Synco Carrom Coins Set", "price": 799, "brand": "Synco", "image": "/images/products/synco-carrom-coins.jpg", "description": "Premium quality carrom coins for professional play." },
          { "id": "carrom-striker-1", "name": "Korners Champion Carrom Striker", "price": 499, "brand": "Korners", "image": "/images/products/korners-striker.jpg", "description": "Smooth and durable striker for accurate shots." },
          { "id": "carrom-powder-1", "name": "Jaspo Carrom Powder", "price": 299, "brand": "Jaspo", "image": "/images/products/jaspo-carrom-powder.jpg", "description": "Reduces friction for smooth carrom gameplay." }
        ]
      },
      "foosball": {
        "name": "Foosball",
        "products": [
          { "id": "foosball-table-1", "name": "Garlando G-500 Foosball Table", "price": 39999, "brand": "Garlando", "image": "/images/products/garlando-foosball.jpg", "description": "Premium foosball table with durable rods and smooth playfield." },
          { "id": "foosball-set-1", "name": "Warrior Pro Foosball Set", "price": 24999, "brand": "Warrior", "image": "/images/products/warrior-foosball.jpg", "description": "Tournament-grade foosball table for competitive play." },
          { "id": "foosball-players-1", "name": "Tornado Foosball Replacement Players", "price": 1999, "brand": "Tornado", "image": "/images/products/tornado-players.jpg", "description": "High-quality foosball players for table customization." },
          { "id": "foosball-balls-1", "name": "Kick Foosball Balls (Pack of 4)", "price": 599, "brand": "Kick", "image": "/images/products/kick-foosball-balls.jpg", "description": "Official-size foosball balls for smooth gameplay." }
        ]
      },
      "boxing": {
        "name": "Boxing",
        "products": [
          { "id": "boxing-gloves-1", "name": "Everlast Pro Style Boxing Gloves", "price": 4999, "brand": "Everlast", "image": "/images/products/everlast-gloves.jpg", "description": "Durable and comfortable boxing gloves for training." },
          { "id": "boxing-bag-1", "name": "RDX Heavy Punching Bag", "price": 9999, "brand": "RDX", "image": "/images/products/rdx-punching-bag.jpg", "description": "High-quality punching bag for boxing practice." },
          { "id": "boxing-headgear-1", "name": "Venum Challenger 2.0 Headgear", "price": 5999, "brand": "Venum", "image": "/images/products/venum-headgear.jpg", "description": "Protective headgear for safe boxing training." },
          { "id": "boxing-wraps-1", "name": "Fairtex Hand Wraps", "price": 899, "brand": "Fairtex", "image": "/images/products/fairtex-wraps.jpg", "description": "Elastic hand wraps for wrist protection." }
        ]
      },
      "card-games": {
        "name": "Card Games",
        "products": [
          { "id": "poker-set-1", "name": "Casino Grade Poker Set", "price": 2999, "brand": "CasinoPro", "image": "/images/products/casino-poker-set.jpg", "description": "Professional poker set with chips and cards." },
          { "id": "uno-cards-1", "name": "Uno Classic Card Game", "price": 599, "brand": "Uno", "image": "/images/products/uno-cards.jpg", "description": "Classic Uno game for family and friends." },
          { "id": "playing-cards-1", "name": "Bicycle Standard Playing Cards", "price": 499, "brand": "Bicycle", "image": "/images/products/bicycle-cards.jpg", "description": "Premium playing cards for all card games." },
          { "id": "rummy-set-1", "name": "Deluxe Rummy Card Game Set", "price": 1599, "brand": "RummyPro", "image": "/images/products/rummy-set.jpg", "description": "Complete Rummy set for competitive play." }
        ]
      },
      "board-games": {
        "name": "Board Games",
        "products": [
          { "id": "chess-set-1", "name": "Wooden Chess Set", "price": 1999, "brand": "ClassicChess", "image": "/images/products/wooden-chess.jpg", "description": "Handcrafted wooden chess set with premium pieces." },
          { "id": "monopoly-game-1", "name": "Monopoly Classic Board Game", "price": 1999, "brand": "Hasbro", "image": "/images/products/monopoly.jpg", "description": "The classic game of real estate trading and strategy." },
          { "id": "scrabble-game-1", "name": "Scrabble Deluxe Edition", "price": 2499, "brand": "Mattel", "image": "/images/products/scrabble.jpg", "description": "Premium Scrabble board game for word lovers." },
          { "id": "ludo-game-1", "name": "Ludo King Board Game", "price": 999, "brand": "LudoKing", "image": "/images/products/ludo-king.jpg", "description": "Family-friendly Ludo board game." }
        ]
      },
      "dart-board": {
        "name": "Dart Board",
        "products": [
          { "id": "dartboard-1", "name": "Winmau Blade 5 Dartboard", "price": 4999, "brand": "Winmau", "image": "/images/products/winmau-blade5.jpg", "description": "Professional dartboard for tournament play." },
          { "id": "dart-set-1", "name": "Target Darts Professional Set", "price": 1999, "brand": "Target", "image": "/images/products/target-darts.jpg", "description": "Complete darts set for precision and accuracy." },
          { "id": "dart-cabinet-1", "name": "Viper Shot King Dartboard Cabinet", "price": 9999, "brand": "Viper", "image": "/images/products/viper-dart-cabinet.jpg", "description": "Wall-mounted dartboard with stylish cabinet." },
          { "id": "soft-tip-darts-1", "name": "Harrows Soft Tip Darts", "price": 1499, "brand": "Harrows", "image": "/images/products/harrows-soft-tip.jpg", "description": "Soft tip darts for electronic dartboards." }
        ]
      }
    }
  },
  






  
  "fitness-gym": {
    name: "Fitness & Gym",
    subcategories: {
      "yoga-mats": { 
        "name": "Yoga Mats", 
        "products": [
          { "id": "yoga-mat-1", "name": "Eco-Friendly Yoga Mat", "price": 1499, "brand": "Nike", "image": "/images/products/eco-yoga-mat.jpg", "description": "High-quality, eco-friendly yoga mat with extra grip." },
          { "id": "yoga-mat-2", "name": "Non-Slip Yoga Mat", "price": 1299, "brand": "Adidas", "image": "/images/products/non-slip-yoga-mat.jpg", "description": "Non-slip surface for better stability during workouts." },
          { "id": "yoga-mat-3", "name": "Extra Thick Yoga Mat", "price": 1799, "brand": "Reebok", "image": "/images/products/thick-yoga-mat.jpg", "description": "Extra thick cushioning for comfort and support." },
          { "id": "yoga-mat-4", "name": "Foldable Travel Yoga Mat", "price": 999, "brand": "Puma", "image": "/images/products/foldable-yoga-mat.jpg", "description": "Lightweight and foldable design for easy portability." }
        ]
      },
      "gym-bags": { 
        "name": "Gym Bags", 
        "products": [
          { "id": "gym-bag-1", "name": "Waterproof Gym Bag", "price": 2499, "brand": "Nike", "image": "/images/products/waterproof-gym-bag.jpg", "description": "Spacious, waterproof gym bag with multiple compartments." },
          { "id": "gym-bag-2", "name": "Duffel Gym Bag", "price": 2199, "brand": "Adidas", "image": "/images/products/duffel-gym-bag.jpg", "description": "Durable and stylish duffel bag for gym essentials." },
          { "id": "gym-bag-3", "name": "Compact Gym Backpack", "price": 1999, "brand": "Reebok", "image": "/images/products/compact-gym-backpack.jpg", "description": "Compact and lightweight gym backpack with ventilated storage." },
          { "id": "gym-bag-4", "name": "Multi-Compartment Gym Bag", "price": 2799, "brand": "Puma", "image": "/images/products/multi-compartment-gym-bag.jpg", "description": "Spacious bag with dedicated compartments for gear and accessories." }
        ]
      },
      "dumbbells": { 
        "name": "Dumbbells", 
        "products": [
          { "id": "dumbbell-1", "name": "Adjustable Dumbbells", "price": 3499, "brand": "Bowflex", "image": "/images/products/adjustable-dumbbell.jpg", "description": "Adjustable weight dumbbells for versatile workouts." },
          { "id": "dumbbell-2", "name": "Hex Rubber Dumbbells", "price": 1999, "brand": "Rogue", "image": "/images/products/hex-rubber-dumbbell.jpg", "description": "Durable hex rubber dumbbells with ergonomic grip." },
          { "id": "dumbbell-3", "name": "Vinyl Coated Dumbbells", "price": 1599, "brand": "Amazon Basics", "image": "/images/products/vinyl-coated-dumbbell.jpg", "description": "Vinyl-coated dumbbells for a comfortable, non-slip grip." },
          { "id": "dumbbell-4", "name": "Cast Iron Dumbbells", "price": 2899, "brand": "CAP Barbell", "image": "/images/products/cast-iron-dumbbell.jpg", "description": "Classic cast iron dumbbells for strength training." }
        ]
      },
      "exercise-benches": { 
        "name": "Exercise Benches", 
        "products": [
          { "id": "bench-1", "name": "Adjustable Weight Bench", "price": 4999, "brand": "Bowflex", "image": "/images/products/adjustable-weight-bench.jpg", "description": "Multi-angle adjustable weight bench for strength training." },
          { "id": "bench-2", "name": "Flat Bench", "price": 3999, "brand": "Rogue", "image": "/images/products/flat-bench.jpg", "description": "Stable and durable flat bench for heavy lifting." },
          { "id": "bench-3", "name": "Incline Bench", "price": 4599, "brand": "Reebok", "image": "/images/products/incline-bench.jpg", "description": "Incline bench for targeted upper body workouts." },
          { "id": "bench-4", "name": "Foldable Workout Bench", "price": 5499, "brand": "Adidas", "image": "/images/products/foldable-workout-bench.jpg", "description": "Foldable design for easy storage and transport." }
        ]
      },
      "gym-bottles": { 
        "name": "Gym Bottles", 
        "products": [
          { "id": "bottle-1", "name": "BPA-Free Gym Bottle", "price": 699, "brand": "Nike", "image": "/images/products/bpa-free-gym-bottle.jpg", "description": "Eco-friendly BPA-free water bottle with leak-proof cap." },
          { "id": "bottle-2", "name": "Insulated Gym Bottle", "price": 1199, "brand": "Hydro Flask", "image": "/images/products/insulated-gym-bottle.jpg", "description": "Double-wall insulated bottle keeps water cold for 24 hours." },
          { "id": "bottle-3", "name": "Squeeze Gym Bottle", "price": 499, "brand": "Adidas", "image": "/images/products/squeeze-gym-bottle.jpg", "description": "Ergonomic squeeze bottle for easy hydration during workouts." },
          { "id": "bottle-4", "name": "Flip-Top Sports Bottle", "price": 799, "brand": "Puma", "image": "/images/products/flip-top-sports-bottle.jpg", "description": "Leak-proof flip-top bottle with easy carrying handle." }
        ]
      },
      "shakers": { 
        "name": "Shakers", 
        "products": [
          { "id": "shaker-1", "name": "Blender Bottle", "price": 899, "brand": "BlenderBottle", "image": "/images/products/blender-bottle.jpg", "description": "High-quality shaker with stainless steel whisk ball." },
          { "id": "shaker-2", "name": "Double-Walled Protein Shaker", "price": 1299, "brand": "Hydro Flask", "image": "/images/products/double-wall-shaker.jpg", "description": "Insulated shaker keeps drinks cold for longer." },
          { "id": "shaker-3", "name": "Leak-Proof Gym Shaker", "price": 999, "brand": "Adidas", "image": "/images/products/leak-proof-shaker.jpg", "description": "Durable, leak-proof design with secure screw-on lid." },
          { "id": "shaker-4", "name": "Compartment Shaker Bottle", "price": 1499, "brand": "SmartShake", "image": "/images/products/compartment-shaker.jpg", "description": "Shaker with built-in storage for supplements and powders." }
        ]
      },
      "steel-bottles": { 
        "name": "Steel Bottles", 
        "products": [
          { "id": "steel-bottle-1", "name": "Stainless Steel Gym Bottle", "price": 1399, "brand": "Nike", "image": "/images/products/stainless-steel-gym-bottle.jpg", "description": "Premium stainless steel bottle with durable design." },
          { "id": "steel-bottle-2", "name": "Vacuum Insulated Bottle", "price": 1899, "brand": "Hydro Flask", "image": "/images/products/vacuum-insulated-bottle.jpg", "description": "Keeps beverages hot or cold for hours." },
          { "id": "steel-bottle-3", "name": "Ergonomic Steel Water Bottle", "price": 1599, "brand": "Reebok", "image": "/images/products/ergonomic-steel-bottle.jpg", "description": "Lightweight and durable with a sleek ergonomic design." },
          { "id": "steel-bottle-4", "name": "Wide Mouth Sports Bottle", "price": 1799, "brand": "Puma", "image": "/images/products/wide-mouth-steel-bottle.jpg", "description": "Wide mouth opening for easy refilling and cleaning." }
        ]
      },
      "ab-wheels": { 
        "name": "AB Wheels", 
        "products": [
          { "id": "ab-wheel-1", "name": "Dual-Wheel AB Roller", "price": 999, "brand": "Nike", "image": "/images/products/dual-wheel-ab-roller.jpg", "description": "Dual-wheel design for added stability during ab workouts." },
          { "id": "ab-wheel-2", "name": "Adjustable Resistance AB Wheel", "price": 1499, "brand": "Adidas", "image": "/images/products/adjustable-resistance-ab-wheel.jpg", "description": "Adjustable resistance for different difficulty levels." },
          { "id": "ab-wheel-3", "name": "Foam-Grip AB Roller", "price": 899, "brand": "Reebok", "image": "/images/products/foam-grip-ab-roller.jpg", "description": "Soft foam grips for better comfort and control." },
          { "id": "ab-wheel-4", "name": "Compact AB Roller", "price": 1199, "brand": "Puma", "image": "/images/products/compact-ab-roller.jpg", "description": "Compact and lightweight design for easy portability." }
        ]
      },
      "body-support": { 
        "name": "Body Support", 
        "products": [
          { "id": "body-support-1", "name": "Knee Support Brace", "price": 1299, "brand": "Nike", "image": "/images/products/knee-support-brace.jpg", "description": "Provides excellent knee support during workouts." },
          { "id": "body-support-2", "name": "Elbow Compression Sleeve", "price": 999, "brand": "Adidas", "image": "/images/products/elbow-compression-sleeve.jpg", "description": "Compression sleeve for better joint stability." },
          { "id": "body-support-3", "name": "Back Support Belt", "price": 1999, "brand": "Reebok", "image": "/images/products/back-support-belt.jpg", "description": "Ergonomic design for lumbar support and comfort." },
          { "id": "body-support-4", "name": "Wrist Wraps", "price": 799, "brand": "Puma", "image": "/images/products/wrist-wraps.jpg", "description": "Adjustable wrist wraps for better grip and wrist stability." }
        ]
      },
      
      "gloves-and-grips": { 
        "name": "Gloves and Grips", 
        "products": [
          { "id": "glove-1", "name": "Weight Lifting Gloves", "price": 1299, "brand": "Nike", "image": "/images/products/weight-lifting-gloves.jpg", "description": "Durable weight lifting gloves with wrist support." },
          { "id": "glove-2", "name": "Full Finger Gym Gloves", "price": 1499, "brand": "Adidas", "image": "/images/products/full-finger-gym-gloves.jpg", "description": "Breathable full-finger gloves for enhanced grip." },
          { "id": "glove-3", "name": "Anti-Slip Grip Gloves", "price": 999, "brand": "Reebok", "image": "/images/products/anti-slip-grip-gloves.jpg", "description": "Anti-slip grip gloves for better control during workouts." },
          { "id": "glove-4", "name": "Crossfit Training Gloves", "price": 1799, "brand": "Puma", "image": "/images/products/crossfit-training-gloves.jpg", "description": "High-performance gloves for CrossFit and weightlifting." }
        ]
      },
      "hand-grips": { 
        "name": "Hand Grips", 
        "products": [
          { "id": "hand-grip-1", "name": "Adjustable Hand Grip", "price": 799, "brand": "Nike", "image": "/images/products/adjustable-hand-grip.jpg", "description": "Adjustable resistance hand grip for strength training." },
          { "id": "hand-grip-2", "name": "Foam Handle Hand Gripper", "price": 599, "brand": "Adidas", "image": "/images/products/foam-handle-hand-gripper.jpg", "description": "Comfortable foam grip for easy hand exercises." },
          { "id": "hand-grip-3", "name": "Heavy Resistance Grip", "price": 999, "brand": "Reebok", "image": "/images/products/heavy-resistance-grip.jpg", "description": "Heavy resistance hand gripper for advanced users." },
          { "id": "hand-grip-4", "name": "Metal Spring Hand Gripper", "price": 699, "brand": "Puma", "image": "/images/products/metal-spring-hand-gripper.jpg", "description": "Durable metal spring design for effective hand workouts." }
        ]
      },
      "resistance-band": { 
        "name": "Resistance Band", 
        "products": [
          { "id": "band-1", "name": "Loop Resistance Band", "price": 1299, "brand": "Nike", "image": "/images/products/loop-resistance-band.jpg", "description": "High-quality loop bands for strength training." },
          { "id": "band-2", "name": "Heavy Duty Resistance Band", "price": 1599, "brand": "Adidas", "image": "/images/products/heavy-duty-resistance-band.jpg", "description": "Strong resistance band for muscle toning." },
          { "id": "band-3", "name": "Fabric Resistance Band", "price": 1399, "brand": "Reebok", "image": "/images/products/fabric-resistance-band.jpg", "description": "Soft fabric bands for comfortable resistance workouts." },
          { "id": "band-4", "name": "Pull-Up Assist Band", "price": 1799, "brand": "Puma", "image": "/images/products/pull-up-assist-band.jpg", "description": "Perfect for pull-up assistance and mobility exercises." }
        ]
      },
      "slimming-belt": { 
        "name": "Slimming Belt", 
        "products": [
          { "id": "belt-1", "name": "Waist Trimmer Belt", "price": 1999, "brand": "Nike", "image": "/images/products/waist-trimmer-belt.jpg", "description": "Sweat-enhancing waist trimmer for better results." },
          { "id": "belt-2", "name": "Neoprene Slimming Belt", "price": 1699, "brand": "Adidas", "image": "/images/products/neoprene-slimming-belt.jpg", "description": "Comfortable neoprene belt for better weight loss." },
          { "id": "belt-3", "name": "Adjustable Slim Belt", "price": 1499, "brand": "Reebok", "image": "/images/products/adjustable-slim-belt.jpg", "description": "Custom-fit belt with secure velcro closure." },
          { "id": "belt-4", "name": "Compression Slimming Belt", "price": 1799, "brand": "Puma", "image": "/images/products/compression-slimming-belt.jpg", "description": "Firm compression belt for maximum support." }
        ]
      },
      "socks": { 
        "name": "Socks", 
        "products": [
          { "id": "sock-1", "name": "Ankle Sports Socks", "price": 499, "brand": "Nike", "image": "/images/products/ankle-sports-socks.jpg", "description": "Breathable ankle socks for gym workouts." },
          { "id": "sock-2", "name": "Compression Gym Socks", "price": 799, "brand": "Adidas", "image": "/images/products/compression-gym-socks.jpg", "description": "Compression socks for improved blood circulation." },
          { "id": "sock-3", "name": "Grip Training Socks", "price": 699, "brand": "Reebok", "image": "/images/products/grip-training-socks.jpg", "description": "Non-slip grip socks for yoga and gym exercises." },
          { "id": "sock-4", "name": "Cushioned Sports Socks", "price": 899, "brand": "Puma", "image": "/images/products/cushioned-sports-socks.jpg", "description": "Extra cushioned socks for better comfort and durability." }
        ]
      },
      "gym-west": { 
        "name": "Gym West", 
        "products": [
          { "id": "west-1", "name": "Sleeveless Gym Vest", "price": 1299, "brand": "Nike", "image": "/images/products/sleeveless-gym-vest.jpg", "description": "Lightweight and breathable gym vest." },
          { "id": "west-2", "name": "Compression Gym Vest", "price": 1599, "brand": "Adidas", "image": "/images/products/compression-gym-vest.jpg", "description": "Compression fit vest for better muscle support." },
          { "id": "west-3", "name": "Dri-Fit Gym Vest", "price": 1399, "brand": "Reebok", "image": "/images/products/dri-fit-gym-vest.jpg", "description": "Sweat-wicking fabric for a dry and comfortable workout." },
          { "id": "west-4", "name": "Loose Fit Gym Vest", "price": 1199, "brand": "Puma", "image": "/images/products/loose-fit-gym-vest.jpg", "description": "Loose fit for maximum airflow and comfort." }
        ]
      },
      "yoga-brick": { 
        "name": "Yoga Brick", 
        "products": [
          { "id": "brick-1", "name": "Foam Yoga Brick", "price": 899, "brand": "Nike", "image": "/images/products/foam-yoga-brick.jpg", "description": "Soft and durable foam yoga brick for better balance." }
        ]
      },
      "foam-roller": { 
        "name": "Foam Roller", 
        "products": [
          { "id": "roller-1", "name": "Textured Foam Roller", "price": 1999, "brand": "Nike", "image": "/images/products/textured-foam-roller.jpg", "description": "Deep tissue massage roller for muscle recovery." }
        ]
      },
      
      "aerobic-stepper": { 
        "name": "Aerobic Stepper", 
        "products": [
          { "id": "stepper-1", "name": "Adjustable Aerobic Stepper", "price": 2499, "brand": "Nike", "image": "/images/products/adjustable-aerobic-stepper.jpg", "description": "Height adjustable aerobic stepper for effective workouts." },
          { "id": "stepper-2", "name": "Non-Slip Aerobic Step", "price": 2699, "brand": "Adidas", "image": "/images/products/non-slip-aerobic-step.jpg", "description": "Non-slip surface for safe and stable stepping exercises." },
          { "id": "stepper-3", "name": "Compact Workout Stepper", "price": 2299, "brand": "Reebok", "image": "/images/products/compact-workout-stepper.jpg", "description": "Compact and lightweight stepper for home workouts." },
          { "id": "stepper-4", "name": "Gym-Grade Aerobic Step", "price": 2999, "brand": "Puma", "image": "/images/products/gym-grade-aerobic-step.jpg", "description": "Professional gym-grade stepper for advanced training." }
        ]
      },
      "ankle-weights": { 
        "name": "Ankle Weights", 
        "products": [
          { "id": "ankle-weight-1", "name": "Adjustable Ankle Weights", "price": 1799, "brand": "Nike", "image": "/images/products/adjustable-ankle-weights.jpg", "description": "Adjustable weight ankle straps for resistance training." },
          { "id": "ankle-weight-2", "name": "Soft Neoprene Ankle Weights", "price": 1999, "brand": "Adidas", "image": "/images/products/neoprene-ankle-weights.jpg", "description": "Soft and comfortable ankle weights for workouts." },
          { "id": "ankle-weight-3", "name": "Weighted Ankle Straps", "price": 1599, "brand": "Reebok", "image": "/images/products/weighted-ankle-straps.jpg", "description": "Weighted straps for strength and endurance training." },
          { "id": "ankle-weight-4", "name": "Heavy Duty Ankle Weights", "price": 2199, "brand": "Puma", "image": "/images/products/heavy-duty-ankle-weights.jpg", "description": "Durable heavy-duty ankle weights for intense workouts." }
        ]
      },
      "loop-band": { 
        "name": "Loop Band", 
        "products": [
          { "id": "loop-band-1", "name": "Mini Loop Resistance Bands", "price": 999, "brand": "Nike", "image": "/images/products/mini-loop-resistance-bands.jpg", "description": "Set of 5 loop bands with different resistance levels." },
          { "id": "loop-band-2", "name": "Heavy Resistance Loop Band", "price": 1299, "brand": "Adidas", "image": "/images/products/heavy-resistance-loop-band.jpg", "description": "Heavy resistance loop band for muscle strengthening." },
          { "id": "loop-band-3", "name": "Fabric Loop Band", "price": 1499, "brand": "Reebok", "image": "/images/products/fabric-loop-band.jpg", "description": "Durable fabric band for comfortable resistance workouts." },
          { "id": "loop-band-4", "name": "Latex-Free Loop Band", "price": 1199, "brand": "Puma", "image": "/images/products/latex-free-loop-band.jpg", "description": "Latex-free material for allergy-safe training." }
        ]
      },
      "thera-band": { 
        "name": "Thera Band", 
        "products": [
          { "id": "thera-band-1", "name": "Light Thera Band", "price": 1399, "brand": "Nike", "image": "/images/products/light-thera-band.jpg", "description": "Light resistance thera band for rehabilitation exercises." },
          { "id": "thera-band-2", "name": "Medium Thera Band", "price": 1599, "brand": "Adidas", "image": "/images/products/medium-thera-band.jpg", "description": "Medium resistance band for strength training." },
          { "id": "thera-band-3", "name": "Heavy Thera Band", "price": 1799, "brand": "Reebok", "image": "/images/products/heavy-thera-band.jpg", "description": "Heavy resistance thera band for advanced workouts." },
          { "id": "thera-band-4", "name": "Extra-Heavy Thera Band", "price": 1999, "brand": "Puma", "image": "/images/products/extra-heavy-thera-band.jpg", "description": "Extra-heavy resistance for professional training." }
        ]
      },
      "chin-up-bar": { 
        "name": "Chin Up Bar", 
        "products": [
          { "id": "chin-up-bar-1", "name": "Wall Mounted Chin Up Bar", "price": 3499, "brand": "Nike", "image": "/images/products/wall-mounted-chin-up-bar.jpg", "description": "Heavy-duty wall-mounted bar for upper body workouts." },
          { "id": "chin-up-bar-2", "name": "Doorway Chin Up Bar", "price": 2799, "brand": "Adidas", "image": "/images/products/doorway-chin-up-bar.jpg", "description": "Portable doorway bar for home workouts." },
          { "id": "chin-up-bar-3", "name": "Multi-Grip Chin Up Bar", "price": 3999, "brand": "Reebok", "image": "/images/products/multi-grip-chin-up-bar.jpg", "description": "Multi-grip design for varied workout options." },
          { "id": "chin-up-bar-4", "name": "Ceiling Mounted Chin Up Bar", "price": 4999, "brand": "Puma", "image": "/images/products/ceiling-mounted-chin-up-bar.jpg", "description": "Professional ceiling-mounted chin-up bar for intense training." }
        ]
      },
      
    },
  },












  swimming: {
    name: "Swimming",
    subcategories: {
      "swimming-goggles": { 
        "name": "Swimming Goggles", 
        "products": [
          { "id": "goggles-1", "name": "Speedo Anti-Fog Swimming Goggles", "price": 1499, "brand": "Speedo", "image": "/images/products/speedo-anti-fog-goggles.jpg", "description": "High-quality anti-fog goggles for clear underwater vision." },
          { "id": "goggles-2", "name": "Arena Professional Swim Goggles", "price": 1799, "brand": "Arena", "image": "/images/products/arena-professional-goggles.jpg", "description": "Professional-grade swim goggles with UV protection." },
          { "id": "goggles-3", "name": "Nike Adjustable Strap Goggles", "price": 1299, "brand": "Nike", "image": "/images/products/nike-adjustable-goggles.jpg", "description": "Comfortable goggles with an adjustable strap for a secure fit." },
          { "id": "goggles-4", "name": "TYR Polarized Swimming Goggles", "price": 1999, "brand": "TYR", "image": "/images/products/tyr-polarized-goggles.jpg", "description": "Polarized lenses to reduce glare and enhance visibility." }
        ]
      },
      "swimming-caps": { 
        "name": "Swimming Caps", 
        "products": [
          { "id": "cap-1", "name": "Speedo Silicone Swim Cap", "price": 999, "brand": "Speedo", "image": "/images/products/speedo-silicone-cap.jpg", "description": "Durable silicone cap for a snug fit and reduced drag." },
          { "id": "cap-2", "name": "Arena Long Hair Swim Cap", "price": 1299, "brand": "Arena", "image": "/images/products/arena-long-hair-cap.jpg", "description": "Designed for long hair with extra space and comfort." },
          { "id": "cap-3", "name": "Nike Stretchable Swimming Cap", "price": 899, "brand": "Nike", "image": "/images/products/nike-stretchable-cap.jpg", "description": "Stretchable material for a comfortable and secure fit." },
          { "id": "cap-4", "name": "TYR Waterproof Latex Swim Cap", "price": 1099, "brand": "TYR", "image": "/images/products/tyr-latex-cap.jpg", "description": "Waterproof latex cap to keep hair dry while swimming." }
        ]
      },
      "swimwear": { 
        "name": "Swimwear", 
        "products": [
          { "id": "swimwear-1", "name": "Speedo Men's Swim Trunks", "price": 2499, "brand": "Speedo", "image": "/images/products/speedo-mens-swim-trunks.jpg", "description": "Comfortable and quick-dry swim trunks for men." },
          { "id": "swimwear-2", "name": "Arena Women's One-Piece Swimsuit", "price": 2899, "brand": "Arena", "image": "/images/products/arena-womens-onepiece.jpg", "description": "Chlorine-resistant one-piece swimsuit for women." },
          { "id": "swimwear-3", "name": "Nike Boys' Swim Shorts", "price": 1999, "brand": "Nike", "image": "/images/products/nike-boys-swim-shorts.jpg", "description": "Lightweight and stylish swim shorts for boys." },
          { "id": "swimwear-4", "name": "TYR Girls' Swimwear Set", "price": 2399, "brand": "TYR", "image": "/images/products/tyr-girls-swimwear-set.jpg", "description": "Swimwear set for girls with UV protection fabric." }
        ]
      },
      "swimming-ear-nose-plugs": { 
        "name": "Swimming Ear & Nose Plugs", 
        "products": [
          { "id": "ear-nose-plug-1", "name": "Speedo Silicone Ear Plugs", "price": 699, "brand": "Speedo", "image": "/images/products/speedo-silicone-ear-plugs.jpg", "description": "Soft silicone ear plugs to prevent water entry." },
          { "id": "ear-nose-plug-2", "name": "Arena Nose Clip & Ear Plug Set", "price": 899, "brand": "Arena", "image": "/images/products/arena-nose-ear-set.jpg", "description": "Complete set for nose and ear protection while swimming." },
          { "id": "ear-nose-plug-3", "name": "Nike Ergonomic Nose Clip", "price": 499, "brand": "Nike", "image": "/images/products/nike-nose-clip.jpg", "description": "Ergonomic design for a secure and comfortable fit." },
          { "id": "ear-nose-plug-4", "name": "TYR Waterproof Ear Plugs", "price": 799, "brand": "TYR", "image": "/images/products/tyr-waterproof-ear-plugs.jpg", "description": "Waterproof ear plugs designed for competitive swimmers." }
        ]
      },
      "swimming-tube": { 
        "name": "Swimming Tube", 
        "products": [
          { "id": "swim-tube-1", "name": "Intex Inflatable Swim Tube", "price": 1599, "brand": "Intex", "image": "/images/products/intex-inflatable-swim-tube.jpg", "description": "Durable inflatable swim tube for pool and beach fun." },
          { "id": "swim-tube-2", "name": "Bestway Kids' Swim Ring", "price": 999, "brand": "Bestway", "image": "/images/products/bestway-kids-swim-ring.jpg", "description": "Colorful swim ring for kids to enjoy water safely." },
          { "id": "swim-tube-3", "name": "Speedo Professional Swim Tube", "price": 1899, "brand": "Speedo", "image": "/images/products/speedo-professional-swim-tube.jpg", "description": "High-quality swim tube for professional training." },
          { "id": "swim-tube-4", "name": "Arena Heavy-Duty Floating Tube", "price": 2199, "brand": "Arena", "image": "/images/products/arena-floating-tube.jpg", "description": "Heavy-duty floating tube for maximum durability." }
        ]
      },
      
      "swimming-jackets": { 
        "name": "Swimming Jackets", 
        "products": [
          { "id": "swim-jacket-1", "name": "Speedo Adult Swimming Jacket", "price": 2999, "brand": "Speedo", "image": "/images/products/speedo-swim-jacket.jpg", "description": "Durable and comfortable swimming jacket for adults." },
          { "id": "swim-jacket-2", "name": "Arena Kids' Buoyancy Jacket", "price": 2499, "brand": "Arena", "image": "/images/products/arena-kids-swim-jacket.jpg", "description": "Buoyancy jacket designed for kids learning to swim." },
          { "id": "swim-jacket-3", "name": "Nike Neoprene Swim Jacket", "price": 3499, "brand": "Nike", "image": "/images/products/nike-neoprene-swim-jacket.jpg", "description": "Neoprene swimming jacket for enhanced warmth and floatation." },
          { "id": "swim-jacket-4", "name": "TYR Professional Life Vest", "price": 3999, "brand": "TYR", "image": "/images/products/tyr-professional-life-vest.jpg", "description": "Professional life vest with adjustable straps for a secure fit." }
        ]
      },
      "swimming-floaters": { 
        "name": "Swimming Floaters", 
        "products": [
          { "id": "swim-floater-1", "name": "Speedo Arm Floaters for Kids", "price": 899, "brand": "Speedo", "image": "/images/products/speedo-arm-floaters.jpg", "description": "Inflatable arm floaters for kids' safety in water." },
          { "id": "swim-floater-2", "name": "Arena Foam Swimming Kickboard", "price": 1799, "brand": "Arena", "image": "/images/products/arena-kickboard.jpg", "description": "High-density foam kickboard for swim training." },
          { "id": "swim-floater-3", "name": "Nike Inflatable Swim Ring", "price": 1199, "brand": "Nike", "image": "/images/products/nike-swim-ring.jpg", "description": "Inflatable swim ring for pool relaxation and fun." },
          { "id": "swim-floater-4", "name": "Bestway Floating Seat for Toddlers", "price": 1599, "brand": "Bestway", "image": "/images/products/bestway-floating-seat.jpg", "description": "Floating seat with leg support for toddler safety in water." }
        ]
      },
      "swimming-pools": { 
        "name": "Swimming Pools", 
        "products": [
          { "id": "swim-pool-1", "name": "Intex Large Inflatable Pool", "price": 5999, "brand": "Intex", "image": "/images/products/intex-large-inflatable-pool.jpg", "description": "Large inflatable swimming pool for backyard fun." },
          { "id": "swim-pool-2", "name": "Bestway Family Pool with Filter", "price": 7999, "brand": "Bestway", "image": "/images/products/bestway-family-pool.jpg", "description": "Spacious family pool with built-in water filter." },
          { "id": "swim-pool-3", "name": "Summer Waves Metal Frame Pool", "price": 12999, "brand": "Summer Waves", "image": "/images/products/summer-waves-metal-pool.jpg", "description": "Metal frame pool for enhanced durability and stability." },
          { "id": "swim-pool-4", "name": "Intex Baby Pool with Sun Shade", "price": 3999, "brand": "Intex", "image": "/images/products/intex-baby-pool.jpg", "description": "Baby swimming pool with sunshade for outdoor fun." }
        ]
      },
      "swimming-flippers-fins": { 
        "name": "Swimming Flippers/Fins", 
        "products": [
          { "id": "swim-fin-1", "name": "Speedo Training Swim Fins", "price": 2799, "brand": "Speedo", "image": "/images/products/speedo-swim-fins.jpg", "description": "Short-blade swim fins designed for swim training." },
          { "id": "swim-fin-2", "name": "Arena Professional Diving Flippers", "price": 3499, "brand": "Arena", "image": "/images/products/arena-diving-flippers.jpg", "description": "Professional-grade diving flippers for deep-water swimming." },
          { "id": "swim-fin-3", "name": "Nike Lightweight Swim Fins", "price": 3199, "brand": "Nike", "image": "/images/products/nike-lightweight-fins.jpg", "description": "Lightweight and comfortable swim fins for enhanced speed." },
          { "id": "swim-fin-4", "name": "TYR Silicone Long Blade Fins", "price": 3999, "brand": "TYR", "image": "/images/products/tyr-long-blade-fins.jpg", "description": "Long-blade silicone swim fins for professional swimmers." }
        ]
      },
      "swimming-accessories": { 
        "name": "Swimming Accessories", 
        "products": [
          { "id": "swim-accessory-1", "name": "Speedo Waterproof Swim Bag", "price": 1999, "brand": "Speedo", "image": "/images/products/speedo-waterproof-bag.jpg", "description": "Waterproof swim bag to carry essentials safely." },
          { "id": "swim-accessory-2", "name": "Arena Towel & Goggles Combo", "price": 2499, "brand": "Arena", "image": "/images/products/arena-towel-goggles.jpg", "description": "Set of microfiber towel and swim goggles for swimmers." },
          { "id": "swim-accessory-3", "name": "Nike Anti-Chlorine Shampoo", "price": 1499, "brand": "Nike", "image": "/images/products/nike-anti-chlorine-shampoo.jpg", "description": "Anti-chlorine shampoo for hair care after swimming." },
          { "id": "swim-accessory-4", "name": "TYR Swim Cap & Nose Clip Set", "price": 1899, "brand": "TYR", "image": "/images/products/tyr-swim-cap-noseclip.jpg", "description": "Combo set of swim cap and nose clip for a comfortable swim." }
        ]
      },
      
    },
  },
};
