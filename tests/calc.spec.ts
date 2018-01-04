import { expect } from 'chai';
import { sum, sub, mult, div } from './../src/calc.js';

describe('Calculadora', () => {

  // SMOKE TESTS
  describe('Smoke Tests', () =>  {
    it('shoud have method "sum"', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('shoud have method "sub"', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('shoud have method "mult"', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('shoud have method "div"', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  // SUM
  describe('Sum', () => {

    it('should return 4 for sum(2, 2)', () => {
      expect(sum(2, 2)).to.be.equals(4);
    });

    it('should return 10 for sum(8, 2)', () => {
      expect(sum(8, 2)).to.be.equals(10);
    });

  });

  // SUB
  describe('Sub', () => {

    it('should return 4 for sub(6, 2)', () => {
      expect(sub(6,2)).to.be.equals(4);
    });

    it('should return -10 form sub(5, 15)', () => {
      expect(sub(5, 15)).to.be.equals(-10);
    });

  });

  // MULT
  describe('Mult', () => {

    it('should return 10 for mult(2, 5)', () => {
      expect(mult(2, 5)).to.be.equals(10);
    });

    it('should return 3 for mult(3, 1)', () => {
      expect(mult(3, 1)).to.be.equals(3);
    });

    it('should return 0 for mult(8, 0)', () =>  {
      expect(mult(8, 0)).to.be.equals(0);
    });

  });

  // DIV
  describe('Div', () =>  {

    it('should return 5 for div(10, 2)', () =>  {
      expect(div(10, 2)).to.be.equals(5);
    });

    it('should return undefined for (3, 0)', () =>  {
      expect(div(3, 0)).to.be.undefined;
    })

    it('should return undefined for (3, 0)', () =>  {
      expect(div(3, 0)).to.be.equals(undefined);
    })

  });

});
