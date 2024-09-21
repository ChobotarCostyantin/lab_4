import assert from 'assert';
import { Library } from '../src/library';

describe('Library Class', () => {
  let library: Library<string>;

  beforeEach(() => {
    library = new Library<string>();
  });

  it('should add an item to the library', () => {
    library.addItem('Book 1');
    assert.deepStrictEqual(library.getItems(), ['Book 1']);
  });

  it('should remove an item from the library', () => {
    library.addItem('Book 1');
    library.removeItem('Book 1');
    assert.deepStrictEqual(library.getItems(), []);
  });

  it('should update an item in the library', () => {
    library.addItem('Book 1');
    library.updateItem('Book 1', 'Updated Book 1');
    assert.deepStrictEqual(library.getItems(), ['Updated Book 1']);
  });

  it('should update multiple items in the library', () => {
    library.updateItems(['Book 1', 'Book 2']);
    assert.deepStrictEqual(library.getItems(), ['Book 1', 'Book 2']);
  });
});
