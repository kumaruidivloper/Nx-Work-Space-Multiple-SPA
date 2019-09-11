module.exports = {
  name: 'userapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/userapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
