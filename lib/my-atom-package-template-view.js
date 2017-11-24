'use babel'
/** @jsx etch.dom */

import etch from 'etch'

export default class MyAtomPackageTemplateView {

  constructor(props) {
    this.props = props
    this.message = ''
    etch.initialize(this)
  }

  // jsx dom
  render () {
    return (
      <div class="my-atom-package-template">
        <div class="message">
          The MyAtomPackageTemplate package is Alive! It's ALIVE!
        </div>
        <CounterComponent childcount={this.props.count}/>
        <div>{this.message}</div>
        <br/>
        <button on={{click: this.didClick}}>didClick</button>
        <button onClick={() => this.onClick()}>onClick</button>
      </div>
    )
  }

  didClick (event) {
    console.log(event) // eslint-disable-line no-console
    this.message = 'didClick'
    this.update(this.props)
  }

  onClick () {
    this.message = 'onClick'
    this.update(this.props)
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Perfome custom update logic here
  update (props) {
    this.props = props
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

class CounterComponent { // eslint-disable-line no-unused-vars
  constructor (props) {
    this.props = props
    etch.initialize(this)
  }

  render () {
    return (
      <div>count: {this.props.childcount}</div>
    )
  }

  // It called when parent component updating
  // props derived by parent component
  update (props) {
    this.props = props
    return etch.update(this)
  }
}
