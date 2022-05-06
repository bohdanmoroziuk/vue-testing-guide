import installPlugin, { Plugin } from '../../../src/components/00_first-steps/installPlugin';

describe('installPlugin', () => {
  it('calls the install method if the version is compatible', () => {
    const mockInstall = jest.fn();

    const mockPlugin: Plugin = {
      compatibleVersion: 4,
      install: mockInstall,
    };
  });

  it('throws an error if the version is incompatible', () => {
    const mockInstall = jest.fn();

    const mockPlugin: Plugin = {
      compatibleVersion: 2,
      install: mockInstall,
    };
  });
});
