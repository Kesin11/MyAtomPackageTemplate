'use babel'
/** @jsx etch.dom */

import etch from 'etch'

export default class MyAtomPackageTemplateView {

  constructor(props) {
    this.props = props
    etch.initialize(this)
  }

  // jsx dom
  render () {
    return (
      <div class="my-atom-package-template">
        <div class="message">
          The MyAtomPackageTemplate package is Alive! It's ALIVE!
        </div>
      </div>
    )
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Perfome custom update logic here
  update (props) {
    return etch.update(this)
  }

  // Tear down any state and detach
  async destroy() {
    await etch.destroy(this)
  }

  getElement() {
    return this.element
  }

}
