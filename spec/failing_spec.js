describe('success', function () {
  it('is real', function () {
    expect(true).toBe(true);
  });

  it('eludes us', function () {
    expect(1).toBe(...[1]);
  });
});
