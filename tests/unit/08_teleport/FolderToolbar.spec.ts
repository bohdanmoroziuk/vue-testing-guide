// import { mount } from '@vue/test-utils';

// import AddFolderModal from '../../../src/components/08_teleport/AddFolderModal.vue';
// import FolderToolbar from '../../../src/components/08_teleport/FolderToolbar.vue';

beforeEach(() => {
  const el = document.createElement('div');
  el.id = 'modal';
  document.body.appendChild(el);
});

afterEach(() => {
  document.body.outerHTML = '';
});

describe('FolderToolbar', () => {
  it.todo('emits the add folder event on button click');
});
