import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common'
import {ReviewService} from './review.service'
import {ReviewModel} from './review.model'

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {}
}
