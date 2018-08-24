import { PokedexModule } from './pokedex.module';

describe('PokedexModule', () => {
  let pokedexModule: PokedexModule;

  beforeEach(() => {
    pokedexModule = new PokedexModule();
  });

  it('should create an instance', () => {
    expect(pokedexModule).toBeTruthy();
  });
});
