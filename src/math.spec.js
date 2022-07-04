import {isEvent} from './math';

describe("isEvent", () => {

    it("isEvent is la even number",() => {
        const result = isEvent(2);
        expect(result).toEqual(true)
    })
    it("isEvent is la ood number",() => {
        const result = isEvent(1);
        expect(result).toEqual(false)
    })
})

