'use babel';

import MyAtomPackageTemplateView from '../lib/my-atom-package-template-view';

describe('MyAtomPackageTemplateView', () => {
  it('has own className in root element', () => {
    const view = new MyAtomPackageTemplateView();
    const element = view.getElement()
    expect(element.className).toBe('my-atom-package-template')
  });
});
