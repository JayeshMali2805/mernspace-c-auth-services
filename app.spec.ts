import { calculateDiscount } from './src/utils.js'
import app from './src/app.js'
import request from 'supertest'
describe('App', () => {
  it('should return the correct discount amount', () => {
    const discount = calculateDiscount(100, 20) // 20% discount on $100
    expect(discount).toBe(20)
  })
  it('should return 200 status code', async () => {
    const response = await request(app).get('/').send()
    expect(response.statusCode).toBe(200)
  })
})
