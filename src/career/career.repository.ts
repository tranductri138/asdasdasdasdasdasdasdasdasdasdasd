import { EntityRepository, Repository } from 'typeorm';
import { CareerEntity } from './models/entities/career.entity';

@EntityRepository(CareerEntity)
export class CareerRepository extends Repository<CareerEntity> {
  async updateQuestionFirst(question: string, name: string) {
    //   let query = `update books set author = "${author}" , title = "${title}" where id = "${idx}"`;
    const query = `update career set questionFirst = "${question}" where(name = "${name}")`;
    return await this.manager.query(query);
  }
}
