import {Module} from '@nestjs/common'
import {TopPageService} from './top-page.service'
import {TopPageController} from './top-page.controller'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {TypegooseModule} from 'nestjs-typegoose'
import {TopPageModel} from './top-page.model'

@Module({
	imports: [
		ConfigModule,
		TypegooseModule.forFeature([
			{
				typegooseClass: TopPageModel,
				schemaOptions: {
					collection: 'TopPage'
				}
			}
		])
	],
	controllers: [TopPageController],
	providers: [TopPageService, ConfigService]
})
export class TopPageModule {}
