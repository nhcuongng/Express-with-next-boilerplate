import { Query, Resolver } from 'type-graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  me() {
    return 'Hi i am Cuong';
  }
}
