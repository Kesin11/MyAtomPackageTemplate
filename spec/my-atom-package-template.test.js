'use babel'

import MyAtomPackageTemplate from '../lib/my-atom-package-template'
import { expect } from 'chai'

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('MyAtomPackageTemplate', () => {
  let myAtomPackageTemplate
  let workspaceElement

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace)
    myAtomPackageTemplate = new MyAtomPackageTemplate()
  })

  afterEach(() => {
    myAtomPackageTemplate.deactivate()
  })

  describe('when the my-atom-package-template:toggle event is triggered', () => {
    it('hides and shows the modal panel', async () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.my-atom-package-template')).to.be.null

      await myAtomPackageTemplate.activate({})
      atom.commands.dispatch(workspaceElement, 'my-atom-package-template:toggle')

      expect(workspaceElement.querySelector('.my-atom-package-template')).to.exist

      let myAtomPackageTemplateElement = workspaceElement.querySelector('.my-atom-package-template')
      expect(myAtomPackageTemplateElement).to.exist

      let myAtomPackageTemplatePanel = atom.workspace.panelForItem(myAtomPackageTemplateElement)
      expect(myAtomPackageTemplatePanel.isVisible()).to.be.true
      atom.commands.dispatch(workspaceElement, 'my-atom-package-template:toggle')
      expect(myAtomPackageTemplatePanel.isVisible()).to.be.false
    })
  })
})
