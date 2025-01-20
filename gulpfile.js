const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const htmlPath = 'examples/html'
const htmlCsvPath = 'examples/html-with-csv'
const reactPath = 'examples/react/src'

gulp.task('install', (done) => {

  const exec = require('child_process').exec;
  exec('npm install', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`);
      done(err);
    } else {
      console.log(stdout);
      done();
    }
  });
});

gulp.task('build-lib', (done) => {
  const exec = require('child_process').exec;
  exec('npm run build', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`);
      done(err);
    } else {
      // console.log(stdout);
      done();
    }
  });
});

gulp.task('check-folder-html', (done) => {
  const folderPath = path.join(__dirname, htmlPath + '/respTable');
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  done();
});

gulp.task('check-folder-html-csv', (done) => {
  const folderPath = path.join(__dirname, htmlCsvPath + '/respTable');
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  done();
});

gulp.task('check-folder-react', (done) => {
  const folderPath = path.join(__dirname, reactPath + '/respTable');
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  done();
});

gulp.task('copy-files-html', () => {
  return gulp.src(['dist/esm/index.esm.js', 'dist/esm/index.esm.css'])
    .pipe(gulp.dest(htmlPath + '/respTable'));
});

gulp.task('copy-files-html-csv', () => {
  return gulp.src('dist/esm/index.esm.css')
    .pipe(gulp.dest(htmlCsvPath + '/respTable'));
});

gulp.task('copy-files-react', () => {
  return gulp.src('dist/esm/*')
    .pipe(gulp.dest(reactPath + '/respTable'));
});

gulp.task('install-react-example', (done) => {
  const exec = require('child_process').exec;
  exec('npm install', { cwd: reactPath }, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`);
      done(err);
    } else {
      done();
    }
  });
});

gulp.task('start-html-example', (done) => {
  console.log(`Starting server in directory: ${htmlPath}`);
  const server = exec('npx serve', { cwd: htmlPath });

  server.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  server.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
    done();
  });

  server.on('error', (err) => {
    console.error(`Error starting server: ${err}`);
    done(err);
  });
});

gulp.task('start-html-csv-example', (done) => {
  console.log(`Starting server in directory: ${htmlCsvPath}`);
  const server = exec('npx serve', { cwd: htmlCsvPath });

  server.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  server.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
    done();
  });

  server.on('error', (err) => {
    console.error(`Error starting server: ${err}`);
    done(err);
  });
});

gulp.task('start-react-example', (done) => {
  const exec = require('child_process').exec;
  exec('npm start', { cwd: reactPath }, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`);
    } else {
      done();
    }
  });
});




gulp.task('html', gulp.series(
  'install',
  'build-lib',
  'check-folder-html-csv',
  'copy-files-html',
  'start-html-example'
));

gulp.task('html-csv', gulp.series(
  'install',
  'build-lib',
  'check-folder-html-csv',
  'copy-files-html-csv',
  'start-html-csv-example'
));

gulp.task('react', gulp.series(
  'install',
  'build-lib',
  'check-folder-react',
  'copy-files-react',
  'install-react-example',
  'start-react-example'
));

gulp.task('default', (done) => {
  console.log(`Available Gulp tasks:
  - gulp install: Install all missing npm dependencies.
  - gulp build-lib: Build the library.

  - gulp start-html-example: Only start the HTML example.
  - gulp start-html-csv-example: Only start the HTML example with CSV.
  - gulp start-react-example: Only start the React example.

  - gulp html: Install, build, and start the HTML example.
  - gulp html-csv: Install, build, and start the HTML example with CSV.
  - gulp react: Install, build, and start the React example.

For more information, check the README.
`);
  done();
});
