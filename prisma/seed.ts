import {PrismaClient, Project} from '@prisma/client'
const db = new PrismaClient()

async function seed() {
  await Promise.all(
    getProjects().map(project => {
      return db.project.create({data: project})
    }),
  )
}

seed()

function getProjects(): Array<Project> {
  return [
    {
      id: '2Az5lOeuEpimusasRbu4',
      repoUrl: 'xx',
      projectType: `contribution`,
      description:
        'This App was Created using Angular, Bulma, and Angular Material.',

      url: 'https://calculatemybudget.web.app/',
      tags: [
        {
          url: 'https://res.cloudinary.com/ahmedeldessouki/image/authenticated/s--N2uohADv--/v1608654350/profileLogos/angular.png',
        },
        {
          url: 'https://res.cloudinary.com/ahmedeldessouki/image/authenticated/s--E7NunOG---/v1608653028/profileLogos/1_mn6bOs7s6Qbao15PMNRyOA.png',
        },
      ],
      images: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607447717/sybfcw2dgjssxxbpre0o.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607447717/gnfev4cal32y7lm5dldj.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607447717/uhhuji9htunvy4cisfb8.png',
      ],
      name: 'Budget Calc.',
    },
    {
      url: 'https://ahmedeldessouki-a7488.firebaseapp.com/',
      id: '9lfMA1DnbWHq2mTtYIpq',
      repoUrl: 'xx',
      projectType: `personal`,

      description:
        '// Note: The Pictures are for the old and the new modifications in the web App.\n\nReact.js\nRedux\nReact-Router\naxios\n\n-- What is new --\nReact V17\nReact-Query\nReact-Hooks\nJest & React-testing-library\nSuspinse\nNode_ENV\nEmotion/react(core)',
      tags: [
        'https://res.cloudinary.com/ahmedeldessouki/image/authenticated/s--0wyS4BK6--/v1608653815/profileLogos/1_cPh7ujRIfcHAy4kW2ADGOw_1.png',
      ],
      name: 'Portfolio V1',
      images: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507757/a6tdy6ocjqlt7e7zbylk.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507744/t0kiu2vsbpic2hxs8bvy.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507728/ne4ztb3q2qwsju4nczhp.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507743/xzdsomr4ddf6pldtbbsv.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507729/vao4bg5oe97o14xke4br.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507768/ywic05qpmzqinuu2zrjn.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507771/ezvrsdzoippwo006rial.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507734/jyugpto2uzog5pgostsm.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507754/liztzm5zzt1rybyrcdrh.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507747/ycm1pwdf1kvs54prltah.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507754/gloegbqbvm3ruhk0vvu1.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507750/ozgku3mzed3lrgspqoqj.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507752/inthvoaemvy6yahyoqtz.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607507774/z67eeu3txqpbx6oryzfk.png',
      ],
    },
    {
      name: 'Tic Tac Teo',
      id: 'EJodDJ1pjvvLSGTDfnco',
      repoUrl: 'xx',
      projectType: `personal`,
      tags: [
        'https://res.cloudinary.com/ahmedeldessouki/image/authenticated/s--0wyS4BK6--/v1608653815/profileLogos/1_cPh7ujRIfcHAy4kW2ADGOw_1.png',
      ],

      description:
        'Made Using React, Emotion/core and deployed on firebase. Tested using Jest and React- testing-library\n',
      url: 'https://tictacteo-jsx.web.app/',
      images: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1606997736/cohx2dg0ggryovik4824.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1606997737/qebijh5ci9g4ujycquyj.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1606997737/v1bas0yvpfbiwu0zq0ww.png',
      ],
    },
    {
      url: 'https://covid-19-123.web.app/',

      images: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1606997536/vqwviwzo1nntxivblhaz.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1606997544/wuwz04zfpkkznvlskozq.png',
      ],
      description: 'React.js\nChart.js\nMatirial-Ui\nReact-Query',
      id: 'ZiqNw0MPUYAGct8j7jm6',
      repoUrl: 'xx',
      projectType: `personal`,
      tags: [
        'https://res.cloudinary.com/ahmedeldessouki/image/authenticated/s--0wyS4BK6--/v1608653815/profileLogos/1_cPh7ujRIfcHAy4kW2ADGOw_1.png',
      ],
      name: 'Covid-19',
    },
    {
      name: 'My Book List',
      images: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607447402/cw6txawhfxmmtegxexna.png',
      ],
      description: 'javascript',
      tags: [
        'https://res.cloudinary.com/ahmedeldessouki/image/authenticated/s--PAKoYzOw--/v1608653372/profileLogos/JavaScript-logo.png',
      ],

      url: 'https://booklist-mine.web.app',
      id: 'kirCDouOW2L8QH5iahG2',
      repoUrl: 'xx',
      projectType: `personal`,
    },
    {
      description:
        'This App was created using Angular.js and Deployed on Firebase.',

      images: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607447804/jkaougjiiyfuav7yp9wq.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607447804/ovx1nm0y46of988a6bkx.png',
      ],
      name: 'Tic Tac Toe',
      url: 'https://tic-tac-teo-3b62b.web.app/',

      id: 'lELoGl25TpRptuqj5TXr',
      repoUrl: 'xx',
      projectType: `personal`,
      tags: [
        'https://res.cloudinary.com/ahmedeldessouki/image/authenticated/s--N2uohADv--/v1608654350/profileLogos/angular.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/authenticated/s--E7NunOG---/v1608653028/profileLogos/1_mn6bOs7s6Qbao15PMNRyOA.png',
      ],
    },
    {
      images: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607446483/oaylqtkxwrw0clblcsil.png',
      ],
      url: 'https://todo-budg.web.app/',
      description: 'React.js\nReact-hooks',
      name: 'Todo & Bcalc',

      id: 'qTAV4jdpv1eq696Z42hG',
      repoUrl: 'xx',
      projectType: `personal`,
      tags: [
        'https://res.cloudinary.com/ahmedeldessouki/image/authenticated/s--0wyS4BK6--/v1608653815/profileLogos/1_cPh7ujRIfcHAy4kW2ADGOw_1.png',
      ],
    },
    {
      url: 'https://www.renoom.com/',
      images: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1550847377/tkok9uh93ls7o6kjmdke.jpg',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1550753974/gtnvfw1ovpktqkx9pgbe.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1547127466/mbfdemixeivjnzb3cyoo.png',
      ],
      name: 'Room Me',
      description:
        'This App has been took down by the owner. The Link above is the last known link.',
      tags: [
        'https://res.cloudinary.com/ahmedeldessouki/image/authenticated/s--0wyS4BK6--/v1608653815/profileLogos/1_cPh7ujRIfcHAy4kW2ADGOw_1.png',
      ],

      id: 'syNENmmECalb7AKP76ni',
      repoUrl: 'xx',
      projectType: `personal`,
    },
    {
      description: 'React.js\nAxios',
      url: 'https://weather-api-1.web.app/',
      tags: [
        'https://res.cloudinary.com/ahmedeldessouki/image/authenticated/s--0wyS4BK6--/v1608653815/profileLogos/1_cPh7ujRIfcHAy4kW2ADGOw_1.png',
      ],
      images: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607446594/vb07z6pkwke5eexrhdle.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1607446596/gsxmtnpquyhajbgyjafr.png',
      ],
      id: 'wut9gkeMxT6GAgjB4Tqn',
      repoUrl: 'xx',
      projectType: `personal`,
      name: 'Weather',
    },
  ]
}
