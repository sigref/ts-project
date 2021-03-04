import type {Config} from '@jest/types';

export default async(): Promise<Config.InitialOptions> => ({
  moduleFileExtensions: [
    'ts',
    'js',
    'd.ts',
  ],
  moduleNameMapper: {
    "^@/(.+)$": "<rootDir>/src/$1",
    "^#/(.+)$": "<rootDir>/assets/$1",
    "^lib/(.+)$": "<rootDir>/lib/$1",
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '\\.txt$': 'jest-raw-loader',
  },
  globals: {
    "ts-jest": {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  testMatch: [
    '**/test/**/*.spec.ts',
  ],
});
