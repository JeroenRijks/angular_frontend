import { DynamicListModule } from './dynamic-list.module';

describe('DynamicListModule', () => {
  let dynamicListModule: DynamicListModule;

  beforeEach(() => {
    dynamicListModule = new DynamicListModule();
  });

  it('should create an instance', () => {
    expect(dynamicListModule).toBeTruthy();
  });
});
