'use babel';

import MyAtomPackageTemplateView from './my-atom-package-template-view';
import { CompositeDisposable } from 'atom';

export default {

  myAtomPackageTemplateView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.myAtomPackageTemplateView = new MyAtomPackageTemplateView(state.myAtomPackageTemplateViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.myAtomPackageTemplateView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'my-atom-package-template:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.myAtomPackageTemplateView.destroy();
  },

  serialize() {
    return {
      myAtomPackageTemplateViewState: this.myAtomPackageTemplateView.serialize()
    };
  },

  toggle() {
    console.log('MyAtomPackageTemplate was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};