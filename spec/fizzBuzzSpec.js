describe('Fizzbuzz', function() {

  var fizzbuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 and 5', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(2)).toBe(false);
    });

    it('divisible by 3 and 5', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThreeAndFive(3)).toBe(false);
    });

  });

});
