// import prop from '../../../src/components/00_first-steps/prop';

const prop = <T>(object: T, key: keyof T) => object[key];

describe('prop', () => {
  it('returns the value associated with the specified key', () => {
    const mockUser = {
      id: '1',
      name: 'John Doe',
    };

    expect(prop(mockUser, 'id')).toBe(mockUser.id);
  });
});
