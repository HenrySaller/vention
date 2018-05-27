export const steps = [
  {
    number: {
      content: '1',
      align: 'left',
      position: '-80%, -60%',
    },
    icon: 'create',
    reverse: true,
    title: 'Design',
    description:
      `Create an assembly in your browser using Vention’s library of ` +
      `industrial modular parts.`,
  },
  {
    number: {
      content: '2',
      align: 'right',
      position: '20%, -80%',
    },
    icon: 'shopping_cart',
    reverse: false,
    title: 'Order',
    description:
      `Review your Assembly’s bill of material and order all the parts ` +
      `directly from Vention’s website.`,
  },
  {
    number: {
      content: '3',
      align: 'left',
      position: '0, -40%',
    },
    icon: 'build',
    reverse: true,
    title: 'Assemble',
    description:
      `Receive your flat-pack box and start assembling your design as you ` +
      `would for IKEA furniture.`,
  },
  {
    number: {
      content: '4',
      align: 'right',
      position: '60%, -70%',
    },
    icon: 'publish',
    reverse: false,
    title: 'Publish',
    description: 'Opt to publish your design privately or publicly.',
  },
];

export const catalog = [
  {
    title: 'Material Handling',
    url: '/material-handling',
    src: require('./img/equipment/material-handling.png'),
  },
  {
    title: 'Manufacturing Equipment',
    url: '/manufacturing-equipment',
    src: require('./img/equipment/manufacturing-equipment.png'),
  },
  {
    title: 'Holding Fixture',
    url: '/holding-fixture',
    src: require('./img/equipment/holding-fixture.png'),
  },
  {
    title: 'Dimensional Jig',
    url: '/dimensional-jig',
    src: require('./img/equipment/dimensional-jig.png'),
  },
  {
    title: 'Robotic Applications',
    url: '/robotic-applications',
    src: require('./img/equipment/robotic-applications.png'),
  },
  {
    title: 'Test Benches',
    url: '/test-benches',
    src: require('./img/equipment/test-benches.png'),
  },
];

export const press = [
  {
    title: 'CNN',
    url: '/press-article',
    src: require('./img/press/cnn.svg'),
  },
  {
    title: 'CNET',
    url: '/press-article',
    src: require('./img/press/cnet.svg'),
  },
  {
    title: 'Forbes',
    url: '/press-article',
    src: require('./img/press/forbes.svg'),
  },
  {
    title: 'CNBC',
    url: '/press-article',
    src: require('./img/press/cnbc.svg'),
  },
];

export const footer = {
  description:
    `Vention enables mechanical designers to significantly reduce the ` +
    `development and manufacturing time of custom industrial equipment.\n\n` +
    `Montreal (Quebec), Canada\ninfo@vention.io  /  1-888-901-5909`,
  sections: [
    {
      title: 'Company',
      urls: [
        {
          path: '/about',
          title: 'About Us',
        },
        {
          path: '/contact',
          title: 'Contact Us',
        },
        {
          path: '/press',
          title: 'Press',
        },
      ],
    },
    {
      title: 'Technology',
      urls: [
        {
          path: '/builder',
          title: 'Machine Builder 3D™',
        },
        {
          path: '/motion',
          title: 'Machine Motion 3D™',
        },
        {
          path: '/extrusion',
          title: 'Extrusion Systems',
        },
      ],
    },
    {
      title: 'Community',
      urls: [
        {
          path: '/blog',
          title: 'Blog',
        },
        {
          path: '/suggest',
          title: 'Suggest a New Part',
        },
      ],
    },
    {
      title: 'Resources',
      urls: [
        {
          path: '/white-papers',
          title: 'White Papers',
        },
        {
          path: '/catalog',
          title: 'Hardware Catalog',
        },
        {
          path: '/partner',
          title: 'Become a Partner',
        },
        {
          path: '/guide',
          title: 'User Guide',
        },
        {
          path: '/faq',
          title: 'FAQs',
        },
      ],
    },
  ],
};

export const copyright = {
  urls: [
    {
      path: '/terms',
      title: 'Terms of Use',
    },
    {
      path: '/privacy',
      title: 'Privacy Policy',
    },
  ],
};
