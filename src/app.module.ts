import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { ReviewModule } from './review/review.module'
import { ProductModule } from './product/product.module'
import { TopPageModule } from './top-page/top-page.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { mongoConfig } from './configs/mongo.config'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: mongoConfig
		}),
		AuthModule,
		TopPageModule,
		ProductModule,
		ReviewModule
	]
})
export class AppModule {}
