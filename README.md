
## Test Driven Development
This is meant to be a repository for my gateway into test driven development in javascript/React or Next.


## How to Setup Jest in Next.js

-- Run the Following Commands: 

npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
yarn add -D jest-environment-jsdom
 
 
 
-- In the Root Directory create a jest.config.js file

// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)



-- Paste the above in the config file and then save



-- In package.json add the following to the scripts

"test": "jest --watch"



-- Create a folder named __tests__ and add tests file in that
-- eg. Counter.test.js


-- run the test command with yarn test
