import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { disconnect, Types } from 'mongoose'
import * as request from 'supertest'
import { CreateReviewDto } from '../src/review/dto/create-review.dto'
import { AppModule } from '../src/app.module'

const productId = new Types.ObjectId().toHexString()

const testDto: CreateReviewDto = {
	name: 'test',
	title: 'test',
	description: 'test',
	rating: 5,
	productId
}

describe('AppController (e2e)', () => {
	let app: INestApplication
	let createdId: string

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile()

		app = moduleFixture.createNestApplication()
		await app.init()
	})

	it('/review/create (POST)', async done => {
		return request(app.getHttpServer())
			.post('/review/create')
			.send(testDto)
			.expect(201)
			.then(({ body }: request.Response) => {
				createdId = body._id
				expect(createdId).toBeDefined()
				done()
			})
	})

	afterAll(async () => {
		await disconnect()
	})
})
