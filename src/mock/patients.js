const patients = [
  {
    lastVisit: '09/27/18',
    totalNumberOfSessions: 4,
    _id: '5c6891dcca30fb36445d7374',
    patientId: '5m4-Au9Gu',
    name: 'Karen Williams',
    address: '12-34 Main St.',
    phoneNumbers: [
      {
        _id: '5c6891dcca30fb36445d7376',
        type: 'home',
        number: '333-333-3333',
      },
      {
        _id: '5c6891dcca30fb36445d7375',
        type: 'work',
        number: '555-555-5555',
      },
    ],
    email: 'john@gmail.com',
    reason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    diagnosis: 'Nulla dapibus suscipit accumsan.',
    notes: 'Vestibulum eu tortor neque. Curabitur vel laoreet quam, vel tristique dui.',
    sessions: [
      {
        number: 1,
        confirmed: true,
        _id: '5c6891dcca30fb36445d737a',
        date: '09/24/18',
        notes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam non mi sed congue. Cras lacus lacus, sollicitudin et sem a, iaculis commodo odio. Donec eu magna nec purus mattis egestas ac vitae metus. Cras et magna lorem. Curabitur tincidunt pulvinar enim et lobortis. Nulla nec purus sit amet nibh congue accumsan. Nullam vestibulum convallis lorem at efficitur.',
      },
      {
        number: 2,
        confirmed: true,
        _id: '5c6891dcca30fb36445d7379',
        date: '09/25/18',
        notes:
          'Vestibulum molestie sapien quis risus euismod sodales. Mauris accumsan eleifend tortor, at euismod erat sodales non. Donec vel mattis sapien. Pellentesque lobortis porta justo. Nullam vulputate diam velit, nec aliquet risus hendrerit ut. Praesent venenatis ultrices massa, et blandit eros dapibus at. Quisque at fermentum metus. Sed non magna libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et erat vitae arcu dignissim aliquam. Nunc vulputate accumsan elementum. Vestibulum vulputate tortor at tristique tincidunt.',
      },
      {
        number: 3,
        confirmed: true,
        _id: '5c6891dcca30fb36445d7378',
        date: '09/26/18',
        notes:
          'Etiam quis sapien nisi. Vestibulum malesuada in nibh sed fringilla. Maecenas ullamcorper, ante sit amet ultricies scelerisque, ante justo rhoncus risus, eu pellentesque libero ipsum vel neque. Fusce dapibus ipsum varius, gravida lectus ut, tincidunt diam. Donec a turpis ullamcorper, semper tortor ut, luctus odio. Donec sit amet ante ut sapien egestas aliquam. Praesent bibendum lacus velit, luctus sagittis felis tempor vel. Ut vitae pulvinar lectus, nec ultrices massa. Pellentesque non neque tempor, bibendum lectus non, tempus leo. Vivamus id pharetra sapien. Donec sed urna metus. Curabitur pharetra sapien ac risus mattis interdum. Pellentesque at odio ipsum. Nam ac purus id lectus commodo porttitor at eu sem.',
      },
      {
        number: 4,
        confirmed: true,
        _id: '5c6891dcca30fb36445d7377',
        date: '09/27/18',
        notes:
          'Nullam convallis efficitur nisl in ornare. In vitae finibus mauris, et bibendum ligula. Vestibulum malesuada tempus eros vel maximus. Sed lobortis magna ut ipsum accumsan fringilla. Aliquam sed facilisis augue. Sed vel pellentesque velit, non facilisis libero. Sed at vehicula tortor. Donec vestibulum non orci in viverra. Nullam faucibus volutpat velit sit amet viverra. Donec tincidunt eros non orci cursus lobortis.',
      },
    ],
    createdBy: '5c5a5d4c8f58475495d416ca',
    __v: 0,
  },
  {
    lastVisit: '09/27/18',
    totalNumberOfSessions: 4,
    _id: '5c6891efca30fb36445d737b',
    patientId: '0H5c3dmGh',
    name: 'John Doe',
    address: '12-34 Main St.',
    phoneNumbers: [
      {
        _id: '5c6891efca30fb36445d737d',
        type: 'home',
        number: '333-333-3333',
      },
      {
        _id: '5c6891efca30fb36445d737c',
        type: 'work',
        number: '555-555-5555',
      },
    ],
    email: 'john@gmail.com',
    reason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    diagnosis: 'Suspendisse potenti.',
    notes: 'Nulla iaculis elit in iaculis pellentesque.',
    sessions: [
      {
        number: 1,
        confirmed: true,
        _id: '5c6891dcca30fb36445d737a',
        date: '09/24/18',
        notes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam non mi sed congue. Cras lacus lacus, sollicitudin et sem a, iaculis commodo odio. Donec eu magna nec purus mattis egestas ac vitae metus. Cras et magna lorem. Curabitur tincidunt pulvinar enim et lobortis. Nulla nec purus sit amet nibh congue accumsan. Nullam vestibulum convallis lorem at efficitur.',
      },
      {
        number: 2,
        confirmed: false,
        _id: '5c6891dcca30fb36445d7379',
        date: '09/25/18',
        notes:
          'Vestibulum molestie sapien quis risus euismod sodales. Mauris accumsan eleifend tortor, at euismod erat sodales non. Donec vel mattis sapien. Pellentesque lobortis porta justo. Nullam vulputate diam velit, nec aliquet risus hendrerit ut. Praesent venenatis ultrices massa, et blandit eros dapibus at. Quisque at fermentum metus. Sed non magna libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et erat vitae arcu dignissim aliquam. Nunc vulputate accumsan elementum. Vestibulum vulputate tortor at tristique tincidunt.',
      },
      {
        number: 3,
        confirmed: true,
        _id: '5c6891dcca30fb36445d7378',
        date: '09/26/18',
        notes:
          'Etiam quis sapien nisi. Vestibulum malesuada in nibh sed fringilla. Maecenas ullamcorper, ante sit amet ultricies scelerisque, ante justo rhoncus risus, eu pellentesque libero ipsum vel neque. Fusce dapibus ipsum varius, gravida lectus ut, tincidunt diam. Donec a turpis ullamcorper, semper tortor ut, luctus odio. Donec sit amet ante ut sapien egestas aliquam. Praesent bibendum lacus velit, luctus sagittis felis tempor vel. Ut vitae pulvinar lectus, nec ultrices massa. Pellentesque non neque tempor, bibendum lectus non, tempus leo. Vivamus id pharetra sapien. Donec sed urna metus. Curabitur pharetra sapien ac risus mattis interdum. Pellentesque at odio ipsum. Nam ac purus id lectus commodo porttitor at eu sem.',
      },
      {
        number: 4,
        confirmed: false,
        _id: '5c6891dcca30fb36445d7377',
        date: '09/27/18',
        notes:
          'Nullam convallis efficitur nisl in ornare. In vitae finibus mauris, et bibendum ligula. Vestibulum malesuada tempus eros vel maximus. Sed lobortis magna ut ipsum accumsan fringilla. Aliquam sed facilisis augue. Sed vel pellentesque velit, non facilisis libero. Sed at vehicula tortor. Donec vestibulum non orci in viverra. Nullam faucibus volutpat velit sit amet viverra. Donec tincidunt eros non orci cursus lobortis.',
      },
    ],
    createdBy: '5c5a5d4c8f58475495d416ca',
    __v: 0,
  },
  {
    lastVisit: '09/27/18',
    totalNumberOfSessions: 4,
    _id: '5c6891f9ca30fb36445d7382',
    patientId: 'OBcRJBDUq',
    name: 'Jake Peralta',
    address: '12-34 Main St.',
    phoneNumbers: [
      {
        _id: '5c6891f9ca30fb36445d7384',
        type: 'home',
        number: '333-333-3333',
      },
      {
        _id: '5c6891f9ca30fb36445d7383',
        type: 'work',
        number: '555-555-5555',
      },
    ],
    email: 'john@gmail.com',
    reason: 'Nullam sit amet nisi vulputate, hendrerit lacus id, tristique nisl.',
    diagnosis:
      'Donec quis nisl nisi. Sed suscipit tempor lacus eget efficitur. Sed pretium feugiat ex, in dignissim dolor viverra et.',
    notes:
      'Vivamus vitae elementum massa. Donec a metus ipsum. Nullam tristique sapien sit amet venenatis laoreet.',
    sessions: [
      {
        number: 1,
        confirmed: true,
        _id: '5c6891dcca30fb36445d737a',
        date: '09/24/18',
        notes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam non mi sed congue. Cras lacus lacus, sollicitudin et sem a, iaculis commodo odio. Donec eu magna nec purus mattis egestas ac vitae metus. Cras et magna lorem. Curabitur tincidunt pulvinar enim et lobortis. Nulla nec purus sit amet nibh congue accumsan. Nullam vestibulum convallis lorem at efficitur.',
      },
      {
        number: 2,
        confirmed: true,
        _id: '5c6891dcca30fb36445d7379',
        date: '09/25/18',
        notes:
          'Vestibulum molestie sapien quis risus euismod sodales. Mauris accumsan eleifend tortor, at euismod erat sodales non. Donec vel mattis sapien. Pellentesque lobortis porta justo. Nullam vulputate diam velit, nec aliquet risus hendrerit ut. Praesent venenatis ultrices massa, et blandit eros dapibus at. Quisque at fermentum metus. Sed non magna libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et erat vitae arcu dignissim aliquam. Nunc vulputate accumsan elementum. Vestibulum vulputate tortor at tristique tincidunt.',
      },
      {
        number: 3,
        confirmed: false,
        _id: '5c6891dcca30fb36445d7378',
        date: '09/26/18',
        notes:
          'Etiam quis sapien nisi. Vestibulum malesuada in nibh sed fringilla. Maecenas ullamcorper, ante sit amet ultricies scelerisque, ante justo rhoncus risus, eu pellentesque libero ipsum vel neque. Fusce dapibus ipsum varius, gravida lectus ut, tincidunt diam. Donec a turpis ullamcorper, semper tortor ut, luctus odio. Donec sit amet ante ut sapien egestas aliquam. Praesent bibendum lacus velit, luctus sagittis felis tempor vel. Ut vitae pulvinar lectus, nec ultrices massa. Pellentesque non neque tempor, bibendum lectus non, tempus leo. Vivamus id pharetra sapien. Donec sed urna metus. Curabitur pharetra sapien ac risus mattis interdum. Pellentesque at odio ipsum. Nam ac purus id lectus commodo porttitor at eu sem.',
      },
      {
        number: 4,
        confirmed: true,
        _id: '5c6891dcca30fb36445d7377',
        date: '09/27/18',
        notes:
          'Nullam convallis efficitur nisl in ornare. In vitae finibus mauris, et bibendum ligula. Vestibulum malesuada tempus eros vel maximus. Sed lobortis magna ut ipsum accumsan fringilla. Aliquam sed facilisis augue. Sed vel pellentesque velit, non facilisis libero. Sed at vehicula tortor. Donec vestibulum non orci in viverra. Nullam faucibus volutpat velit sit amet viverra. Donec tincidunt eros non orci cursus lobortis.',
      },
    ],
    createdBy: '5c5a5d4c8f58475495d416ca',
    __v: 0,
  },
];

export default patients;
