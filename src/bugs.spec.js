
import { getUnresolvedBugs } from './store/bugs';

describe ('selector' , () => {
    it('getUnresolvedBugs', () => {
        const fakeObj = {
            entities: {
                bugs:{
                    list: [
                        { 
                            id: 1, resolved: true
                        },
                        {
                            id: 2
                        },
                        {id: 3}
                    ]
                }
            }
        }
        const result = getUnresolvedBugs(fakeObj)
        expect(result).toHaveLength(2)
    })
})