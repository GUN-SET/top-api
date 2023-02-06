import {ConfigService} from '@nestjs/config'
import {TypegooseModuleOptions} from 'nestjs-typegoose'

export const getMongoConfig = async (
	configService: ConfigService
): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(configService),
		...getMongoOptions()
	}
}

const getMongoString = (configService: ConfigService) =>
	// 'mongodb://' +
	// configService.get('MONGO_LOGIN') +
	// ':' +
	// configService.get('MONGO_PASSWORD') +
	// '@' +
	// configService.get('MONGO_HOST') +
	// ':' +
	// configService.get('MONGO_PORT') +
	// '/' +
	// configService.get('MONGO_AUTHDATABASE')

	'mongodb+srv://' +
	configService.get('MONGO_LOGIN') +
	':' +
	configService.get('MONGO_PASSWORD') +
	'@cluster0.lcatdto.mongodb.net/?retryWrites=true&w=majority'

/*mongodb+srv://admin:<password>@cluster0.lcatdto.mongodb.net/?retryWrites=true&w=majority*/

const getMongoOptions = () => ({
	useNewUrlParser: true,
	useUnifiedTopology: true
})
