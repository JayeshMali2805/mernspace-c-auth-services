import { createDefaultEsmPreset } from 'ts-jest'

const tsJestEsmPreset = createDefaultEsmPreset({
  tsconfig: './tsconfig.test.json',
})

/** @type {import("jest").Config} **/
export default {
  ...tsJestEsmPreset,
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}
