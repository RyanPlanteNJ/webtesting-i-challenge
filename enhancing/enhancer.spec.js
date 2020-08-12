const enhancer = require('./enhancer.js');
// test away!

describe('item enhnacement', () => {
const item = {name: "Demon Monarch's Ring", durability: 50, enhancement: 10};
  describe('repaired item', () => {

    it('restores weapon to 100 durability', () => {
      const repaired = { ...item, durability: 100 }
      expect(enhancer.repair(item)).toEqual(repaired);
    })
  })

  describe('increased enhancement', () => {
    it('should increase enhancement by 1, if not 20', () => {
      const enhanced = { ...item, enhancement: 11 }
      expect(enhancer.success(item)).toEqual(enhanced)
    })
  })

  describe('item failed to enhanced, loses durability and enhancement', () => {
    const item = {name: "Demon Monarch's Ring", durability: 50, enhancement: 20};
    it('reduces enhancement and durabiilty', () => {
      const lost = {...item, durability: 40, enhancement: 19};
      expect(enhancer.fail(item)).toEqual(lost)
    })
  })
})
