'use babel'

import MyAtomPackageTemplateView from '../lib/my-atom-package-template-view'
import { expect } from 'chai'

describe('MyAtomPackageTemplateView', () => {
  it('has own className in root element', () => {
    const view = new MyAtomPackageTemplateView({count: 0})
    const element = view.getElement()
    expect(element.className).to.equal('my-atom-package-template')
  })
})
