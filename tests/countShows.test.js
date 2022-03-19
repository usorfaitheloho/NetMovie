import { countShow } from '../src/modules/count.js'

describe('test the count show function', () => {
	test('Check if the shows are equal to 3', () => {
		const movies = [{ name: 'Arrow' }, { name: 'Blade' }, { name: 'Axe' }]
		const count = countShow(movies)

		expect(count).toBe(3)
	})
})
