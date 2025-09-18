import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API Avaliação DevOps')
    .setDescription('API desenvolvida para Avaliação de DevOps')
    .setVersion('1.0')
    .addTag('Patients', 'Gestão de dados de pacientes')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  await app.listen(Number(process.env.PORT) ?? 3001);
}
bootstrap();
