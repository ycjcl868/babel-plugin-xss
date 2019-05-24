import { join } from 'path';
import pluginTester from 'babel-plugin-tester';


pluginTester({
  pluginName: 'babel.xss',
  pluginOptions: {
    extensions: [
      ".py",
      ".raw"
    ]
  },
  // fixtures: join(__dirname, 'fixtures/raw'),
});


pluginTester({
  pluginName: 'babel.xss',
  // fixtures: join(__dirname, 'fixtures/schema'),
});
