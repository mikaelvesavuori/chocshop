export const bar = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Chocolate Bar',
  image: [
    'https://chocshop.netlify.com/img/1400px/bar.jpg',
    'https://chocshop.netlify.com/img/1000px/bar.jpg',
    'https://chocshop.netlify.com/img/700px/bar.jpg'
  ],
  description:
    "A tasty bar of chocolate. Velvety taste, 95% cocoa, and only the finest, selected Venezuela beans. The 'bomb', they've been called, though no one has died yet. ...Yet?",
  sku: 'bar',
  mpn: 'bar-123',
  brand: {
    '@type': 'Brand',
    name: 'ChocShop'
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4',
      bestRating: '5'
    },
    author: {
      '@type': 'Person',
      name: 'Sam Person'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.4',
    reviewCount: '89'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://chocshop.netlify.com/products/bar',
    priceCurrency: 'USD',
    price: '7.99',
    priceValidUntil: '2020-11-20',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'ChocShop'
    }
  }
};

export const box = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Gift Box',
  image: [
    'https://chocshop.netlify.com/img/1400px/box.jpg',
    'https://chocshop.netlify.com/img/1000px/box.jpg',
    'https://chocshop.netlify.com/img/700px/box.jpg'
  ],
  description:
    "When you want to go from first to second base, it is time to bring out the big guns: Our fab box of dark desires, wrapped in a bow. Share it and thank us later. Just don't get hitched too fast!",
  sku: 'box',
  mpn: 'box-123',
  brand: {
    '@type': 'Brand',
    name: 'ChocShop'
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4',
      bestRating: '5'
    },
    author: {
      '@type': 'Person',
      name: 'Sam Person'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '123'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://chocshop.netlify.com/product-box',
    priceCurrency: 'USD',
    price: '37.99',
    priceValidUntil: '2020-11-20',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'ChocShop'
    }
  }
};

export const brownie = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Brownie',
  image: [
    'https://chocshop.netlify.com/img/1400px/brownie.jpg',
    'https://chocshop.netlify.com/img/1000px/brownie.jpg',
    'https://chocshop.netlify.com/img/700px/brownie.jpg'
  ],
  description:
    'Better than your mom ever baked, this is the ultimate cake for those book club readings. Dark chocolate from Uruguay to really make it punch through that sugary cake.',
  sku: 'brownie',
  mpn: 'brownie-123',
  brand: {
    '@type': 'Brand',
    name: 'ChocShop'
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4',
      bestRating: '5'
    },
    author: {
      '@type': 'Person',
      name: 'Sam Person'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.2',
    reviewCount: '12'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://chocshop.netlify.com/product-brownie',
    priceCurrency: 'USD',
    price: '4.99',
    priceValidUntil: '2020-11-20',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/OutOfStock',
    seller: {
      '@type': 'Organization',
      name: 'ChocShop'
    }
  }
};

export const cake = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Chocolate Cake',
  image: [
    'https://chocshop.netlify.com/img/1400px/cake.jpg',
    'https://chocshop.netlify.com/img/1000px/cake.jpg',
    'https://chocshop.netlify.com/img/700px/cake.jpg'
  ],
  description:
    'Wonderful, moist and rich cake, drenched in a mix of fine melted milk chocolates. And none of those cheap supermarket varieties. Do you think we are trying to rob you?',
  sku: 'cake',
  mpn: 'cake-123',
  brand: {
    '@type': 'Brand',
    name: 'ChocShop'
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4',
      bestRating: '5'
    },
    author: {
      '@type': 'Person',
      name: 'Sam Person'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '456'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://chocshop.netlify.com/products-cake',
    priceCurrency: 'USD',
    price: '15.99',
    priceValidUntil: '2020-11-20',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'ChocShop'
    }
  }
};

export const icecream = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Chocolate Ice Cream',
  image: [
    'https://chocshop.netlify.com/img/1400px/icecream.jpg',
    'https://chocshop.netlify.com/img/1000px/icecream.jpg',
    'https://chocshop.netlify.com/img/700px/icecream.jpg'
  ],
  description:
    "'All by myself...' someone sang in a famous ballad. We hope you are by yourself because you are not going to want to share this bucket of the smoothest chocolate ice cream you ever tasted.",
  sku: 'icecream',
  mpn: 'icecream-123',
  brand: {
    '@type': 'Brand',
    name: 'ChocShop'
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4',
      bestRating: '5'
    },
    author: {
      '@type': 'Person',
      name: 'Sam Person'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.3',
    reviewCount: '74'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://chocshop.netlify.com/product-icecream',
    priceCurrency: 'USD',
    price: '3.59',
    priceValidUntil: '2020-11-20',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/OutOfStock',
    seller: {
      '@type': 'Organization',
      name: 'ChocShop'
    }
  }
};

export const pralines = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Chocolate Pralines',
  image: [
    'https://chocshop.netlify.com/img/1400px/pralines.jpg',
    'https://chocshop.netlify.com/img/1000px/pralines.jpg',
    'https://chocshop.netlify.com/img/700px/pralines.jpg'
  ],
  description:
    'Promotion time? Ran your 51st Ironman? Just happy you got out of bed? Whatever the occasion, trust us that this expensive-looking box will bring out all the feels (and taste buds!)',
  sku: 'pralines',
  mpn: 'pralines-123',
  brand: {
    '@type': 'Brand',
    name: 'ChocShop'
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4',
      bestRating: '5'
    },
    author: {
      '@type': 'Person',
      name: 'Sam Person'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.0',
    reviewCount: '51'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://chocshop.netlify.com/product-pralines',
    priceCurrency: 'USD',
    price: '34.99',
    priceValidUntil: '2020-11-20',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'ChocShop'
    }
  }
};
