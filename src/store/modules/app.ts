import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IAppState {
  books: any[];
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {

  public books: any[] = [];

  @Mutation
  private SET_BOOKS(ret: any[]) {
    this.books = ret;
  }


  @Action
  public async getBooks(): Promise<any> {
    let result: any = await fetch('http://www.babubaba.com/api/book/list').then((ret: any) => ret.json());
    let books: any[] =  JSON.parse(result.data);
    this.SET_BOOKS(books);
    return result;
  }

}

export const AppModule = getModule(App)
